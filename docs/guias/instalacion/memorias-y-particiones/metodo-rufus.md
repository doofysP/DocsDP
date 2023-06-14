---
head:
  - - meta
    - name: og:description
      content: La manera tradicional para crear memorias USB listas con el sistema a instalar.
  - - meta
    - name: og:title
      content: ¿Cómo bootear una USB? | Instalación
---

# ¿Cómo bootear una USB?

Este proceso es mayormente necesario para que nuestra USB sirva como un arranque al sistema que busquemos instalar.

## Pre-requisitos
- Archivo `.iso` de Windows. Obtenible desde [DProjects](https://dprojects.org/) para MiniOS o para la versión oficial desde [Media Creation Tool](https://www.microsoft.com/es-es/software-download/) (o desde repositorios de archivos como lo son [TechBench](https://tb.rg-adguard.net/public.php))
- Aplicación de booteo. Para esta guía se explicará con el metodo [Rufus](https://rufus.ie/es/)

::: warning Precaución
Se aconseja tener una memoria USB de minimo `8GB` de capacidad.
:::

## Bootear USB

Abriremos Rufus para iniciar el proceso de booteo del ISO dentro de nuestra USB. 

Principalmente, dividiremos esta aplicación en 3 selecciones:
* Memoria USB
* Archivo ISO
* Esquema de partición

### 1. Selección de USB
Relativamente el paso más sencillo; ingresa tu memoria USB al equipo, luego, abre Rufus y selecciónala en el espacio correspondiente.

<div align=center>
<img src="/assets/Instalacion/Rufus1.png" alt="Rufus1" width="400" />
</div>

### 2. Archivo ISO
El segundo paso es seleccionar el archivo `.iso` del sistema. Dentro de Rufus la seleccionamos desde la sección **Elección de arranque**.

<div align=center>
<img src="/assets/Instalacion/Rufus2.png" alt="Rufus2" width="400" />
</div>

### 3. Esquema de partición
Este paso, mayormente, es seleccionado por el mismo archivo `.iso` que acabamos de seleccionar, sin embargo, eso no precisa algunas veces la opción que necesitamos. Esta sección de *Esquema de partición* nos permite especificar si contamos con UEFI o BIOS tradicional en nuestro equipo. Para conocer más sobre esta sección y qué debería seleccionar puedes dirigirte a la guía [**Conocer si soy BIOS o UEFI**](https://docs.dprojects.org/guias/informacion/bios-uefi).

<div align=center>
<img src="/assets/Instalacion/Rufus3.png" alt="Rufus3" width="400" />
</div>

## Inicio de booteo

Finalmente, ya podemos iniciar el proceso con el boton de __**EMPEZAR**__ y tendriamos configurado Rufus similar a esto:

<div align=center>
<img src="/assets/Instalacion/Rufus.png" alt="Rufus" width="400" />
</div>

::: tip A tener en cuenta
La opción de **Etiqueta de Volumen** es el nombre con el que quedará la memoria USB. Las demás opciones no explicadas es mejor no tocarlas si no se conoce bien del tema.
:::
