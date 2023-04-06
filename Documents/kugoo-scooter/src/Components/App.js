import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Product from "./Product/Product";

import Footer from "./Footer/Footer";

function App(props) {
  return (
    <div className="App">
      <Header header={props.state.header} />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
      <Footer
        footer={props.state.footer}
        contacts={props.state.footer.contacts}
      />
    </div>
  );
}

export default App;
