import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Example from "./Components/Navbar/Navbar";
import Mainpage from "./Components/Mainpage/Mainpage";
import Footer from "./Components/Footer/Footer";
import MenParent from "./Components/Men/MenParent";
import WomenParent from "./Components/Women/WomenParent";
import KidsParent from "./Components/Kids/KidsParent";
import CartParent from "./Components/Cart/CartParent";
import { Link } from 'react-router-dom'
import Logbutton from "./Components/Logbutton/Logbutton";
import Profile from "./Components/Profile/Profile";

function App() {
  const [cartItems, setCartItems] = useState([]);
  function addToCart(item) {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      // Show alert if item already exists in the cart
      alert("Item already added to the cart");
    } else {
      // Add the item to the cart if it doesn't already exist
      setCartItems((prev) => [...prev, item]);
    }
  }

  return (
    <>
      <BrowserRouter>
        <Example cartitems={cartItems} />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/Men" element={<MenParent addToCart={addToCart} />} />
          <Route path="/Women" element={<WomenParent addToCart={addToCart} />}/>
          <Route path="/Kids" element={<KidsParent addToCart={addToCart} />} />
          <Route path="/Cart" element={<CartParent cartitems={cartItems} />} />
          <Route path="/Profile" element={<Profile/> } />
          <Route path="/signpage" element={<Logbutton/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
