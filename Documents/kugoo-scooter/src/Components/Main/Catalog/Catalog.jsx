import "./Catalog.scss";
import banner from "../../../assets/img/catakog-banner.png";
import scooters from "../../../assets/img/catalog-scooters.png";
import bikes from "../../../assets/img/catalog-bikes.png";
import weight from "../../../assets/img/catalog-weight.png";
import vacuum from "../../../assets/img/catalog-vacuum.png";
import { Link } from "react-router-dom";

const Catalog = () => {
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(false);

  // useEffect(() => {
  //   if (data.length === 0) {
  //     getDocs(collection(db, "catalog-scooters"))
  //       .then((docs) =>
  //         docs.forEach((item) =>
  //           setData((prevState) => [...prevState, item.data()])
  //         )
  //       )
  //       .catch(() => setError(true));
  //   } else return;
  // }, []);
  // if (error) {
  //   return <div>"ERROR</div>;
  // }

  // const cards = data.map((product) => <Card {...product} key={product.id} />);

  return (
    <>
      {/* {data.length === 0 && <Spinner />}
      {data.length !== 0 && ( */}
      <section className="catalog container">
        <img className="catalog-img" src={banner} alt="" />
        <h2 className="catalog-header">Каталог товаров</h2>
        <ul className="catalog-wrapper__list">
          <li className="catalog-wrapper__item">
            <Link
              className="catalog-wrapper__link"
              to="/catalog/scooters"
            ></Link>
            <img className="catalog-wrapper__img" src={scooters} alt="" />
            <div className="catalog-wrapper__img-container">
              <h2 className="catalog-wrapper__img-title">Электросамокаты</h2>
              <h3 className="catalog-wrapper__desc">от 15 000 грн</h3>
            </div>
          </li>
          <li className="catalog-wrapper__item">
            <img className="catalog-wrapper__img" src={bikes} alt="" />
            <div className="catalog-wrapper__img-container">
              <h2 className="catalog-wrapper__img-title">Электровелосипеды</h2>
              <h3 className="catalog-wrapper__desc">от 20 000 грн</h3>
            </div>
          </li>
          <li className="catalog-wrapper__item">
            <img className="catalog-wrapper__img" src={weight} alt="" />
            <div className="catalog-wrapper__img-container">
              <h2 className="catalog-wrapper__img-title">Весы</h2>
              <h3 className="catalog-wrapper__desc">от 5 000 грн</h3>
            </div>
          </li>
          <li className="catalog-wrapper__item">
            <img className="catalog-wrapper__img" src={vacuum} alt="" />
            <div className="catalog-wrapper__img-container">
              <h2 className="catalog-wrapper__img-title">Робот-пылесоссы</h2>
              <h3 className="catalog-wrapper__desc">от 7 000 грн</h3>
            </div>
          </li>
        </ul>
      </section>
      {/* )} */}
    </>
  );
};

export default Catalog;
