import React from "react";

import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer article = "Shoes"/>
    <ItemListContainer article = "T-shirt"/>
    <ItemListContainer article = "Hoods"/>
    
    
    </>
  );
}

export default App;
