import delivery from "../../../assets/img/deliverySec.png";
import "./Delivery.scss";
const Delivery = () => {
  return (
    <div className="blog container">
      <img className="blog-img" src={delivery} alt="" />
      <h2 className="blog-header">
        Оплата и доставка любыми удобными способами
      </h2>
    </div>
  );
};
export default Delivery;
