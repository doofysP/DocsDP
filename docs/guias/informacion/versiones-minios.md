---
head:
  - - meta
    - name: og:description
      content: Diferencias entre las variadas versiones que tiene MiniOS
  - - meta
    - name: og:title
      content: Versiones de MiniOS | Información
  - - meta
    - name: zep
      content: versiones
---

# Diferencias entre versiones de MiniOS

DProjects se ha enfocado en modificar diferentes versiones de Windows para lanzarlas al público general, pero, muchas veces, no llega a ser clara cuál es la diferencia entre uno y otro, como si el 7 es mejor que el 8, diferencias entre `boot7` y `boot10`, que es `x86` y `x64` entonces lo explicaremos brevemente.

## Arquitectura y otros

### 32bits y 64bits
Oficialmente en Windows, así como en el desarrollo de aplicaciones y sistemas, se separan por arquitecturas, como lo son 32bits (o también x86) y 64bis (o también x64). En resumen, es la manera en como se encuentra fabricado el procesador del equipo y cómo soporta el uso de la RAM.

- **32 bits** soporta únicamente 4GB de RAM, es ideal para quienes tienen solamente 4GB o menos, ya que el procesador se comporta adecuadamente a la memoria, sin desbordar de más el uso de la RAM intentando brindar el mejor rendimiento posible.
- **64 bits** soporta más de 4GB de RAM, por ende, si tienes más de 4GB es recomendable usarlo, puesto que, el procesador podrá ocuparla totalmente, a diferencia de 32bits que se limitará a ello.
  - Es decir, si tienes 8GB de RAM y usas 32bits, entonces el sistema se limitará a 4GB y no usará la restante.

### Boot7 y Boot10
Cuando se refiere a alguna de las dos, es el modelo de instalación que se usará para instalar Windows, es decir, usar el instalador de Windows 7 (Boot7) o usar el instalador de Windows 10 (Boot 10)

- **¿Por qué?** Sencillamente, hay equipos que no permiten naturalmente abrir el instalador de Window 7, ya que el equipo no está adaptado a arrancarlo por cuestiones de compatibilidad; sin embargo, el instalador de Windows 10 lo abre normalmente, entonces por ello debe de elegirse entre Boot7 y Boot10 al momento de arrancar el sistema. Generalmente, **puedes usar Boot10 en la mayoría de casos**.

## Ediciones de Windows

| Edición | Versión de Windows | Versión de MiniOS |
|---|---|---|
| Windows 7 | Profesional SP1 | MiniOS7 |
| Windows 8 | 8.1 Upd3 | MiniOS8 |
| Windows 10 LTSB | 1607 | MiniOS10 LTSB |
| Windows 10 LTSC | 1809 y 21H2 | MiniOS10 LTSC |
| Windows 10 Pro | 22H2 | MiniOS10 Pro |
| Windows 11 Pro | 24H2 | MiniOS11 Pro |
| Windows 11 LTSC |LTSC 24H2 |  MiniOS11 LTSC |


### LSTC y LTSB
Hay que entender que, tanto LTSC y LTSB son lo mismo y forman parte del mismo ecosistema; sin embargo, fueron desarrollados en diferentes momentos. LTSB hace referencia al modelo de sistema que brinda un soporte extendido, que elimina gran parte de contenido y aplicaciones de Microsoft para enfocarse en empresas (sin embargo, no está totalmente dirigido a ellos, también lo está para todos). Por otro lado, LTSC es lo mismo; sin embargo, Microsoft se decantó en unificar el concepto, mejorarlo y seguirle dando desarrollo activo.

- `LTSB` es entonces una versión recortada de Windows, eliminando aplicaciones y funciones mayormente innecesarias y que generan carga al sistema. Actualmente, no se volvió a desarrollar y se dio paso a seguirla desarrollando bajo el nombre LTSC.
- `LTSC` sigue las bases de LTSB, pero ahora, con un soporte más activo y, por tanto, en versiones de Windows más recientes.

::: tip Definición técnica.
**LTSB:** Long Term Servicing Branch | **LTSC:** Long Term Servicing Channel
:::


### MiniOS X
Ante la necesidad de experimentar más en el sistema, recortarlo y modificarlo afectando claramente la compatibilidad en algunos aspectos, se lleva a desarrollar MiniOS X, como una versión totalmente experimental donde se hacen pruebas diferentes de recorte en el sistema pero sacrificando un poco la compatibilidad. ¿Realmente es recomendable? Puede ser que no necesariamente es malo por ser tan recortado, de hecho, su consumo es bastante bajo, pero si requieres de funciones muy específicas o una compatibilidad puntual con aplicaciones y juegos, no se garantiza el 100% del funcionamiento.