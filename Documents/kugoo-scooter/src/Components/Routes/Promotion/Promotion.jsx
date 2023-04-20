import promo from "../../../assets/img/sell-out.png";
import "./Promotion.scss";

const Promotion = () => {
  return (
    <div className="blog container">
      <img className="blog-img" src={promo} alt="" />
      <div className="testDrive-wrapper">
        <button className="testDrive-button-left">До 01.09</button>
        <button className="testDrive-button-right">+ 2 подарка</button>
      </div>
      <h2 className="blog-header-prom">
        выгода 2130 UAN при покупке Kugoo Kirin M4 Pro 13 Ah
      </h2>
    </div>
  );
};
export default Promotion;
