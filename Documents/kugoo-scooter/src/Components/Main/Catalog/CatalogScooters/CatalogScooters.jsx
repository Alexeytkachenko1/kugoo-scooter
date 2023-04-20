import Card from "../../Scooters/Card/Card";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import Filters from "../Filters/Filters";
import "./CatalogScooters.scss";
import arrow from "../../../../assets/img/Arrow down.png";
import catalogBanner from "../../../../assets/img/catalogScootersBanner.png";
import { db } from "../../../../firebase/firebase";
// import { Query } from "firebase/firestore";
import { query, where, collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";

const CatalogScooters = () => {
  useEffect(() => {
    const scootersRef = collection(db, "catalog-scooters");
    const q = query(
      scootersRef,
      where("filter", "array-contains-any", ["Внедорожный", "Городской"])
    );
    getDocs(q).then((doc) => doc.forEach((item) => console.log(item.data())));
  }, []);
  const scootersData = createSelector(
    (state) => state.scooters.scootersData,
    (scooters) => {
      return {
        scooters,
      };
    }
  );
  const data = useSelector(scootersData);

  return (
    <div className="catalog container">
      <div className="catalog-banner">
        <img className="catalog-banner-img" src={catalogBanner} alt="" />
        <h2 className="catalog-banner-header">Электросамокаты Kugoo Kirin</h2>
      </div>
      <div className="catalog-filter-row">
        <h2 className="catalog-filter-row__header">Фильтр</h2>
        <p className="catalog-filter-row__decs">Сортировать:</p>
        <button className="catalog-filter-row__button">
          По цене
          <img className="catalog-filter-row__img" src={arrow} alt="" />
        </button>
        <button className="catalog-filter-row__button">
          По дальности хода
          <img className="catalog-filter-row__img" src={arrow} alt="" />
        </button>
      </div>
      <div className="catalog-filter-main">
        <div className="catalog-filter-main__left">
          <Filters />
        </div>
        <ul className="catalog-filter-main__list">
          {data.scooters.map((element) => (
            <li className="catalog-filter-main__item">
              <Card
                className="catalog-filter-main__card"
                {...element}
                key={element.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default CatalogScooters;
