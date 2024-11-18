import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Contexts/ThemeContext";

export default function Resume() {
  const { dark } = useContext(ThemeContext);

  return (
    <div className="text-center p-6 mt-[64px] mb-[64px]">
      <Link to="/assets/programming_resume.pdf" target="_blank" download>
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
      <div className="justify-center w-full flex" >
        <iframe
          className={"pdf w-[850px]"}
          height="1000"
          src={`/assets/programming_resume.pdf#toolbar=0&navpanes=0`}
        ></iframe>
      </div>
    </div>
  );
}
