---
head:
  - - meta
    - name: og:description
      content: Requisitos recomendados para Windows
  - - meta
    - name: og:title
      content: Requisitos para Windows | Información
---

# Requisitos para Windows
El sistema operativo de Microsoft ha lanzado varias versiones de Windows y sobre estos sistemas, múltiples ediciones. Con el pasar del tiempo y la evolución tecnológica frente al hardware de un equipo, han ido cambiando las necesidades de un sistema tanto como los requisitos para usar uno.


## Conocer los componentes de mi equipo
::: tip Algo necesario
Es de vital importancia conocer este aspecto para poder guiarme y tener una idea de lo que necesito y puedo soportar.
:::

Existen infinidad de formas para conocer las propiedades de mi equipo, sin embargo, varía entre las formas de acceder a ellas y la cantidad de información que nos ofrece; por tanto, se mostrarán métodos propios de Windows y con aplicaciones de terceros.


### Desde mi equipo
::: details Ver información
1. <Badge type="tip" text="Configuracion y Panel de Control" />
Generalmente, el más usado y práctico para conocer los componentes.
  - <Badge type="info" text="Panel de control" /> En su pantalla principal, nos dirigimos a **Sistema y Seguridad** y luego en ***Sistema > Ver cantidad de memoria RAM y velocidad del procesador***.
  - <Badge type="info" text="Configuración" /> Disponible desde Windows 10, al acceder a ella ingresamos a la pestaña de **Sistema** y buscamos la opción de ***Acerca de***.

2. <Badge type="tip" text="Información de DirectX" />
Es capaz de discriminar los componentes del procesamiento, memoria y adaptadores de pantalla (gráficos del equipo).
  - <Badge type="info" text="Diagnostico DirectX" /> Tenemos que abrir la herramienta de **Ejecutar** con `Win` + `R` y escribir `dxdiag`, esto abrirá la ***Herramienta de diagnóstica de DirectX***.

3. <Badge type="tip" text="Administrador de Tareas" />
Una herramienta que se utiliza bastante y, sin embargo, se nos olvida que cuenta con información del sistema.
  - <Badge type="info" text="Rendimiento" /> Abrimos nuestro **Administrador de tareas**, normalmente con click derecho en la barra de tareas aparece esta herramienta, y buscamos la pestaña de ***Rendimiento***.

4. <Badge type="tip" text="Información detallada" />
Con elementos propios del sistema Windows podemos conocer más que el nombre y propiedades superficiales de nuestro hardware.
  - <Badge type="info" text="Consola" /> Podemos utilizar CMD o Powershell para este proceso; una vez abierta la consola, escribimos el comando `systeminfo`
  - <Badge type="info" text="Información del sistema" /> Tenemos que abrir la herramienta de **Ejecutar** con `Win` + `R` y escribir `msinfo32.exe`, esto abrirá la **Información del sistema**, en el resumen del sistema estará lo suficiente a conocer, sin embargo, explorando las diferentes ***categorías*** podremos conocer información detallada de hardware y controladores.
:::

### Aplicaciones de terceros
::: details Ver información
1. <Badge type="tip" text="AIDA64" />
Está en el menú extendido. Unicamente soporta equipos x64
  - <Badge type="info" text="AIDA64" /> Una vez tengamos la aplicación podemos abrirla y explorar sus categorías, de relevancia podemos ver ***Equipo*** y ***Placa base***.

2. <Badge type="tip" text="CPU/GPU-Z" />
Está en el menú extendido. Ambas herramientas son portables.
  - <Badge type="info" text="CPU-Z" /> Proporciona información específica del procesador, RAM, gráficos y demás.
  - <Badge type="info" text="GPU-Z" /> Se enfoca en la información propia de la gráfica del equipo.
:::

## Requisitos en Windows
Se tratarán las más conocidas y recurrentes versiones de Windows en sus últimas décadas, es decir, excluyendo versiones como lo son ***XP***, ***Vista***, ***ME*** y anteriores.

::: tip Algunas constantes
1. Recordar que versiones x64 están dirigidas para más de 4GB de RAM, sin embargo, si tienes menos también puedes utilizarla, pero no es recomendable.
2. Infórmate sobre la **compatibilidad de tus componentes**. Por ser un equipo con equipaciones básicas, no significa que soporte versiones anteriores de Windows; muchas veces, no cuenta con controlador alguno.
3. Se presentarán requisitos mínimos.
:::


### Windows 7
Una de las mejores versiones lanzadas por Microsoft y con una de las coberturas más amplias a nivel mundial, es ahora un sistema sin soporte oficial; sin embargo, no deja de ser una muy buena y completa versión del sistema. El tiempo ha pasado factura a este sistema, puesto que los componentes actuales no soportan este sistema por su antigüedad y las aplicaciones han ido dejando, poco a poco, de enviar actualizaciones a sus productos.

```yml
Procesador: [1 - 2 Nucleos] 1Ghz +
RAM: 1GB +
Notas:
  - Revisar la compatibilidad de tus componentes con el sistema.
  - Tener 1GB o 2GB (al igual que la velocidad del procesador) no asegura un funcionamiento optimo.
```

