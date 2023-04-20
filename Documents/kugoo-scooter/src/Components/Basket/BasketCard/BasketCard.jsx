import "./BasketCard.scss";
import { addOneItem, substractOneItem } from "../../../actions";
import { useDispatch } from "react-redux";
import { deleteOne } from "../../../actions";
import deleteGood from "../../../assets/img/Delete.png";

const BasketCard = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="cart-main">
      <div className="cart-wrapper">
        <img className="cart-img" src={props.photo[0]} alt="" />
        <h2 className="cart-header">{props.title}</h2>

        <div className="cart-button-wrapper">
          <button
            className="cart-button-wrapper__button"
            onClick={() => dispatch(substractOneItem(props.id))}
          >
            -
          </button>
          <span className="cart-button-wrapper__span">{props.count}</span>
          <button
            className="cart-button-wrapper__button"
            onClick={() => dispatch(addOneItem(props.id))}
          >
            +
          </button>
        </div>
        <p className="cart-desc">{props.price} UAN</p>
        <button
          className="cart-button-wrapper__button-delete"
          onClick={() => dispatch(deleteOne(props.id))}
        >
          <img
            className="cart-button-wrapper__button-img"
            src={deleteGood}
            alt=""
          />
        </button>
      </div>
    </div>
  );
};
export default BasketCard;
