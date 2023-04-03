---
head:
  - - meta
    - name: og:description
      content: ¿Cómo sé que mi equipo cuenta con UEFI o Legacy (BIOS)?
  - - meta
    - name: og:title
      content: UEFI o BIOS | Información
---

# Tengo UEFI o BIOS

La incógnita nace de saber que tipo de tecnología usa mi equipo para la gestión de inicio de hardware, mayormente se utilizará para gestionar los valores de manera manual, o para este caso, para conocer si debo de seleccionar UEFI o BIOS en algún programa específico que me lo solicite, como es el caso de Rufus.

::: details Información sobre BIOS y UEFI
  - **BIOS** ha sido una tecnología usada por muchos años y que abarca una gran cantidad de equipos, sin embargo, con el pasar del tiempo se ha visto acogido con algunas limitaciones en términos de seguridad, compatibilidad y capacidad de configuración.
  - **UEFI** por su parte, se viene desarrollando desde tiempos más recientes con un gran avance respecto a la interfaz que utiliza y las correcciones frente a su predecesor.
:::

## Método 1: Información del sistema
Desde Windows, contamos con herramientas propias para determinar qué tipo de tecnología está presente; para este método se utilizará el programa de ***Información del sistema***

### Pasos a seguir
  1. Oprimir las teclas `Win` + `R`
  2. Digitar dentro `msinfo32.exe` y abrirlo.
  3. Dentro de la Información del sistema, entrar a la pestaña de **Resumen del sistema** y buscar el elemento llamado `Modo de BIOS`

![msinfo32.exe](/assets/Informacion/msinfo.png)

En su valor puede aparecer `Heredado` o `UEFI`; Heredado hace referencia a que la instalación del sistema fue hecha bajo un modo Legacy (BIOS), caso contrato en caso de aparecer en su valor como UEFI, de primeras entendemos que la instalación fue hecha bajo este modo.

## Método 2: Administrador de discos
El recurso que lleva desde bastantes ediciones dentro de Windows, que permite gestionar de una manera más avanzada las particiones del sistema, también nos ayuda a reconocer bajo qué tecnología fue instalado el sistema.

:::details Mira aquí como abrir el Administrador de discos
**Ejecutar:**
  1. `Win` + `R`
  2. Escribir dentro `diskmgmt.msc`

**Panel de control:**
  1. Abrir el Panel de control
  2. Buscar en su pestaña principal la opción de **Sistema y Seguridad**
  3. Una vez dentro, buscar (En la parte inferior) la opción **Herramientas Administrativas** y seleccionar la opción de __*Crear y formatear particiones del disco duro*__
:::

### Inspección de particiones
Sucede que cuando se instala el sistema, dependiendo del tipo de tecnología, crea 2 o más particiones extras y esto sirve para identificar qué modo de BIOS es.

| Modo de BIOS | Partición 1 | Partición 2 | Partición 3 |
|:------------:|:-----------:|:-----------:|:-----------:|
| **BIOS** | Reservado para el sistema (NFTS) | Puede aparecer otro reservado (NFTS)| Partición del sistema (NFTS) |
| **UEFI** | Partición de sistema (EFI) | Partición reservada de Microsoft (Sin formato) | Partición del sistema (NFTS) |

![Administrador de Discos](/assets/Informacion/admdiscos.png)

  - Si donde se encuentra instalado el sistema cuenta con todas las particiones (de 2 a 3) en formato `NFTS` utiliza BIOS
  - Si donde se encuentra instalado el sistema tiene 3 particiones en este orden: `EFI` en `FAT32`, Sin formato y `NFTS` en la principal, es UEFI.

## Método 3: Esquema de Partición
Ligado con el tipo de BIOS, el esquema de partición suele indicar qué tipo de tecnología es por el esquema que cuenta una partición del sistema.

### Consola de comandos
Para empezar debemos de abrir la consola del sistema, es decir, `CMD` o `Powershell`.

  1. Escribir dentro de la consola `diskpart`; esto abrirá una nueva consola lista para conocer información del disco
  2. Estando dentro, escribir `list disk`

![diskpart](/assets/Informacion/diskpart.png)

Como se indicó previamente, el conocer el esquema de partición permite asumir qué tipo de tecnología se utiliza; cuando el disco donde esté instalado el sistema tenga un `*` en la última casilla **GPT** significa que utiliza UEFI, de lo contrario al **no llevar un** `*` se puede asumir que es BIOS.