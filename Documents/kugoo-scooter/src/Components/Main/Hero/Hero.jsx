import "./Hero.scss";
import hero from "../../../assets/img/Mask Group.png";

const Hero = () => {
  return (
    <section className="Hero container">
      <img src={hero} alt="" />
    </section>
  );
};

export default Hero;
