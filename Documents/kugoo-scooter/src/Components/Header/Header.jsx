import { NavLink, Route } from "react-router-dom";
import "./Header.scss";
import catalog from "../../assets/img/catalog.svg";
import basket from "../../assets/img/shopping-cart 2.svg";
import search from "../../assets/img/search.png";
import { useState } from "react";
import { Routes } from "react-router-dom";
import App from "./Menu/Menu";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";

const Link = (props) => {
  return (
    <NavLink
      style={({ isActive }) => {
        return {
          color: isActive ? "#ff0000" : "",
        };
      }}
      to={props.link.address}
    >
      {props.link.name}
    </NavLink>
  );
};

// const addProductToBasket = () => {
//   alert(`${product.title} добавлен в корзину`);
//   setIsProductBasket(true);
// };
const Header = (props) => {
  const basketCounter = createSelector(
    (state) => state.basket.count,
    (count) => {
      return {
        count,
      };
    }
  );
  const { count } = useSelector(basketCounter);
  const [menuActive, setMenuActive] = useState(false);

  let headerLinks = props.header.links.map((link) => (
    <Link link={link} key={link.name} />
  ));
  return (
    <header className="">
      <div className="header-main container">
        <a className="header-logo" href="/kugoo-scooter">
          {" "}
        </a>
        <button
          className="header-catalog"
          onClick={() => setMenuActive(!menuActive)}
        >
          <img className=" header-catalog-svg" src={catalog} alt="catalog" />
          <span className="header-catalog-span">Каталог</span>
        </button>
        <App
          menu={props.menu}
          open={menuActive}
          closeModal={() => setMenuActive(false)}
        />

        <img className="header-search" src={search} alt="" width="603px" />
        {/* <NavLink to="/account" className="user-account-link">Account</NavLink>
         <NavLink to="/cart" className="user-cart-link">Cart</NavLink> */}
        <button className="header-basket">
          <span>{count}</span>
          <img className="header-basket-img" src={basket} alt="" />

          <NavLink className="header-basket-span" to="/basket">
            Корзина
          </NavLink>
        </button>
      </div>

      <div className="header-nav">
        <nav className="container">{headerLinks}</nav>
      </div>
    </header>
  );
};

{
  /* className={menuActive ? "menu active" : "menu"}
      onClick={() => setMenuActive(false)} */
}

export default Header;
