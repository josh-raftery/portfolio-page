import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Contexts/ThemeContext";
import NextPage from "./NextPage";
import Tooltip from "./Tooltip";

export default function Resume() {

  return (
    <div className="page-height" >
      <div className="p-6 m-auto max-w-[850px]">
        <div className="flex mt-20 mb-10 justify-between h-fit" >
          <h2 className="text-5xl font-black w-fit mb-auto" ><b>Resumé.</b></h2>
          <Link to="/assets/programming_resume.pdf" className="relative group" target="_blank" download>
            <button
              className=" max-w-[80px] h-fit w-fit hover:opacity-50"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-full" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 7L12 14M12 14L15 11M12 14L9 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16 17H12H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path> <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
            </button>
            <Tooltip text='Download'/>
          </Link>
        </div>
        <div className="justify-center w-full flex" >
          <iframe
            className={"pdf w-[850px]"}
            height="1000"
            src={`/assets/Resume.pdf#toolbar=0&navpanes=0`}
          ></iframe>
        </div>
      </div>
      <NextPage text={"Ready to Contact Me Now?"} page={"/contact"} href="#" />
    </div>
  );
}
