---
head:
  - - meta
    - name: og:description
      content: Crea un sistema de arranque multiple con Ventoy.
  - - meta
    - name: og:title
      content: Ventoy | Instalación
---

# ¿Cómo usar Ventoy?
::: danger Advertencia
**No se recomienda este método para MiniOS**, ya que, no funciona del todo bien con algunas versiones; sin embargo, puede funcionar.
:::

Ventoy es una herramienta que permite crear unidades de arranque, tal como lo haría [Rufus](./metodo-rufus), pero siendo capaz de almacenar más de un archivo de instalación, como lo son `ISO`, `WIM`, `IMG`, `VHD`, o `EFI` dentro de la misma unidad.


## Pre-requisitos
- Archivo `.iso`/`.wim`/`.efi`... a instalar
  - El archivo no deberá tener espacios en su nombre
- La aplicación de [Ventoy](https://www.ventoy.net/en/download.html)

::: warning Precaución
Se recomienda que el dispositivo USB tenga más de 8GB de capacidad.
:::


## Instalación de Ventoy
Una vez se tenga la aplicación lista para usar, es decir, cuando tengamos nuestro archivo `Ventoy2Disk.exe` nos disponemos a abrirla no sin antes haber ingresado el USB al equipo para que lo reconozca una vez esté abierta la aplicación.

![Ventoy](/assets/Instalacion/Ventoy.png)


### Estructura
Dentro de la aplicación se tiene en cuenta 3 pasos:

1. **Device:** Es la memoria USB a la que se le aplicará el proceso de Ventoy.
2. **Option > Partition Style:** Es el [esquema de partición](/guias/informacion/bios-uefi) con el que cuenta la partición a la que se le practican las instalaciones.
3. **Inicio:** Es el botón `Install` con el cual se prepara el USB.

Es un proceso sencillo y muy entendible, y en caso de no haber presentado algún error en el proceso, ya estaría aplicado todo cambio que realice Ventoy quedando listo el dispositivo para su uso.


## Funcionar de Ventoy
No hay procesos extras una vez se hayan aplicado los cambios de Ventoy, ahora es una memoria que sirve como arranque de sistemas, pero sigue estando vacía en su totalidad. 

Simplemente, se deben de copiar y pegar los archivos al almacenamiento de la memoria y sería todo lo que hay por hacer.

![VentoyAlmacenamiento](https://www.profesionalreview.com/wp-content/uploads/2022/06/Como-instalar-varios-sistemas-operativos-con-un-solo-USB-con-Ventoy-0.jpg)