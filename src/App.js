import React from "react";
import nav from "react-materialize";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "./css/style.css";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import ExtraInfo from "./components/ExtraInfo";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/*
      <nav>
        <div className="nav-wrapper sticky-nav nav-color">
          <a href="#!" className="brand-logo center"></a>
          <ul className="left hide-on-med-and-down">
            <li>
              <a href="#Introduction">Introduction</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#ExtraInformation">Extra Information</a>
            </li>
          </ul>
        </div>
      </nav>
      */}
      <div className="container">
        <br /> <br />
        <a href={"Introduction"} />
        <Introduction />
        <br /> <br />
        <a href={"Projects"}></a>
        <Projects />
        <br /> <br />
        <a href={"ExtraInformation"}></a>
        <ExtraInfo />
      </div>
    </div>
  );
}

export default App;
