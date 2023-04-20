// import Card from "../../Scooters/Card/Card";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import Card from "../Main/Scooters/Card/Card";
import "./Basket.scss";
import confirm from "../../assets/img/confirm.svg";
import BasketCard from "./BasketCard/BasketCard";
import { deleteAll } from "../../actions";
import { useDispatch } from "react-redux";

const Basket = () => {
  const dispatch = useDispatch();
  const basketItems = createSelector(
    (state) => state.basket.items,
    (items) => {
      return {
        items,
      };
    }
  );
  const { items } = useSelector(basketItems);
  console.log(items);
  const totalPrice = (arr) => {
    return arr.reduce(
      (acc, current) => acc + current.item.price * current.count,
      0
    );
  };
  const total = totalPrice(items);
  // const itemsBasket = useSelector(basketItems);

  // console.log(itemsBasket.items);

  return (
    <div className="cart container">
      <h2 className="cart-header">Моя корзина</h2>
      <div className="cart-wrapper">
        <div className="cart-wrapper-left">
          <div className="cart-row">
            <p className="cart-row-p-bold-good">Товар</p>
            <p className="cart-row-p-bold-quantity">Количество</p>
            <p className="cart-row-p-bold-sum">Сумма</p>
            <button
              className="cart-row-button"
              onClick={() => dispatch(deleteAll())}
            >
              Удалить все
            </button>
          </div>
          {items.map((element) => (
            <BasketCard
              {...element.item}
              key={element.item.id}
              count={element.count}
            />
          ))}
          {console.log(items)}
        </div>

        <div className="cart-right">
          <div className="cart-right-wrapper"></div>
          <p className="cart-right__sum">Итого</p>
          <h2 className="cart-right__price">price</h2>
          <ul className="cart-right__list">
            <li className="cart-right__item">
              <p className="cart-right__item-desc">Стоимость товаров</p>
              <h2 className="cart-right__item-title">{total}</h2>
            </li>
            <li className="cart-right__item">
              <p className="cart-right__item-desc">Сумма скидки</p>
              <h2 className="cart-right__item-title">2000 uan </h2>
            </li>
            <li className="cart-right__item">
              <p className="cart-right__item-desc">Итого без учета доставки</p>
              <h2 className="cart-right__item-title">price - uan</h2>
            </li>
          </ul>
          <button className="cart-right__button">Оформить заказ</button>
          <div className="cart-right__confirm">
            <img className="cart-right__confirm-img" src={confirm} alt="" />
            <p className="cart-right__confirm-desc">
              Нажимая на кнопку, вы соглашаетесь на обработку персональных
              данных{" "}
              <span className="cart-right__confirm-span">
                и политикой конфиденциальности
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Basket;
