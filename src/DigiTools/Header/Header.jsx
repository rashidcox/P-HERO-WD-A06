import React from "react";
import Navigation from "./Navigation";

function Header({ cart }) {
  return (
    <div>
      <Navigation cart={cart} />
    </div>
  );
}
export default Header; 
