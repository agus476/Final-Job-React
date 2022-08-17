import React from "react";
import { NavBar } from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import AboutUs from './pages/AboutUs'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Detail from "./pages/Detail";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import CartProvider from "./context/CartContext";


function App() {
  return (
    <CartProvider>
      
   <BrowserRouter>
    <NavBar/>
    <Routes>
     <Route path="/" element ={<Home/>}/>
     <Route path="/About%20Us" element = {<AboutUs/>}/>
     <Route path="/Contact%20Us" element = {<h1>ContactUs</h1>}/>
     <Route path="/category" element = {<ItemListContainer/>}/>
     <Route path="/:categoryid" element = {<ItemListContainer/>} />
     <Route path="/product/:id" element = {<Detail/>} />
     <Route path="/cart" element = {<Checkout/>} />

    </Routes>
    </BrowserRouter>
      
      
    </CartProvider>
    
    
  );
}

export default App;
