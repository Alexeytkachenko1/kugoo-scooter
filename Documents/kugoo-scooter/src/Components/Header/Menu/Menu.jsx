import "./Menu.scss";
import "../Header.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Link = (props) => {
  return (
    <div className="menu-wrapper">
      <svg className="menu-link-svg">
        {/* <use src={props.link.img}></use> */}
      </svg>
      <img className="menu-link-svg" src={props.link.img} alt="" />
      <NavLink to={props.link.address}>{props.link.name}</NavLink>
    </div>
  );
};

const Menu = ({ active, setActive, ...props }) => {
  let menuLinks = props.menu.links.map((link) => <Link link={link} />);
  let peculiarities = props.menu.peculiarities.map((link) => (
    <Link link={link} />
  ));
  let forWhom = props.menu.forWhom.map((link) => <Link link={link} />);

  return (
    <div
      className={active ? "menu active" : "menu"}
      onClick={() => setActive(false)}
    >
      <div
        className="menu-wrapper"
        onClick={(event) => event.stopPropagation()}
      >
        <ul className="menu-list">{menuLinks}</ul>
      </div>
      <div className="peculiarities">
        <ul>{peculiarities}</ul>
      </div>
      <div className="forWhom">
        <ul>{forWhom}</ul>
      </div>

      {/* <h1>Catalog</h1> */}
    </div>
  );
};

export default Menu;
