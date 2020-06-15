import React from "react";
import "../App.css";
import nav from "react-materialize";
import M from "materialize-css";
import text from "../text";
import "../css/ExtraInfo.css";

import "materialize-css/dist/css/materialize.min.css";

function ExtraInfo() {
  return (
    <div className="align">
      <div className="paragraphextra">
        <h4>A little more about me.</h4>
        <hr></hr>
        {text.about_text[3]}
        <br />
        <br />
        {text.about_text[2]}
        <br />
      </div>
    </div>
  );
}

export default ExtraInfo;
