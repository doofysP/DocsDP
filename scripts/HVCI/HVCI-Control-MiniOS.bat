@echo off
chcp 65001 >nul
title HVCI Control - Estado/Configuracion
mode con cols=60 lines=15
color 09

:: Verificar estado HVCI
set "hkey=HKLM\SYSTEM\CurrentControlSet\Control\DeviceGuard\Scenarios\HypervisorEnforcedCodeIntegrity"
set "status=Desactivado"
reg query "%hkey%" /v Enabled 2>nul | find "0x1" >nul && set "status=Activado"

echo.
echo ==========================================
echo    Estado actual: HVCI %status%
echo ==========================================
echo.
echo 1) HVCI Encendido
echo 2) HVCI Apagado (Stock)
echo.
echo ==========================================
set /p "opt=Seleccione una opcion [1-2]: "

if "%opt%"=="1" goto e
if "%opt%"=="2" goto d
echo Opcion invalida. Cierre y vuelva a intentar.
timeout /t 3 /nobreak >nul
exit

:e
echo Configurando HVCI...
bcdedit /set hypervisorlaunchtype auto >nul
reg add "%hkey%" /v Enabled /t REG_DWORD /d 1 /f >nul
echo.
echo [+] HVCI Activado correctamente.
echo     Reinicie el sistema para aplicar cambios.
timeout /t 5 /nobreak >nul
exit

:d
echo Restaurando configuracion stock...
bcdedit /set hypervisorlaunchtype off >nul
reg add "%hkey%" /v Enabled /t REG_DWORD /d 0 /f >nul
echo.
echo [+] HVCI Desactivado (Stock).
echo     Reinicie el sistema para aplicar cambios.
timeout /t 5 /nobreak >nul
exit