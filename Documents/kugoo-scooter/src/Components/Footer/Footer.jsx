import "./Footer.scss";
const Link = (props) => {
  return (
    <li>
      <a href="#">{props.link}</a>
    </li>
  );
};
const Service = (props) => {
  return (
    <div className="contact-card">
      <h3 className="contact-title">{props.service.type}</h3>
      <h2 className="contact-number">{props.service.number}</h2>
      <p className="contact-date">{props.service.date}</p>
    </div>
  );
};
const Shop = (props) => {
  return (
    <div className="contact-card">
      <h3 className="contact-title">{props.shop.type}</h3>
      <h2 className="contact-number">{props.shop.number}</h2>
    </div>
  );
};

const Footer = (props) => {
  let сatalog = props.footer.сatalog.map((link) => <Link link={link} />);
  let buyer = props.footer.buyer.map((link) => <Link link={link} />);
  let blog = props.footer.blog.map((link) => <Link link={link} />);
  let services = props.contacts.services.map((service) => (
    <Service service={service} />
  ));
  let shops = props.contacts.shops.map((shop) => <Shop shop={shop} />);

  return (
    <footer className="footer">
      <div className="footer-banner">
        <div className="footer-banner-wrapper container">
          <h2 className="footer-banner-header">
            Оставьте свою почту и станьте первым, кто получит скидку на новые
            самокаты
          </h2>
          <input
            className="footer-banner-input"
            type="text"
            placeholder="Введите Ваш email"
          />
          <button className="footer-banner-button">Подписаться</button>
        </div>
      </div>
      <div className="container">
        <div className="footer-main">
          <div className="footer-info">
            <div className="footer-catalog">
              <h4 className="footer-title">Каталог товаров</h4>
              <ul className="footer-list">{сatalog}</ul>
            </div>

            <div className="footer-buyer">
              <h4 className="footer-title">Покупателям</h4>
              <div className="footer-wrapper-buyer">
                <ul className="footer-list">{buyer}</ul>
                <ul className="footer-list">{blog}</ul>
              </div>
            </div>
          </div>
          <div className="footer-contacts">
            <h4 className="footer-title">Контакты</h4>
            <div class="footer-contacts-wrapper">
              <ul className="footer-contacts-services">{services}</ul>
              <ul className="footer-contacts-shops">{shops}</ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
