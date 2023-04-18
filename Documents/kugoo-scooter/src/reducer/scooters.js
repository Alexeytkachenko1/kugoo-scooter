const initialState = {
  scooter: [
    {
      id: 1,
      photo: "https://content.rozetka.com.ua/goods/images/big/313272821.jpg",
      title: "Xiaomi Mi Electric Scooter 3Lite Black",
      battery: 5100,
      power: 250,
      speed: 20,
      reserve: 20,
      price: 16999,
      description:
        " Гораздо безопаснее, намного мощнее. Максимальная генерируемая мощность в 600 Вт делает поездку более простой и комфортной. Угол подъема до 16%. ",
      oldPrice: 18900,
    },
    {
      id: 2,
      photo: "https://content2.rozetka.com.ua/goods/images/big/273477432.jpg",
      title: "Xiaomi Mi Electric Scooter 1S Black",
      battery: 5200,
      power: 300,
      speed: 25,
      reserve: 20,
      price: 19999,
      description:
        "Электросамокат Xiaomi Mi Scooter 1S представляет собой обновлённую версию, выпущенную через четыре года после дебюта очень популярного предшественника — Xiaomi Mi Electric Scooter. Главным изменением является новый интерактивный интерфейс на руле: на небольшом экране предоставляется информация о статусе, скорость в реальном времени и другие полезные данные. Xiaomi Mi Scooter 1S весит 12.5 кг. ",
      oldPrice: 20900,
    },
  ],
};

const scooters = (state = initialState, action) => {
  switch (action.type) {
    case "SCOOTERS_FETCHING":
      return {
        ...state,
        scooters: [...state.scooter, action.payLoad],
      };
    default:
      return state;
  }
};

export default scooters;
