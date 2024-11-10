import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Contexts/ThemeContext";

export default function Resume() {
  const { dark } = useContext(ThemeContext);

  return (
    <div className="text-center">
      <Link to="/assets/programming _resume.pdf" target="_blank" download>
        <button
          style={{ marginBottom: "1rem" }}
          className="btn btn-ghost min-w-[100px] min-h-[100px]"
        >
          <img
            style={{ width: "100px" }}
            src={dark ? "assets/download-night.png" : "/assets/download.png"}
          ></img>
        </button>
      </Link>
      <iframe
        className={"pdf"}
        width="100%"
        height="1000"
        src={`/assets/programming_resume.pdf#toolbar=0&navpanes=0`}
      ></iframe>
    </div>
  );
}
