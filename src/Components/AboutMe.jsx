import { Link } from "react-router-dom";
import Github from "./Github";
import { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import TypeAboutMe from "./TypeAboutMe";
import NextPage from "./NextPage";

function AboutMe() {

  const {dark} = useContext(ThemeContext)

  return (
    <div className="text-center p-6 page-height">
      <div className="intro-text">
        <h1>Hi, I'm</h1>
        <h1 style={{ color: "#32de84" }}>Josh.</h1>
      </div>
      <TypeAboutMe/>
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
          <Link to="/projects" ><a className="link link-success">Here</a></Link> is a showcase of what I have been able to create as a full-stack
          devleloper.
        </h2>
      </div>
      <NextPage text="Let's Continue to Projects" page={"/projects"} />
    </div>
  );
}

export default AboutMe;
