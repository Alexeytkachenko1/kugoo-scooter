import { Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Product from "./Routes/Product/Product";
import About from "./Routes/About/About";
import Delivery from "./Routes/Delivery/Delivery";
import TestDrive from "./Routes/TestDrive/TestDrive";
import Blog from "./Routes/Blog/Blog";
import Contacts from "./Routes/Contacts/Contacts";
import Promotion from "./Routes/Promotion/Promotion";
import Footer from "./Footer/Footer";
import Catalog from "./Main/Catalog/Catalog";
import CatalogScooters from "./Main/Catalog/CatalogScooters/CatalogScooters";
import Basket from "./Basket/Basket";

function App(props) {
  return (
    <div className="App">
      <Header header={props.state.header} menu={props.state.menu} />

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route
          path="/product/:productId"
          element={<Product scooter={props.state.scooter} />}
        />
        <Route path="/about-shop" element={<About />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/test-drive" element={<TestDrive />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/promotion" element={<Promotion />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/scooters" element={<CatalogScooters />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
      <Footer
        footer={props.state.footer}
        contacts={props.state.footer.contacts}
      />
    </div>
  );
}

export default App;
