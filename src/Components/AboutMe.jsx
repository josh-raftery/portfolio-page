import { Link } from "react-router-dom";
import Github from "./Github";
import { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";

function AboutMe() {

  const {dark} = useContext(ThemeContext)

  return (
    <>
      <div className="intro-text">
        <h1>Hi, I'm</h1>
        <h1 style={{ color: "#32de84" }}>Josh.</h1>
        <a href="https://www.linkedin.com/in/joshuaraftery/" target="_blank">
          <button className="btn btn-ghost">
            <img style={{ width: "35px" }} src={dark ? "/assets/linkedin-night.png" : "/assets/linkedin.png"}></img>
          </button>
        </a>
        <a href="https://github.com/josh-raftery" target="_blank">
          <Github/>
        </a>
        <a href="mailto:joshuaraftery99@gmail.com" target="_blank">
          <button className="btn btn-ghost">
            <img style={{ width: "35px" }} src="/assets/gmail.png"></img>
          </button>
        </a>
      </div>
      <div className="aboutme-text">
        <h2 className="about-me-text" >
          Leveraging my previous 2 years experience as a Unidata software
          engineer I have transitioned into the world of web development.
        </h2>
        <h2 className="about-me-text">
          I have rediscovered the satisfaction of problem solving and embraced
          the new challenge of creating good UI/UX.
        </h2>
        <h2 className="about-me-text">
          <Link to="/projects" ><a className="link link-primary">Here</a></Link> is a showcase of what I have been able to create as a full-stack
          devleloper.
        </h2>
      </div>
    </>
  );
}

export default AboutMe;
