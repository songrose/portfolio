import React from "react";
import text from "../text";
import me from "../img/Rose.jpg";
import "materialize-css/dist/css/materialize.min.css";
import "../css/Introduction.css";
function Introduction(props) {
  return (
    <div className="align">
      <img src={me} alt="Rose" className="picturesizer" />
      <div className="paragraph">
        <h3>Rose Song</h3>
        I'm a recent graduate from
        <a href={"https://www.bcit.ca/"}> BCIT </a> (British Columbia Institute
        of Technology). I received my diploma in{" "}
        <a href={"https://www.bcit.ca/study/programs/5500dipma"}>CST</a>{" "}
        (Computer Systems Technology) which is a 2 year condensed diploma
        program. My studies consisted of Software Development, Computer Science,
        and Algorithms. Currently, I am seeking a job and open to opportunities.
        <br />
        <br />
        <a href={"https://github.com/songrose"}>Github</a>
        <br />
        <a href={"https://www.linkedin.com/in/songrose/"}>Linkedin</a>
        <br />
        <b>Email: </b>rosesongtech@gmail.com
      </div>
    </div>
  );
}

export default Introduction;
