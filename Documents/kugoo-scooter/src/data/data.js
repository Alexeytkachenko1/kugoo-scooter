// import XiaomiMiElectricScooter from "../assets/img/scooters/Xiaomi Mi Electric Scooter.jpeg";
import samocat from "../assets/img/menu/samocat.svg";
import scooter from "../assets/img/menu/scooter.svg";
import bike from "../assets/img/menu/bike.svg";
import vacuum from "../assets/img/menu/vacuum-cleaner.svg";
import weight from "../assets/img/menu/weighing-scale.svg";

let state = {
  header: {
    links: [
      // { name: "Сервис", address: "" },
      // { name: "Сотрудничество", address: "" },
      // { name: "Заказать звонок", address: "" },
      { name: "О магазине", address: "/about-shop" },
      { name: "Доставка и оплата", address: "/delivery" },
      { name: "Тест-драйв", address: "/test-drive" },
      { name: "Блог", address: "/blog" },
      { name: "Контакты", address: "/contacts" },
      { name: "Акции", address: "/promotion" },
    ],
  },
  menu: {
    links: [
      // { name: "Сервис", address: "" },
      // { name: "Сотрудничество", address: "" },
      // { name: "Заказать звонок", address: "" },
      { img: `${samocat}`, name: "Электросамокаты", address: "/" },
      { img: `${scooter}`, name: "Электроскутеры", address: "/delivery" },
      { img: `${bike}`, name: "Электровелосипеды", address: "/test-drive" },
      { img: `${vacuum}`, name: "Робот-пылесосы", address: "/blog" },
      { img: `${weight}`, name: "Весы", address: "/contacts" },
    ],
    peculiarities: [
      { name: "Внедорожный", address: "/about-shop" },
      { name: "Городской", address: "/delivery" },
      { name: "Зимний", address: "/test-drive" },
      { name: "С сиденьем", address: "/blog" },
      { name: "Без сиденья", address: "/contacts" },
      // { name: "Акции", address: "/promotion" }
    ],
    forWhom: [
      { name: "Для детей и подростков", address: "/about-shop" },
      { name: "Для взрослых", address: "/delivery" },

      // { name: "Акции", address: "/promotion" }
    ],
  },
  // scooters: [
  //   {
  //     id: "1",
  //     photo: `${XiaomiMiElectricScooter}`,
  //     title: "Xiaomi Mi Electric Scooter 1",
  //     battery: 5100,
  //     power: 250,
  //     speed: 20,
  //     reserve: 20,
  //     price: 16999,
  //   },
  //   {
  //     id: "1",
  //     photo: `${XiaomiMiElectricScooter}`,
  //     title: "Xiaomi Mi Electric Scooter 2",
  //     battery: 5100,
  //     power: 250,
  //     speed: 20,
  //     reserve: 20,
  //     price: 16999,
  //   },
  //   {
  //     id: "1",
  //     photo: `${XiaomiMiElectricScooter}`,
  //     title: "Xiaomi Mi Electric Scooter 3",
  //     battery: 5100,
  //     power: 250,
  //     speed: 20,
  //     reserve: 20,
  //     price: 16999,
  //   },
  //   {
  //     id: "1",
  //     photo: `${XiaomiMiElectricScooter}`,
  //     title: "Xiaomi Mi Electric Scooter 4",
  //     battery: 5100,
  //     power: 250,
  //     speed: 20,
  //     reserve: 20,
  //     price: 16999,
  //   },
  //   {
  //     id: "1",
  //     photo: `${XiaomiMiElectricScooter}`,
  //     title: "Xiaomi Mi Electric Scooter",
  //     battery: 5100,
  //     power: 250,
  //     speed: 20,
  //     reserve: 20,
  //     price: 16999,
  //   },
  //   {
  //     id: "1",
  //     photo: `${XiaomiMiElectricScooter}`,
  //     title: "Xiaomi Mi Electric Scooter",
  //     battery: 5100,
  //     power: 250,
  //     speed: 20,
  //     reserve: 20,
  //     price: 16999,
  //   },
  //   {
  //     id: "1",
  //     photo: `${XiaomiMiElectricScooter}`,
  //     title: "Xiaomi Mi Electric Scooter",
  //     battery: 5100,
  //     power: 250,
  //     speed: 20,
  //     reserve: 20,
  //     price: 16999,
  //   },
  //   {
  //     id: "1",
  //     photo: `${XiaomiMiElectricScooter}`,
  //     title: "Xiaomi Mi Electric Scooter",
  //     battery: 5100,
  //     power: 250,
  //     speed: 20,
  //     reserve: 20,
  //     price: 16999,
  //   },
  // ],
  // product: {
  //   id: "1",
  //   photo: `${XiaomiMiElectricScooter}`,
  //   title: "Xiaomi Mi Electric Scooter",
  //   battery: 5100,
  //   power: 250,
  //   speed: 20,
  //   reserve: 20,
  //   price: 16999,
  // },
  footer: {
    сatalog: [
      "Электросамокаты",
      "Электроскутеры",
      "Электровелосипеды",
      "Электровелосипеды",
    ],
    buyer: ["Сервисный центр", "Доставка и оплата", "Рассрочка", "Тест-драйв"],
    blog: ["Блог", "Сотрудничество", "Контакты", "Акции"],
    contacts: {
      services: [
        {
          type: "Call-центр",
          number: "+3(800) 505-54-61",
          date: "Пн-Вс 10:00 - 20:00",
        },
        {
          type: "Сервисный центр",
          number: "+3 (499) 350-76-92",
          date: "Пн-Вс 10:00 - 20:00",
        },
      ],
      shops: [
        {
          type: "Магазин в Киеве ул. Ткацкая, 5 стр. 16",
          number: "+3 (499) 350-76-92",
        },
        {
          type: "Магазин в Днепре ул. Ткацкая, 5 стр. 16",
          number: "+3 (499) 406 15 87",
        },
        {
          type: "Магазин в Харькове ул. Ткацкая, 5 стр. 16",
          number: "+3 (800) 505 54 61",
        },
      ],
    },
  },
};

export default state;
