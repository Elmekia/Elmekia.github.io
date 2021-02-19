import './App.css';
import React, { Fragment } from "react";
import Header from "./components/header/Header";
import About from "./components/sections/About"

function App() {
  return (
    <Fragment>
        <Header />
        <About />
      </Fragment>
  );
}

export default App;
