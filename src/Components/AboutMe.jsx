import { Link } from "react-router-dom";
import TypeAboutMe from "./TypeAboutMe";
import NextPage from "./NextPage";

function AboutMe() {


  return (
    <div className="text-center p-6 page-height">
      <div className="intro-text">
        <h1>Hi, I'm</h1>
        <h1 style={{ color: "#32de84" }}>Josh.</h1>
      </div>
      <TypeAboutMe/>
      <div className="aboutme-text">
        <h2 className="about-me-text" >
          I'm an experienced Software Developer, seeking emplyment in New Zealand.
        </h2>
        <h2 className="about-me-text">
          I have a passion in the marriage of problem solving and design.
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
