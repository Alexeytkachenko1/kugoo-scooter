import contacts from "../../../assets/img/contacts.png";
import "./Contacts.scss";
const Contacts = () => {
  return (
    <div className="blog container">
      <img className="blog-img" src={contacts} alt="" />
      <h2 className="blog-header">Контакты и адреса</h2>
    </div>
  );
};
export default Contacts;
