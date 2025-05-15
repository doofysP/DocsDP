##[Ps1 To Exe]
##
##Kd3HDZOFADWE8uO1
##Nc3NCtDXTlaDjpba4CF64EX6USgqYMHbirOz0Iiy+PnQmiHUQJQdWkBlly3zFneYSvEAXOEaptgeaTslO/1LxoKeEuSmJQ==
##Kd3HFJGZHWLWoLaVvnQnhQ==
##LM/RF4eFHHGZ7/K1
##K8rLFtDXTiW5
##OsHQCZGeTiiZ49I=
##OcrLFtDXTiW5
##LM/BD5WYTiiZ4tI=
##McvWDJ+OTiiZ4tI=
##OMvOC56PFnzN8u+Vs1Q=
##M9jHFoeYB2Hc8u+Vs1Q=
##PdrWFpmIG2HcofKIo2QX
##OMfRFJyLFzWE8uK1
##KsfMAp/KUzWJ0g==
##OsfOAYaPHGbQvbyVvnQX
##LNzNAIWJGmPcoKHc7Do3uAuO
##LNzNAIWJGnvYv7eVvnQX
##M9zLA5mED3nfu77Q7TV64AuzAgg=
##NcDWAYKED3nfu77Q7TV64AuzAgg=
##OMvRB4KDHmHQvbyVvnQX
##P8HPFJGEFzWE8tI=
##KNzDAJWHD2fS8u+Vgw==
##P8HSHYKDCX3N8u+Vgw==
##LNzLEpGeC3fMu77Ro2k3hQ==
##L97HB5mLAnfMu77Ro2k3hQ==
##P8HPCZWEGmaZ7/K1
##L8/UAdDXTlaDjpba4CF64EX6USgqYMHbirOz0Iiy+PnQmiHUQJQdWkBlly3zFneYSvEAXOEaptgeaTUrPfYc46DVW86NBYYFneVmyTGd5oI7GlDd4Ifn5UrcyoXFfg==
##Kc/BRM3KXxU=
##
##
##fd6a9f26a06ea3bc99616d4851b372ba
if (-NOT ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    $psPath = if ([Environment]::Is64BitOperatingSystem -and -not [Environment]::Is64BitProcess) {
        "$env:SystemRoot\SysNative\WindowsPowerShell\v1.0\powershell.exe"
    } else {
        "$env:SystemRoot\System32\WindowsPowerShell\v1.0\powershell.exe"
    }

    try {
        Start-Process -FilePath $psPath -ArgumentList @(
            "-NoProfile",
            "-ExecutionPolicy Bypass",
            "-File `"$($MyInvocation.MyCommand.Path)`""
        ) -Verb RunAs -WindowStyle Hidden
    }
    catch {
        Write-Host "ERROR: Debes ejecutar este script como administrador." -ForegroundColor Red
        if ($Host.Name -eq "ConsoleHost") { pause }
    }
    exit
}

$error.Clear()
$logPath = Join-Path $env:TEMP "HWIDs_Errors.log"

function Test-WMIService {
    try {
        $service = Get-Service -Name winmgmt -ErrorAction Stop
        if ($service.Status -ne 'Running') {
            Start-Service winmgmt -ErrorAction Stop
            Start-Sleep -Seconds 2
        }
    }
    catch {
        try {
            Start-Process -WindowStyle Hidden -FilePath "winmgmt" -ArgumentList "/verifyrepository" -Wait -ErrorAction Stop
            Start-Process -WindowStyle Hidden -FilePath "winmgmt" -ArgumentList "/resetrepository" -Wait -ErrorAction Stop
        }
        catch {
            "ERROR WMI: $_" | Out-File $logPath -Append -Encoding UTF8
            return $false
        }
    }
    return $true
}

$reportPath = @([System.Environment]::GetFolderPath('Desktop'), $env:ProgramData, $env:TEMP) | 
    Where-Object { ($_ -ne $null) -and (Test-Path $_) } | 
    Select-Object -First 1 | 
    ForEach-Object { Join-Path $_ "Hardware_IDs.txt" }

function Get-CleanHardwareID {
    param ($deviceID)   
    switch -Regex ($deviceID) {
        "PCI\\VEN_([A-F0-9]{4})&DEV_([A-F0-9]{4})" { "PCI\VEN_$($matches[1])&DEV_$($matches[2])" }
        "USB\\VID_([A-F0-9]{4})&PID_([A-F0-9]{4})" { "USB\VID_$($matches[1])&PID_$($matches[2])" }
        "SD\\VID_([A-F0-9]{4})&PID_([A-F0-9]{4})" { "SD\VID_$($matches[1])&PID_$($matches[2])" }
        default { $null }
    }
}

$gpuResults = @()
$wifiResults = @()
$wmiOK = Test-WMIService

if ($wmiOK) {
    try {
        $gpuResults = @(Get-WmiObject Win32_VideoController -ErrorAction Stop | Where-Object { $_.PNPDeviceID -match "PCI\\VEN_" } | ForEach-Object {
            if ($cleanID = Get-CleanHardwareID $_.PNPDeviceID) {
                [PSCustomObject]@{Type="GPU";ID=$cleanID;Name=$_.Name}
            }
        })

        $wifiResults = @(Get-WmiObject Win32_NetworkAdapter -ErrorAction Stop | Where-Object { 
            ($_.NetConnectionID -match "Wi-Fi|Wireless") -and
            ($_.Name -notmatch "Hyper-V|Virtual|VPN|Virtio|1394|Bluetooth|Ethernet") -and
            ($_.PNPDeviceID -notmatch "ROOT\\|VIRTUAL")
        } | ForEach-Object {
            if ($cleanID = Get-CleanHardwareID $_.PNPDeviceID) {
                [PSCustomObject]@{
                    Type=if($_.PNPDeviceID -match "USB\\"){"Wi-Fi USB"}elseif($_.PNPDeviceID -match "SD\\"){"Wi-Fi SD"}else{"Wi-Fi Interno"}
                    ID=$cleanID
                    Name=$_.Name
                }
            }
        })
    }
    catch {
        "ERROR DETECCIÓN: $_" | Out-File $logPath -Append -Encoding UTF8
        Write-Host "ERROR: $_" -ForegroundColor Red
        if ($Host.Name -eq "ConsoleHost") { pause }
        exit 1
    }
}
else {
    Write-Host "ERROR: Servicio WMI no disponible" -ForegroundColor Red
    exit 1
}

if ($gpuResults.Count -gt 0 -or $wifiResults.Count -gt 0) {
    try {
        $reportContent = @()
        if ($gpuResults.Count -gt 0) {
            $reportContent += "=== IDs GPU ==="
            $reportContent += $gpuResults | ForEach-Object { "GPU: $($_.Name) -> $($_.ID)" }
        }
        if ($wifiResults.Count -gt 0) {
            if ($reportContent.Count -gt 0) { $reportContent += "`n" }
            $reportContent += "=== IDs Wi-Fi ==="
            $reportContent += $wifiResults | ForEach-Object { "$($_.Type): $($_.Name) -> $($_.ID)" }
        }
        $reportContent | Out-File $reportPath -Encoding UTF8 -Force

        try {
            Add-Type -AssemblyName System.Windows.Forms
            [System.Windows.Forms.MessageBox]::Show("Reporte generado en:`n$reportPath`n`nCréditos: Franco, Moderador de Doofy's Projects", "Éxito")
        }
        catch {
            Write-Host "Reporte generado en: $reportPath" -ForegroundColor Green
            if ($Host.Name -eq "ConsoleHost") { 
                Write-Host "Presione Enter..."
                [void][System.Console]::ReadLine()
            }
        }
    }
    catch {
        Write-Host "ERROR AL GUARDAR: $_" -ForegroundColor Red
        exit 1
    }
}
else {
    Write-Host "No se encontraron dispositivos." -ForegroundColor Yellow
}