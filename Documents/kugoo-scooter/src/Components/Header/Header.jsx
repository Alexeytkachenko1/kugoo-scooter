import { NavLink } from "react-router-dom";
import "./Header.scss";
import catalog from "../../assets/img/catalog.svg";
import basket from "../../assets/img/shopping-cart 2.svg";
import search from "../../assets/img/search.png";

const Link = (props) => {
  return <NavLink to={props.link.adress}>{props.link.name}</NavLink>;
};

const Header = (props) => {
  let headerLinks = props.header.links.map((link) => <Link link={link} />);
  return (
    <header className="container">
      <div className="header-main">
        <a className="header-logo" href="www">
          {" "}
        </a>
        <button className="header-catalog">
          <img className="header-catalog-svg" src={catalog} alt="" />
          <span className="header-catalog-span">Каталог</span>
        </button>
        <img className="header-search" src={search} alt="" width="603px" />
        <button className="header-basket">
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

// window.addEventListener("scroll", () => {
//   let headerSticky = document.querySelector("header");
//   let scrollTop = window.scrollY;

//   if (scrollTop >= 10) {
//     headerSticky.classList.add("header-fixed");
//   } else {
//     headerSticky.classList.remove("header-fixed");
//   }
// });

export default Header;
