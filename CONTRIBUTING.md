# Guía de Contribución - Doofy's Projects
Estamos agradecidos por el interés al proyecto y que puedas contribuir a este. Antes de continuar con el desarrollo de este documento informativo puedes atender los siguientes vínculos:

* [Código de Conducta](https://github.com/doofysP/GuiasDP/blob/main/CODE_OF_CONDUCT.md)
* [Lineamientos en Solicitudes de Cambio](#lineamientos-en-solicitudes-de-cambio)
* [Lineamientos y procedimientos varios](https://discord.gg/2jJRNbyqMB)

## Lineamientos en Solicitudes de Cambio
El manejo del Pull Request se verá regulado por conductas y prácticas básicas.

![Crear Pull Request](https://cdn.discordapp.com/attachments/1017537991813632111/1092494792476348528/firefox_yiMJNEJ4ik.png)

- Al realizar la solicitud, asegúrese que pueda ejecutarse localmente **sin conflicto** alguno, revisando la paridad de:
  - Versión de Vitepress (Consúltela en el archivo [`package.json`](package.json))
  - Cambios recientes (Consulte los [cambios en la rama principal](https://github.com/doofysP/GuiasDP/commits/main))
  - Como extra, informado dentro del [servidor de contribución](https://discord.gg/2jJRNbyqMB)

- Asegúrese que el título del `commit` a enviar contenga la información puntual del cambio.

- En el cuerpo del mensaje asegúrese de que la siguiente información esté presente:
  - **Cambios realizados:**
    - Especifique tipo de cambio realizado fue hecho, en caso de haberse corregido un error especifique cuál y de qué manera; en caso de haber añadido una nueva característica especifique cuál y por qué fue añadida.
  - **Información de contacto en Discord:**
    - `NombreDeUsuario#0000 (ID)`

- No modifique los archivos externos a la documentación, es decir, archivos como lo son:
  - [`README.md`](README.md), [`CONTRIBUTING.md`](CONTRIBUTING.md), [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md) y [`LICENCE`](LICENCE)
  - [Directorio `.github`](.github)
    - En caso de presentar sugerencias pertinentes en los archivos ya mencionados, propóngalos dentro del [servidor de contribución](https://discord.gg/2jJRNbyqMB).

- No utilice este medio para la búsqueda de publicidad no deseada o informada.

## Instalación local del proyecto
Tenga en cuenta los siguientes requisitos previos a poder ejecutar el proyecto localmente:
  - Una versión de [`Node.js`](https://nodejs.org) 16 o superior
  - Terminal para poder ejecutar los comandos de Vitepress, también sirven las IDEs como [VSCode](https://code.visualstudio.com/)
  - Versiones recientes de [`git`](https://git-scm.com/)

---

### Clonar e instalar
- Clone el repositorio de GitHub con ayuda en su terminal
```bash
git clone https://github.com/doofysP/GuiasDP.git
```

- Instale las dependencias necesarias
```yml
npm install
```

### Ejecute el Framework
- Ingrese al directorio creado y ejecute el siguiente comando para iniciar localmente el proyecto
```yml
npm run dev
```

- Ejecute los siguientes comandos para que se compile el proyecto y visualice este mismo
```yml
npm run build
```
```yml
npm run preview
```