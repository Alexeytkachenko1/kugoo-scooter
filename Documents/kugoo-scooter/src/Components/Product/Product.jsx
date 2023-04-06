import "./Product.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

import cart from "../../assets/img/card/shopping-cart-2 1.svg";
import axios from "axios";

const Product = () => {
  const [product, setProduct] = useState(false);
  let { productId } = useParams();
  console.log(productId);
  useEffect(() => {
    axios
      .get(
        `https://my-json-server.typicode.com/Alexeytkachenko1/my-json-server/scooters/${productId}`
      )
      .then((response) => {
        setProduct(response.data);
      });
  }, []);
  const [isProductBasket, setIsProductBasket] = useState(false);

  const addProductToBasket = () => {
    alert(`${product.title} добавлен в корзину`);
    setIsProductBasket(true);
  };

  return (
    <div className="product container">
      <div className="product-card">
        <img className="product--card-photo" src={product.photo} alt="" />
        <div className="product-right">
          <h2 className="product-card-header">{product.title}</h2>
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
              <button className="product-card__instock-button">
                В наличии
              </button>
            </li>
            <li className="product-card__instock-item">
              <button className="product-card__instock-button">Сравнить</button>
            </li>
            <li className="product-card__instock-item">
              <button className="product-card__instock-button">
                Поделиться
              </button>
            </li>
          </ul>
          <div className="product-card__price">
            <h2 className="product-card__price-header">{product.price}₴</h2>
            <button className="product-card__price-button">
              <span className="product-card__price-span">Рассрочка:</span>1416
              грн в месяц/12 месяцев
            </button>
          </div>
          <div className="product-card__equipment">
            <h2 className="product-card__equipment-header">Комплектация</h2>
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
              <h2 className="product-card__buy-header">{product.price}₴</h2>
              <button className="product-card__buy-svg-heart"></button>
            </div>
            <p className="product-card__buy-delivery">
              Бесплатная доставка по Украине от 1 дня при заказе до 01.09
            </p>
            <ul className="product-card__buy-list">
              <li className="product-card__buy-item">
                <button className="product-card__buy-button-buy">
                  Купить в 1 клик
                </button>
              </li>
              <li className="product-card__buy-item">
                {isProductBasket ? (
                  <button
                    className="product-card__buy-button-cart"
                    onClick={addProductToBasket}
                  >
                    уже в корзине
                  </button>
                ) : (
                  <button
                    className="product-card__buy-button-cart"
                    onClick={addProductToBasket}
                  >
                    добавить в корзину
                  </button>
                )}
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
        <div className="product-about__about-wrapper">
          <div className="product-about__about">
            <h2 className="product-about__about-header">{product.title}</h2>
            <p className="product-about__about-description">
              {product.description}
            </p>
          </div>
          <div className="product-about__equipment">
            <h2 className="product-about__equipment-header">Что в комплекте</h2>
            <ul className="product-about__equipment-list">
              <li className="product-about__equipment-item">
                <p className="product-about__equipment-text">Инструкция</p>
                <button className="product-about__equipment-button">
                  Посмотреть
                </button>
              </li>
              <li className="product-about__equipment-item">
                <p className="product-about__equipment-text">
                  Зарядное устройство
                </p>
              </li>
              <li className="product-about__equipment-item">
                <p className="product-about__equipment-text">Чехол</p>
              </li>
              <li className="product-about__equipment-item">
                <p className="product-about__equipment-text">
                  Гарантийный талон
                </p>
              </li>
            </ul>
          </div>
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
      </section>

      {/* <button className="card-button">Купить в 1 клик</button> */}
    </div>
  );
};
export default Product;
