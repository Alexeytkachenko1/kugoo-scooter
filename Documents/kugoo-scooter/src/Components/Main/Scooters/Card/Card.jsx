import "./Card.scss";
import battery from "../../../../assets/img/card/accumulator 1.svg";
import power from "../../../../assets/img/card/power 1.svg";
import speed from "../../../../assets/img/card/speedometer 1.svg";
import reserve from "../../../../assets/img/card/timer 1.svg";
import cart from "../../../../assets/img/card/shopping-cart-2 1.svg";
import favorites from "../../../../assets/img/card/Heart.svg";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();

  const showMoreHandler = (productId) => {
    navigate(`product/${productId}`);
  };
  return (
    <div className="card-wrapper">
      <img
        className="card-photo"
        src={props.product.photo}
        alt={`img_scooters${props.product.id}`}
      />
      <h2 className="card-title">{props.product.title}</h2>
      <ul className="card-list">
        <li className="card-item">
          <img className="card-item-img" src={battery} alt="" />
          <p className="card-item-value">{props.product.battery} mAh</p>
        </li>
        <li className="card-item">
          <img className="card-item-img" src={power} alt="" />
          <p className="card-item-value">{props.product.power} Вт</p>
        </li>
        <li className="card-item">
          <img className="card-item-img" src={speed} alt="" />
          <p className="card-item-value">{props.product.speed} км/ч</p>
        </li>
        <li className="card-item">
          <img className="card-item-img" src={reserve} alt="" />
          <p className="card-item-value">{props.product.reserve} км</p>
        </li>
      </ul>
      <div className="card-item-price-block">
        <h3 className="card-item-price">{props.product.price}₴</h3>
        <ul className="card-item-price-list">
          <li className="card-item-price-item">
            <img className="card-item-price-img" src={cart} alt="" />
          </li>
          <li className="card-item-price-item">
            <img className="card-item-price-img" src={favorites} alt="" />
          </li>
        </ul>
      </div>

      <button
        onClick={() => {
          showMoreHandler(props.product.id);
        }}
        className="card-button"
      >
        Купить в 1 клик
      </button>
    </div>
  );
};
export default Card;
