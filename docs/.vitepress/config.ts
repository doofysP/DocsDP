export default {
  head: metadata(),
  title: "Doofy's Projects",
  titleTemplate: ":title - Doofy's Projects",
  appearance: "dark",
  description: "Guías independientes.",
  cleanUrls: true,
  base: "/",
  lang: "es-ES",
  themeConfig: {
    siteTitle: "Doofy's Projects",
    darkModeSwitchLabel: "Apariencia",
    sidebarMenuLabel: "Menu",
    returnToTopLabel: "Ir arriba",
    outlineTitle: "Tabla de contenido",
    logo: {
      src: "/logo.png",
      alt: "Logo",
    },
    docFooter: {
      prev: "Página anterior",
      next: "Pagína siguiente",
    },
    outline: [2, 5],
    editLink: {
      pattern: "https://github.com/doofysp/GuiasDP/edit/main/docs/:path",
      text: "Editar esta página en GitHub",
    },
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "Buscar",
                buttonAriaLabel: "Buscar documentos",
              },
              modal: {
                noResultsText: "No se han encontrado resultados",
                resetButtonTitle: "Borrar criterios de búsqueda",
                footer: {
                  selectText: "Seleccione",
                  navigateText: "Ir a",
                  closeText: "Cerrar",
                },
              },
            },
          },
        },
      },
    },
    socialLinks: socials(),
    nav: nav(),
    sidebar: siderbar(),
  },
};

function metadata() {
  return [
    ["meta", { property: "theme-color", content: "#4583df" }],
    [
      "meta",
      {
        property: "og:image",
        content:
          "https://raw.githubusercontent.com/doofysP/GuiasDP/main/docs/public/DP.png",
      },
    ],
    ["meta", { name: "twitter:card", content: "summary" }],
    ["link", { rel: "icon", href: "/DP.svg" }],
  ];
}

function socials() {
  return [
    {
      icon: "discord",
      link: "https://discord.gg/doofy-s-projects-704042607600205956",
    },
    { icon: "facebook", link: "https://www.facebook.com/groups/dprojects" },
    { icon: "youtube", link: "https://www.youtube.com/DanielRodriguezDoofy" },
    { icon: "github", link: "https://github.com/doofysp/GuiasDP" },
    {
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38z"/></svg>',
      },
      link: "https://telegram.me/dprojects",
    },
    {
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/></svg>',
      },
      link: "https://dprojects.org/",
    },
  ];
}

function nav() {
  return [
    { text: "Guías", link: "/guias/", activeMatch: "/guias/" }, 
    {
      text: "Colaboración",
      activeMatch: "/contribucion|/creditos",
      items: [
        {
          text: "Contribuir",
          link: "/contribucion",
        },
        {
          text: "Creditos",
          link: "/creditos",
        },
      ],
    },
    { text: "Historial de cambios", link: "https://github.com/doofysP/GuiasDP/blob/main/CHANGELOG.md" },
  ];
}

function siderbar() {
  return [
    {
      text: "",
      items: [{ text: "Introducción", link: "/guias/" }],
    },
    {
      text: "Categorías",
      items: [
        {
          text: "Instalación",
          collapsed: true,
          link: "/guias/instalacion/",
          items: [
            {
              text: "Memorias y particiones",
              items: [
                {
                  text: "Metodo Rufus",
                  link: "/guias/instalacion/memorias-y-particiones/metodo-rufus",
                },
                {
                  text: "Metodo Ventoy",
                  link: "/guias/instalacion/memorias-y-particiones/metodo-ventoy",
                },
              ],
            },
          ],
        },
        {
          text: "Información",
          link: "/guias/informacion/",
          collapsed: true,
          items: [
            {
              text: "Conocer si soy BIOS o UEFI",
              link: "/guias/informacion/bios-uefi",
            },
            {
              text: "Requisitos de Windows",
              link: "/guias/informacion/requisitos-windows",
            },
          ],
        },
        {
          text: "Optimización",
          link: "/guias/optimizacion/",
          collapsed: true,
        },
        {
          text: "Errores",
          link: "/guias/errores/",
          collapsed: true,
        },
      ],
    },
    {
      text: "",
      items: [
        { text: "Contribución", link: "/contribucion" },
        { text: "Creditos", link: "/creditos" },
      ],
    },
  ];
}
