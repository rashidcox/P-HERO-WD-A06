

import { use } from "react"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import HeroS from "./Main/HeroS";

const dd = fetch("../../Data.json").then(res => res.json())

function DigiTools() {
  const data = use(dd);


  return (
    <div>
      <Header />
      <HeroS />
      <Footer />
    </div>
  )
}

export default DigiTools