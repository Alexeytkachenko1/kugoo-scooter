import "./Menu.scss";
import "../Header.scss";
import { NavLink } from "react-router-dom";
import { createPortal } from "react-dom";
// import Backdrop from "./Backdrop";
// import ElectricScooterIcon from "@mui/icons-material/ElectricScooter";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { useDispatch } from "react-redux";
import { setName, setPassword } from "../../../actions";
import { CSSTransition } from "react-transition-group";
import { FiveG } from "@mui/icons-material";

const LinkImg = (props) => {
  const dispatch = useDispatch();
  const userData = createSelector(
    (state) => state.user,
    (user) => {
      return {
        user,
      };
    }
  );
  const data = useSelector(userData);
  console.log(data);
  return (
    <li className="menu-wrapper-item">
      <button className="menu-link-svg">{props.link.img}</button>
      {/* <ElectricScooterIcon sx={{ color: "red" }} /> */}
      <NavLink className="menu-link" to={props.link.address}>
        {props.link.name}{" "}
      </NavLink>
      {/* <input
        type="text"
        value={data.user.name}
        onChange={(e) => dispatch(setName(e.target.value))}
      />
      <input
        type="text"
        value={data.user.password}
        onChange={(e) => dispatch(setPassword(e.target.value))}
      /> */}
    </li>
  );
};
const Link = (props) => {
  return (
    <li className="peculiarities-list-item">
      <NavLink to={props.link.address}>{props.link.name} </NavLink>
    </li>
  );
};

///
const App = (props) => {
  let menuLinks = props.menu.links.map((link) => <LinkImg link={link} />);
  let peculiarities = props.menu.peculiarities.map((link) => (
    <Link link={link} />
  ));
  let forWhom = props.menu.forWhom.map((link) => <Link link={link} />);

  return (
    <div className={"menu-wrapper"}>
      {/* <button onClick={() => setOpen(true)}>click</button> */}

      <ModalWindow
        show={props.open}
        onClose={props.closeModal}
        children={
          <>
            <div
              className="menu-categories"

              // onClick={(event) => event.stopPropagation()}
            >
              <ul className="menu-list">{menuLinks}</ul>
            </div>
            <div className="peculiarities">
              <h2 className="peculiarities-header">Особенности</h2>
              <ul className="peculiarities-list">{peculiarities}</ul>
            </div>
            <div className="peculiarities">
              <h2 className="peculiarities-header">Для кого</h2>
              <ul className="peculiarities-list">{forWhom}</ul>
            </div>
          </>
        }
      />
    </div>
  );
};

const Backdrop = (props) => {
  return createPortal(
    <div className="backdrop" onClick={props.onClick}></div>,
    document.getElementById("backdrop")
  );
};

const ModalWindow = (props) => {
  return (
    <>
      {props.show && <Backdrop onClick={props.onClose} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
};

const ModalOverlay = (props) => {
  const content = (
    <div className={`modal`}>
      <div className={`menu-wrapper`}>{props.children}</div>
    </div>
  );

  return createPortal(content, document.getElementById("modal-overlay"));
};

export default App;
//+++++
// const ModalOverlay = (props) => {
// let menuLinks = props.menu.links.map((link) => <LinkImg link={link} />);
// let peculiarities = props.menu.peculiarities.map((link) => (
//   <Link link={link} />
// ));
// let forWhom = props.menu.forWhom.map((link) => <Link link={link} />);

//   const content = (
//     <div
//       className={props.active ? "menu active" : "menu"}
//       onClick={() => props.setActive(false)}
//     >
//       <div
//         className="menu-wrapper"
//         onClick={(event) => event.stopPropagation()}
//       >
//         <ul className="menu-list">{menuLinks}</ul>
//       </div>
//       <div className="peculiarities">
//         <h2 className="peculiarities-header">Особенности</h2>
//         <ul className="peculiarities-list">{peculiarities}</ul>
//       </div>
//       <div className="peculiarities">
//         <h2 className="peculiarities-header">Для кого</h2>
//         <ul className="peculiarities-list">{forWhom}</ul>
//       </div>
//     </div>
//   );
//   return createPortal(content, document.getElementById("modal-hook"));
// };
// const ModalWindow = (props) => {
//   return (
//     <>
//       {props.active && <Backdrop onClick={props.setActive} />}
//       <ModalOverlay {...props} />
//     </>
//   );
// };

// export default ModalWindow;
