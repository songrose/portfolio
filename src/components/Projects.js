import React from "react";
import text from "../text";
import "materialize-css/dist/css/materialize.min.css";
import "../css/Projects.css";
import ReactPlayer from "react-player";

function Introduction(props) {
  return (
    <div className="container-projects">
      <h3>Projects</h3>
      <hr />
      <br />
      <div className="project-list-cont">
        <div className="nightLight project-right">
          <div className="picture">
            <img alt="nightlightpic2" src={text.NightLight.url2} />

            <img alt="nightlightpic1" src={text.NightLight.url} />
          </div>
          <div>
            <h4>Night Light</h4>
            {text.NightLight.description}
            <br></br>

            <br />
            <b>Notable Achievements: </b>
            {text.NightLight.NotableAchievements}
          </div>
        </div>
        <br />
        <br />
        <div className="ecoQuest project-right">
          <div className="ecoQuestVid">
            <ReactPlayer
              width={400}
              height={250}
              url="https://www.youtube.com/watch?v=ZPsxTFwlcXM"
            />
          </div>
          <div className="ecoQuestDesc">
            <h4>EcoQuest</h4>
            {text.EcoQuest.description}
          </div>
        </div>
        <br />
        <br />
        <div className="f4x4x4 project-right">
          <img src={text.f4x4x4.url} alt="4x4pict"></img>
          <div className="description4x4">
            {" "}
            <h4>{text.f4x4x4.name}</h4>
            {text.f4x4x4.description}
            <br />
            <br />
            <b>
              <a href="uhh"> play here</a>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
