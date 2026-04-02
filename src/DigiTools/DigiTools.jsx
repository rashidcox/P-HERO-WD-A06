import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import HeroS from "./Main/HeroS";
import ProductHeader from "./Main/Product/ProductHeader";
import RatingS from "./Main/RatingS";
import GetStart from "./Main/GetStart";
import STPrinting from "./Main/STPrinting";
import ReadyTo from "./Main/ReadyTo";
import { use } from "react";
import { useState } from "react";

const dd = fetch("../../Data.json").then((res) => res.json());

function DigiTools() {
  const data = use(dd);

  const [cart, setCart] = useState(0);

  const [cartlist, setCartlist] = useState([]);
  

  return (
    <div>
      <Header cart={cart} />
      <HeroS />
      <ProductHeader
        data={data}
        cart={cart}
        setCart={setCart}
        cartlist={cartlist}
        setCartlist={setCartlist}
      />
      <RatingS />
      <GetStart />
      <STPrinting />
      <ReadyTo />
      <Footer />
    </div>
  );
}

export default DigiTools;
