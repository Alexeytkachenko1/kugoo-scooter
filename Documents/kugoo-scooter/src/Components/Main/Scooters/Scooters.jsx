import "./Scooters.scss";
import "../Scooters/Card/Card.scss";

// import Card from "./Card/Card";
import battery from "../../../assets/img/card/accumulator 1.svg";
import power from "../../../assets/img/card/power 1.svg";
import speed from "../../../assets/img/card/speedometer 1.svg";
import reserve from "../../../assets/img/card/timer 1.svg";
import cart from "../../../assets/img/card/shopping-cart-2 1.svg";
import favorites from "../../../assets/img/card/Heart.svg";
import { Link, useNavigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import { useState } from "react";
// import axios from "axios";

import { useEffect } from "react";
import myJson from "../../../data.json";
import Card from "./Card/Card";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { db } from "../../../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";
import Spinner from "../Spinner";
import { setScooters, setName, setPassword } from "../../../actions/index";
import { useDispatch } from "react-redux";

const Scooters = () => {
  // const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const scootersDataVar = createSelector(
    (state) => state.scooters.scootersData,
    (state) => state.user,
    (scooters, user) => {
      return {
        scooters,
        user,
      };
    }
  );
  const data = useSelector(scootersDataVar);
  console.log(data);

  //*************** */
  // let [products, setProducts] = useState([]);
  // useEffect(() => {
  //   // axios
  //   //   .get(
  //   //     "https://my-json-server.typicode.com/Alexeytkachenko1/my-json-server/scooters"
  //   //   )
  //   //   .then((response) => {
  //   //     setProducts(response.data);
  //   //   });
  //   let data = JSON.parse(JSON.stringify(myJson));
  //   setProducts(data.scooters);
  // }, []);
  // const user = {
  //   name: "Alex",
  //   age: 18,
  // };
  useEffect(() => {
    // localStorage.setItem("user", JSON.stringify(user));
    if (data.scooters.length === 0) {
      getDocs(collection(db, "catalog-scooters"))
        .then((docs) =>
          docs.forEach((item) => dispatch(setScooters(item.data())))
        )
        .catch(() => setError(true));
    } else return;
  }, []);
  if (error) {
    return <div>"ERROR</div>;
  }

  const cards = data.scooters.map((product) => (
    <Card {...product} key={product.id} />
  ));

  return (
    <>
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
      {data.length === 0 && <Spinner />}
      {data.length !== 0 && (
        <section className="scooters container">
          <h2 className="scooters-header">Электросамокаты</h2>
          <div className="scooters-wrapper">{cards}</div>
        </section>
      )}
    </>
  );
};

export default Scooters;
