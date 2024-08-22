export function sidebar() {
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
              {
                text: "Drivers",
                link: "/guias/instalacion/drivers/",
                items: [
                  {
                    text: "Controladores oficiales",
                    link: "/guias/instalacion/drivers/oficiales",
                  },
                  {
                    text: "Controladores de terceros",
                    link: "/guias/instalacion/drivers/terceros",
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
              {
                text: "Office",
                link: "/guias/informacion/office",
              },
              {
                text: "Versiones de MiniOS",
                link: "/guias/informacion/versiones-minios",
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
          { text: "Colaboración", link: "/colaboracion" }
        ],
      },
    ];
  }
  