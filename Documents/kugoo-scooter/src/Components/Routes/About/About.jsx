import "./About.scss";
import about from "../../../assets/img/about-banner.png";
import CheckCircle from "../../../assets/img/CheckCircle.svg";
import diplom from "../../../assets/img/diplom.png";
const About = () => {
  return (
    <div className="about container">
      <div className="about-hero">
        <img className="about-hero-img" src={about} alt="" />
        <h2 className="about-hero-header">
          Kugoo-Ukraine — первый официальный дилер Kugoo Kirin в Украине{" "}
        </h2>
        <ul className="about-hero-list">
          <li className="about-hero-item">
            <h2 className="about-hero-item-title">Работаем с</h2>
            <h3 className="about-hero-item-desc">2017 г</h3>
          </li>
          <li className="about-hero-item">
            <h2 className="about-hero-item-title">Специалистов в штате</h2>
            <h3 className="about-hero-item-desc">35 </h3>
          </li>
          <li className="about-hero-item">
            <h2 className="about-hero-item-title">Клиентов по странам СНГ</h2>
            <h3 className="about-hero-item-desc">2 000 </h3>
          </li>
        </ul>
      </div>
      <div className="about-decs">
        <div className="about-decs-left">
          <h2 className="about-decs-left__header">
            С 2017 г. развиваем тему электротранспорта и освещаем его ценность в
            современном мире
          </h2>
          <p className="about-decs-left__title">Наша цель</p>
          <p className="about-decs-left__desc">
            Предоставить полный ассортимент современной продукции Kugoo Kirin,
            которая улучшает и упрощает жизнь. Cтремимся подарить комфорт и
            эмоции, поэтому помогаем с выбором и внимательно относимся к
            сервисному обслуживанию.
          </p>
          <h2 className="about-decs-left__pec">
            Специализируемся исключительно на бренде Kugoo, поэтому вы получите:
          </h2>
          <ul className="about-decs-left__pec-list">
            <li className="about-decs-left__pec-item">
              <img
                className="about-decs-left__pec-img"
                src={CheckCircle}
                alt=""
              />
              <p className="about-decs-left__pec-desc">
                Цены от завода-изготовителя Jilong ;
              </p>
            </li>
            <li className="about-decs-left__pec-item">
              <img
                className="about-decs-left__pec-img"
                src={CheckCircle}
                alt=""
              />
              <p className="about-decs-left__pec-desc">
                Бесплатный тест-драйв самокатов;
              </p>
            </li>

            <li className="about-decs-left__pec-item">
              <img
                className="about-decs-left__pec-img"
                src={CheckCircle}
                alt=""
              />
              <p className="about-decs-left__pec-desc">
                Фирменную гарантию 1 год;
              </p>
            </li>

            <li className="about-decs-left__pec-item">
              <img
                className="about-decs-left__pec-img"
                src={CheckCircle}
                alt=""
              />
              <p className="about-decs-left__pec-desc">
                Ремонт и обслуживание от 1 дня в собственном сервисном центре;
              </p>
            </li>

            <li className="about-decs-left__pec-item">
              <img
                className="about-decs-left__pec-img"
                src={CheckCircle}
                alt=""
              />
              <p className="about-decs-left__pec-desc">
                Более 1 000 запчастей и аксессуаров в наличии.
              </p>
            </li>
          </ul>
        </div>
        <img className="about-decs-img" src={diplom} alt="" />
      </div>
    </div>
  );
};
export default About;
