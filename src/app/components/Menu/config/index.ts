export const menuList: Array<any> = [
  {
    label: "Servicios",
    submenu: [
      {
        label: "Estudio de Grabación",
        description: "Grabación, Mezcla y Masterización",
        route: "/records"
      }, {
        label: "Back&Amp",
        description: "Backline y Amplificación para eventos",
        route: "/back-amp"
      }, {
        label: "Sala de Ensayo",
        description: "Accede a nuestros planes con tu banda",
        route: "/sala-de-ensayo"
      }
    ]
  }, {
    label: "Aplicaciones",
    submenu: [
      {
        label: "Nhexa Vision",
        description: "Streaming",
        route: "#"
      }, {
        label: "Nhexa Pod",
        description: "Audio y música",
        route: "#"
      }, {
        label: "Nhexa Merch",
        description: "E-commerce",
        route: "#"
      }
    ]
  }, {
    label: "Soporte técnico",
    href: "#",
  }, {
    label: "Contacto",
    route: "/contact",
  }
];