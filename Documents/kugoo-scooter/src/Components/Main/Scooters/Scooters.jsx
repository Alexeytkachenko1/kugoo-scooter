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

const Scooters = () => {
  const navigate = useNavigate();

  let [products, setProducts] = useState([]);
  useEffect(() => {
    // axios
    //   .get(
    //     "https://my-json-server.typicode.com/Alexeytkachenko1/my-json-server/scooters"
    //   )
    //   .then((response) => {
    //     setProducts(response.data);
    //   });
    let data = JSON.parse(JSON.stringify(myJson));
    setProducts(data.scooters);
  }, []);
  const showMoreHandler = (productId) => {
    navigate(`product/${productId}`);
  };

  let cards = products.map((product) => <Card product={product} />);

  return (
    <section className="scooters container">
      <h2 className="scooters-header">Электросамокаты</h2>
      <div className="scooters-wrapper">{cards}</div>
    </section>
  );
};

export default Scooters;
