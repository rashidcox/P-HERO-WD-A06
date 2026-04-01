import { use } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import HeroS from "./Main/HeroS";
import ProductHeader from "./Main/Product/ProductHeader";
import RatingS from "./Main/RatingS";
import GetStart from "./Main/GetStart";

const dd = fetch("../../Data.json").then((res) => res.json());

function DigiTools() {
  const data = use(dd);

  return (
    <div>
      <Header />
      <HeroS />
      <ProductHeader />
      <RatingS />
      <GetStart />
      <Footer />
    </div>
  );
}

export default DigiTools;
