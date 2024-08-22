export function nav() {
    return [
      { text: "Inicio", link: "/" },
      { text: "Guías", link: "/guias/", activeMatch: "/guias/" },
      {
        text: "Colaboración",
        activeMatch: "/colaboracion",
        link: "/colaboracion"
      }
    ];
  }
  