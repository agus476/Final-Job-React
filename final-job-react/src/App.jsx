import React from "react";

import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { AboutUs } from "./components/AboutUs/AboutUs";

function App() {
  return (
    <>
    <NavBar/>
    <AboutUs/>
    <ItemListContainer article = "Hats"/>
    
    
    
    </>
  );
}

export default App;