### Windows 8
La versión que continuó después de Windows 7 generó controversia con su versión 8 y 8.1 por sus pocos avances y fallas con el software presentado para esta versión que la hicieron perder bastante público; aplicaciones como la tienda fueron descontinuadas de forma rápida por parte de Microsoft. A todo esto, mucha gente infravalora el rendimiento que puede ofrecer, ya que, en algunos aspectos, supera a Windows 7 y genera compatibilidad extra frente a algunas características. Hoy por hoy, Microsoft ha decidido dejar de brindarle soporte a este sistema y las aplicaciones, pero en menor medida, de enviar actualizaciones a sus productos.

```yml
Procesador: [2+ Nucleos] 1.5Ghz +
RAM: 2GB +
Notas:
  - Revisar la compatibilidad de tus componentes con el sistema.
  - La velocidad del procesador y memoria RAM son minimas para el buen funcionar. Puede usarse Windows 7 en lo posible para un mejor rendimiento.
```

### Windows 10
Uno de los más grandes lanzamientos por parte de Microsoft, y apuesta por la cual han perdurado con el pasar de los años desde 2015, ha tenido avances muy significativos frente a los predecesores Windows 8 y Windows 7 en general, su aspecto y funcionar no deja de ser uno bastante práctico para todos mejorando en el aspecto visual. Se convirtió, por su desarrollo, en un sistema sostenible por el cual, también han nacido nuevas ediciones dentro de Windows 10 dirigidas a diferentes propósitos.

#### Ediciones Enterprise
Inicialmente, el público de Windows 10 Enterprise fue dirigido al sector empresarial, ya que no contaba con aplicaciones de Microsoft que añadía al sistema como la tienda, algunos juegos, características, que a fin de cuentas no aportaban al entorno empresarial y era un peso que reducía, tanto al sistema como al rendimiento. Hoy por hoy se ha vuelto una edición ligera y útil para quien no utilice los servicios preinstalados de Microsoft que vienen por defecto.

```yml
Procesador: [2+ Nucleos] 2.0Ghz ++
RAM: 4GB +
Notas:
  - Cuentan con ediciones LTSB y LTSC
  - La edición LTSB es de los primeros años de aniversario, por tanto, puede llegar a no ser compatible con software/hardware actual.
  - Se recomienda una mayor capacidad de memoria RAM, ya que, sin importar que sea una edición ligera, no deja de ser un sistema Windows 10 (con muchos procesos)
```

#### Edición Professional/Workstation/Home
A diferencia de las ediciones Enterprise, esta edición Professional, Workstation u Home, cuenta con una mayor cantidad de procesos, así como un sistema Windows 10 más completo con todos sus complementos. No necesariamente significa que sea lento o pesado, hay que entender que Windows 10 ha ido avanzando y mejorando en sus aspectos con el tiempo, lo que conlleva a agregar características que juegan un papel importante en el rendimiento y, por tanto, necesitamos de unas especificaciones del equipo más competentes para este sistema.

```yml
Procesador: [4+ Nucleos] 2.5Ghz +
RAM: 6/8GB +
Notas:
  - La versión Home se dirige a equipos de hogar, reduce ciertas funcionalidades que trae Windows 10 en general.
  - La versión Professional trae todas las caracteristicas, lo que en la medida de lo posible, puede llevar Windows 10.
  - La versión Workstation se dirige a servidores, pero su funcionalidad no se limita a ello; cuenta con una mejor gestión de procesos y un mejor rendimiento general para trabajos pesados.
```

### Windows 11
Lanzado de forma oficial a finales del año 2021, muestra un exponencial avance frente a lo visual, un gran salto de lo que ya estábamos acostumbrados con Windows 10. Ha sido desarrollado de una forma lenta, en ese orden de ideas, algunos servicios de empresas como sus aplicaciones no tienen una compatibilidad dirigida a Windows 11 específicamente, si no, algo muy general a la espera de una estabilidad completa del sistema. Incluyó en uno de sus requisitos, el tener [TPM](https://www.xataka.com/basics/que-tpm-como-comprobar-tu-ordenador-tiene-para-poder-instalar-windows-11) 2.0 integrado en el equipo.

```yml
Procesador: [4+ Nucleos] 2.5Ghz+
RAM: 6GB ++
Notas:
  - Revisar la compatibilidad de tu equipo con este sistema.
  - No cuenta con arquitectura de 32 bits.
```


## Importante
::: danger Nota de la página
Se abarcó muy general y superficial los datos a tener en cuenta, así como los componentes necesarios.

***¿A qué se refiere esto?***
Es importante que entiendas que los componentes que tiene tu equipo, los que tenga tu amigo, un conocido, o alguien que distingas de internet, **no son iguales ni idénticos**. Pueden tener variaciones de fábrica, por uso, desgaste o daños, lo que significa que rinden diferente en todos los casos y condiciones.

Recuerda que tienes la tarea de investigar, por cuenta propia, la compatibilidad de tu equipo y sus componentes con el sistema que deseas instalar.
También que todos los sistemas rinden diferente y que **instalar un sistema antiguo no significa más rendimiento**
:::
