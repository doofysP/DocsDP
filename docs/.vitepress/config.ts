import { metadata } from './config/metaSocials.ts';
import { socials } from './config/metaSocials.ts';
import { nav } from './config/nav.ts';
import { sidebar } from './config/sidebar.ts';

export default {
  head: metadata(),
  title: "Doofy's Projects",
  titleTemplate: ":title - Doofy's Projects",
  appearance: "dark",
  description: "Documentación de Doofy's Projects.",
  cleanUrls: true,
  base: "/",
  lang: "es-ES",
  themeConfig: {
    // siteTitle: "Doofy's Projects",
    darkModeSwitchLabel: "Apariencia",
    sidebarMenuLabel: "Menu",
    returnToTopLabel: "Ir arriba",
    outlineTitle: "Tabla de contenido",
    logo: {
      src: "/logo.png",
    },
    docFooter: {
      prev: "Página anterior",
      next: "Pagína siguiente",
    },
    outline: [1, 4],
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
    notFound: {
      title: "No se encontró esta dirección",
      quote:
        "Esta dirección no te está llevando a nada, asegúrate de digitarla bien o reportarlo si es un error",
      linkLabel: "Regresar",
      linkText: "Regresar",
      code: "404",
    },
    socialLinks: socials(),
    nav: nav(),
    sidebar: sidebar(),
  },
};