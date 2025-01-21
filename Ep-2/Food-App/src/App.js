import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return(
    <div className="app">
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  );
}
export default App;
