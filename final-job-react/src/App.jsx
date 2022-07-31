import React from "react";
import { NavBar } from "./components/NavBar/NavBar";
import Home from "./pages/Home";

import AboutUs from './pages/AboutUs'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Detail from "./pages/Detail";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
     <Route path="/" element ={<Home/>}/>
     <Route path="/About%20Us" element = {<AboutUs/>}/>
     <Route path="/Contact%20Us" element = {<h1>ContactUs</h1>}/>
     <Route path="/category/:categoryid" element = {<ItemListContainer/>} />
     <Route path="/product/:id" element = {<Detail/>} />

    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
