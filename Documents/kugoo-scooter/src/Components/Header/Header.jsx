import { NavLink, Route } from "react-router-dom";
import "./Header.scss";
import catalog from "../../assets/img/catalog.svg";
import basket from "../../assets/img/shopping-cart 2.svg";
import search from "../../assets/img/search.png";
import { useState } from "react";
import { Routes } from "react-router-dom";
import Menu from "./Menu/Menu";

const Link = (props) => {
  return <NavLink to={props.link.address}>{props.link.name}</NavLink>;
};

// const addProductToBasket = () => {
//   alert(`${product.title} добавлен в корзину`);
//   setIsProductBasket(true);
// };
const Header = (props) => {
  const [menuActive, setMenuActive] = useState(false);

  let headerLinks = props.header.links.map((link) => <Link link={link} />);
  return (
    <header className="container">
      <div className="header-main">
        <a className="header-logo" href="//kugoo-scooter">
          {" "}
        </a>
        <button
          className="header-catalog"
          onClick={() => setMenuActive(!menuActive)}
        >
          <img className=" header-catalog-svg" src={catalog} alt="catalog" />
          <span className="header-catalog-span">Каталог</span>
        </button>
        <Menu menu={props.menu} active={menuActive} setActive={setMenuActive} />

        <img className="header-search" src={search} alt="" width="603px" />
        {/* <NavLink to="/account" className="user-account-link">Account</NavLink>
         <NavLink to="/cart" className="user-cart-link">Cart</NavLink> */}
        <button
          className="header-basket"
          onClick={() => setMenuActive(!menuActive)}
        >
          <img className="header-basket-img" src={basket} alt="" />
          <span className="header-basket-span">Корзина</span>
        </button>
      </div>

      <div className="header-nav">
        <nav>{headerLinks}</nav>
      </div>
    </header>
  );
};

{
  /* className={menuActive ? "menu active" : "menu"}
      onClick={() => setMenuActive(false)} */
}

export default Header;
