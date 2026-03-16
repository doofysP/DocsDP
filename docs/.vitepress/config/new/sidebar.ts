// Tire chatgpt para organizarlo otra vez con las nuevas guias jaja
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
            link: "/guias/instalacion/",
            collapsed: true,
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
                  {
                    text: "Particiones GPT y MBR",
                    link: "/guias/instalacion/memorias-y-particiones/gpt-mbr",
                  },
                ],
              },
              {
                text: "BIOS / UEFI",
                items: [
                  {
                    text: "Conocer si soy BIOS o UEFI",
                    link: "/guias/instalacion/bios-uefi/conocer-bios-uefi",
                  },
                  {
                    text: "Entrar a la BIOS / UEFI",
                    link: "/guias/instalacion/bios-uefi/entrar-bios-uefi",
                  },
                  {
                    text: "Configurar orden de arranque",
                    link: "/guias/instalacion/bios-uefi/orden-arranque",
                  },
                  {
                    text: "Secure Boot",
                    link: "/guias/instalacion/bios-uefi/secure-boot",
                  },
                  {
                    text: "TPM en Windows",
                    link: "/guias/instalacion/bios-uefi/tpm-windows",
                  },
                ],
              },
              {
                text: "Proceso de instalación",
                items: [
                  {
                    text: "Paso a paso para instalar Windows / MiniOS",
                    link: "/guias/instalacion/proceso/instalar-windows-minios",
                  },
                  {
                    text: "Instalación limpia vs actualización",
                    link: "/guias/instalacion/proceso/instalacion-limpia-vs-actualizacion",
                  },
                  {
                    text: "Instalar Windows sin cuenta Microsoft",
                    link: "/guias/instalacion/proceso/windows-sin-cuenta-microsoft",
                  },
                ],
              },
              {
                text: "Post instalación",
                items: [
                  {
                    text: "Librerías necesarias",
                    link: "/guias/instalacion/post-instalacion/librerias",
                  },
                  {
                    text: "Windows Update en MiniOS",
                    link: "/guias/instalacion/post-instalacion/windows-update-minios",
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
                text: "General",
                items: [
                  {
                    text: "Requisitos de Windows",
                    link: "/guias/informacion/general/requisitos-windows",
                  },
                  {
                    text: "Office",
                    link: "/guias/informacion/general/office",
                  },
                  {
                    text: "Versiones de MiniOS",
                    link: "/guias/informacion/general/versiones-minios",
                  },
                  {
                    text: "Qué es Secure Boot",
                    link: "/guias/informacion/general/secure-boot",
                  },
                  {
                    text: "Qué es TPM",
                    link: "/guias/informacion/general/tpm",
                  },
                ],
              },
              {
                text: "Drivers",
                items: [
                  {
                    text: "Controladores oficiales",
                    link: "/guias/informacion/drivers/oficiales",
                  },
                  {
                    text: "Controladores de terceros",
                    link: "/guias/informacion/drivers/terceros",
                  },
                  {
                    text: "Cómo identificar hardware sin drivers",
                    link: "/guias/informacion/drivers/identificar-hardware",
                  },
                ],
              },
            ],
          },
          {
            text: "Optimización",
            link: "/guias/optimizacion/",
            collapsed: true,
            items: [
              {
                text: "Básica",
                items: [
                  {
                    text: "Desactivar programas de inicio",
                    link: "/guias/optimizacion/basica/programas-inicio",
                  },
                  {
                    text: "Reducir consumo de RAM",
                    link: "/guias/optimizacion/basica/reducir-ram",
                  },
                  {
                    text: "Desinstalar aplicaciones innecesarias",
                    link: "/guias/optimizacion/basica/desinstalar-apps",
                  },
                  {
                    text: "Configurar planes de energía",
                    link: "/guias/optimizacion/basica/planes-energia",
                  },
                ],
              },
              {
                text: "Avanzada",
                items: [
                  {
                    text: "Servicios de Windows que se pueden desactivar",
                    link: "/guias/optimizacion/avanzada/servicios-windows",
                  },
                  {
                    text: "Desactivar tareas programadas",
                    link: "/guias/optimizacion/avanzada/tareas-programadas",
                  },
                  {
                    text: "Optimización de almacenamiento",
                    link: "/guias/optimizacion/avanzada/almacenamiento",
                  },
                  {
                    text: "Desactivar efectos visuales",
                    link: "/guias/optimizacion/avanzada/efectos-visuales",
                  },
                  {
                    text: "Memoria virtual (archivo de paginación)",
                    link: "/guias/optimizacion/avanzada/memoria-virtual",
                  },
                ],
              },
            ],
          },
          {
            text: "Errores",
            link: "/guias/errores/",
            collapsed: true,
            items: [
              {
                text: "Instalación",
                items: [
                  {
                    text: "Windows no detecta el disco",
                    link: "/guias/errores/instalacion/no-detecta-disco",
                  },
                  {
                    text: "No aparece la USB booteable",
                    link: "/guias/errores/instalacion/usb-no-aparece",
                  },
                  {
                    text: "Se reinicia la instalación",
                    link: "/guias/errores/instalacion/reinicia-instalacion",
                  },
                  {
                    text: "Error de Secure Boot",
                    link: "/guias/errores/instalacion/error-secure-boot",
                  },
                  {
                    text: "Error de TPM en Windows 11",
                    link: "/guias/errores/instalacion/error-tpm",
                  },
                ],
              },
              {
                text: "Drivers",
                items: [
                  {
                    text: "No hay sonido",
                    link: "/guias/errores/drivers/no-hay-sonido",
                  },
                  {
                    text: "No funciona WiFi",
                    link: "/guias/errores/drivers/no-wifi",
                  },
                  {
                    text: "Pantalla con baja resolución",
                    link: "/guias/errores/drivers/baja-resolucion",
                  },
                  {
                    text: "GPU no detectada",
                    link: "/guias/errores/drivers/gpu-no-detectada",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        text: "",
        items: [{ text: "Colaboración", link: "/colaboracion" }],
      },
    ];
  }