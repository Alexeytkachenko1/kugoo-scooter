import { useState, useEffect } from "react";
import "./Hero.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import myJson from "../../../data.json";
import { db } from "../../../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";
import Spinner from "../Spinner";
const Slider = () => {
  // const [sliders, setSliders] = useState([]);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  // useEffect(() => {
  //   // axios
  //   //   .get(
  //   //     "https://my-json-server.typicode.com/Alexeytkachenko1/my-json-server/scooters"
  //   //   )
  //   //   .then((response) => {
  //   //     setProducts(response.data);
  //   //   });
  //   let data = JSON.parse(JSON.stringify(myJson));
  //   setSliders(data.sliders);
  // }, []);
  useEffect(() => {
    if (data.length === 0) {
      getDocs(collection(db, "scooters"))
        .then((docs) =>
          docs.forEach((item) =>
            setData((prevState) => [...prevState, item.data()])
          )
        )
        .catch(() => setError(true));
    } else return;
  }, []);
  console.log(data);
  if (error) {
    return <div>"ERROR"</div>;
  }
  return (
    <>
      {data.length === 0 && <Spinner />}
      {data.length !== 0 && (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {data.map((slider) => {
            return (
              <SwiperSlide>
                <img
                  className="hero-img"
                  src={slider.image}
                  alt={`img_slider_${slider.id}`}
                />
                <div className="hero-wrapper">
                  <h3 className="hero-header">{slider.title}</h3>
                  <p className="hero-text">{slider.text}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </>
  );
};

const Hero = () => {
  return (
    <section className="prime-section">
      <Slider />
    </section>
  );
};

export default Hero;
