import "./Main.scss";
import Hero from "./Hero/Hero";
import Scooters from "./Scooters/Scooters";

const Main = () => {
  return (
    <main className="container">
      <Hero />
      <Scooters />
    </main>
  );
};

export default Main;
