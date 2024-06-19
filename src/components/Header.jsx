import img from "../assets/logo.jpg";
import Cart from "./Cart";
// import { useState } from "react";
export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={img} alt="ReactFoodLogo" />
        <h1>Ronaldo & Messi Food</h1>
      </div>
      <nav>
        <button>
          <Cart />
        </button>
      </nav>
    </header>
  );
}
