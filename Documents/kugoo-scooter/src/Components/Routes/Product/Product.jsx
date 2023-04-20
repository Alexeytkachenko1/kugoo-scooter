import "./Product.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { additem } from "../../../actions";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Spinner from "../../../Components/Main/Spinner";
import { NavLink } from "react-router-dom";

import cart from "../../../assets/img/shopping-cart 2.svg";
import greenpoint from "../../../assets/img/product/greenpoint.svg";
import compare from "../../../assets/img/product/compare.svg";
import share from "../../../assets/img/product/share 1.svg";
import bankCard from "../../../assets/img/product/bankCard.png";
import question from "../../../assets/img/product/QuestionCircle.svg";
import heart from "../../../assets/img/product/heart.svg";
import delivery from "../../../assets/img/product/delivery.svg";
import docs from "../../../assets/img/product/docs.svg";
import charger from "../../../assets/img/product/charger 1.svg";
import scooter from "../../../assets/img/product/scooter 1.svg";
import guarantee from "../../../assets/img/product/guarantee 2.svg";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// import axios from "axios";
// import myJson from "../../../data.json";
import { db } from "../../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const Product = (props) => {
  // const [product, setProduct] = useState(false);
  const [data, setData] = useState([]);
  const [add, setAdd] = useState(false);
  useEffect(() => {
    let timer;
    if (add) {
      timer = setInterval(() => setAdd(false), 1000);
    }
    return () => clearInterval(timer);
  }, [add]);
  console.log(data);
  // const [error, setError] = useState(false);

  useEffect(() => {
    const scooterRef = doc(db, "catalog-scooters", productId);
    getDoc(scooterRef).then((item) => setData(item.data()));
  }, []);
  const dispatch = useDispatch();
  // const addItemToCart = (id) => {
  //   const item = data.find((item) => (item.id = id));
  //   console.log(item);
  // };

  let { productId } = useParams();
  console.log(productId);
  // let data = JSON.parse(JSON.stringify(myJson));
  // useEffect(() => {
  //   // axios
  //   //   .get(
  //   //     `https://my-json-server.typicode.com/Alexeytkachenko1/my-json-server/scooters/${productId}`
  //   //   )
  //   //   .then((response) => {
  //   //     setProduct(response.data);
  //   //   });
  //   data.scooters.map((element) => {
  //     if (Number(element.id) === Number(productId)) {
  //       setProduct(element);
  //     }
  //   });
  // }, []);
  const [isProductBasket, setIsProductBasket] = useState(false);

  const addProductToBasket = () => {
    alert(`${data.title} добавлен в корзину`);
    setIsProductBasket(true);
  };

  return (
    <div className="product container">
      <div className="product-card">
        <div className="product-card-swiper">
          {data.length === 0 && <Spinner />}
          {data.length !== 0 && (
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {data.photo.map((slider, index) => {
                return (
                  <SwiperSlide>
                    <img
                      className="product-img"
                      src={slider}
                      alt={`img_slider_${slider.id}`}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </div>
        {/* {data.photo.map((el) => (
          <img className="product--card-photo" src={...el} key={el.id} alt="" />
        ))} */}
        <div className="product-right">
          <h2 className="product-card-header">{data.title}</h2>
          <ul className="product-card-statistic-list">
            <li className="product-card-statistic-item">
              <p className="product-card-statistic">Просмотров 350</p>
            </li>
            <li className="product-card-statistic-item">
              <p className="product-card-statistic">Купили 196 раз</p>
            </li>
            <li className="product-card-statistic-item">
              <p className="product-card-statistic">Артикул: 2200000000026</p>
            </li>
          </ul>
          <ul className="product-card__instock-list">
            <li className="product-card__instock-item">
              <img src={greenpoint} alt="" width="9px" height="9px" />
              <button className="product-card__instock-button">
                В наличии
              </button>
            </li>
            <li className="product-card__instock-item">
              <img src={compare} alt="" width="20px" height="20px" />

              <button className="product-card__instock-button">Сравнить</button>
            </li>
            <li className="product-card__instock-item">
              <img src={share} alt="" width="20px" height="20px" />

              <button className="product-card__instock-button">
                Поделиться
              </button>
            </li>
          </ul>
          <div className="product-card__price">
            <div className="product-card__price-block">
              <p className="product-card__price-oldprice">{data.oldPrice}₴</p>
              <h2 className="product-card__price-header">{data.price}₴</h2>
            </div>

            <button className="product-card__price-button">
              <img src={bankCard} alt="" />
              <div className="product-card__price-wrapper">
                <span className="product-card__price-span">Рассрочка:</span>
                <span className="product-card__price-button-title"></span>
                1416 грн в месяц/12 месяцев
              </div>
            </button>
          </div>
          <div className="product-card__equipment">
            <div className="product-card-question-block">
              <h2 className="product-card__equipment-header">Комплектация</h2>
              <img src={question} alt="" />
            </div>
            <ul className="product-card__equipment-list">
              <li className="product-card__equipment-item">
                <button className="product-card__equipment-button">
                  Базовая
                </button>
              </li>
              <li className="product-card__equipment-item">
                <button className="product-card__equipment-button">
                  Версия MAX
                </button>
              </li>
              <li className="product-card__equipment-item">
                <button className="product-card__equipment-button">
                  VIP-версия
                </button>
              </li>
            </ul>
          </div>
          <div className="product-card__tire">
            <ul className="product-card__tire-list">
              <li className="product-card__tire-item">
                <p className="product-card__tire-text">Покрышки</p>
              </li>
              <li className="product-card__tire-item">
                <p className="product-card__tire-text-desc">
                  Внедорожная шипованная
                </p>
              </li>
              <li className="product-card__tire-item">
                <p className="product-card__tire-text-plus">
                  + установка (с доп.комплектом базовых покрышек)
                </p>
              </li>
              <li className="product-card__tire-item">
                <p className="product-card__tire-text-price">2000грн</p>
              </li>
            </ul>
            <button className="product-card__tire-button">Изменить</button>
          </div>
          <div className="product-card__warranty">
            <p className="product-card__warranty-header">Гарантия</p>
            <ul className="product-card__warranty-list">
              <li className="product-card__warranty-item">
                <button className="product-card__warranty-button">
                  Стандартная 1 год
                  <span className="product-card__warranty-button-cost">
                    Бесплатно
                  </span>
                </button>
              </li>
              <li className="product-card__warranty-item">
                <button className="product-card__warranty-button">
                  Расширенная 2 года
                  <span className="product-card__warranty-button-cost">
                    1000 грн
                  </span>
                </button>
              </li>
            </ul>
          </div>
          <div className="product-card__buy">
            <div className="product-card__buy-wrapper">
              <h2 className="product-card__buy-header">{data.price} ₴</h2>
              <button className="product-card__buy-svg-heart">
                <img src={heart} alt="" />
              </button>
            </div>
            <div className="product-card__buy-delivery-block">
              <img src={delivery} alt="" />
              <p className="product-card__buy-delivery">
                Бесплатная доставка по Украине от 1 дня при заказе до 01.09
              </p>
            </div>

            <ul className="product-card__buy-list">
              <li className="product-card__buy-item">
                <button className="product-card__buy-button-buy">
                  Купить в 1 клик
                </button>
              </li>
              <li className="product-card__buy-item">
                <button
                  className="product-card__buy-button-cart"
                  onClick={() => dispatch(additem(data)) && setAdd(true)}
                >
                  {add ? <AddShoppingCartIcon /> : "Добавить в корзину"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="product-about">
        <ul className="product-about-list">
          <li className="product-about__item">
            <button className="product-about__button">О товаре</button>
          </li>
          <li className="product-about__item">
            <button className="product-about__button">Характеристики</button>
          </li>
          <li className="product-about__item">
            <button className="product-about__button">Доставка и оплата</button>
          </li>
          <li className="product-about__item">
            <button className="product-about__button">Гарантии</button>
          </li>
          <li className="product-about__item">
            <button className="product-about__button">Версия MAX</button>
          </li>
        </ul>
        <span className="product-about__before"></span>
        <div className="product-about__about-wrapper">
          <div className="product-about__about">
            <h2 className="product-about__about-header">{data.title}</h2>
            <p className="product-about__about-description">
              {data.description}
            </p>
          </div>
          <div className="product-about__equipment">
            <h2 className="product-about__equipment-header">Что в комплекте</h2>
            <ul className="product-about__equipment-list">
              <li className="product-about__equipment-item">
                <img
                  className="product-about__equipment-item-img"
                  src={docs}
                  alt=""
                />
                <div className="product-about__equipment-item-wrapper">
                  <p className="product-about__equipment-text">Инструкция</p>
                  <button className="product-about__equipment-button">
                    Посмотреть
                  </button>
                </div>
              </li>
              <li className="product-about__equipment-item">
                <img
                  className="product-about__equipment-item-img"
                  src={charger}
                  alt=""
                />
                <p className="product-about__equipment-text">
                  Зарядное устройство
                </p>
              </li>
              <li className="product-about__equipment-item">
                <img
                  className="product-about__equipment-item-img"
                  src={scooter}
                  alt=""
                />
                <p className="product-about__equipment-text">Чехол</p>
              </li>
              <li className="product-about__equipment-item">
                <img
                  className="product-about__equipment-item-img"
                  src={guarantee}
                  alt=""
                />
                <p className="product-about__equipment-text">
                  Гарантийный талон
                </p>
              </li>
            </ul>
            <h2 className="product-about__peculiarities">
              Ключевые особенности Kugoo Kirin M4
            </h2>
            <ul className="product-about__peculiarities-list">
              <li className="product-about__peculiarities-item">
                <button className="product-about__peculiarities-button">
                  Для города
                </button>
              </li>
              <li className="product-about__peculiarities-item">
                <button className="product-about__peculiarities-button">
                  Быстрый
                </button>
              </li>
              <li className="product-about__peculiarities-item">
                <button className="product-about__peculiarities-button">
                  Комфортный
                </button>
              </li>
              <li className="product-about__peculiarities-item">
                <button className="product-about__peculiarities-button">
                  Легкий
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* <button className="card-button">Купить в 1 клик</button> */}
    </div>
  );
};
export default Product;
