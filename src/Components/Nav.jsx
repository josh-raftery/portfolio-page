import { Link } from "react-router-dom"
import DayNight from "./DayNight"

function Nav(){
    return (
        <div className="navbar bg-base-100 flex justify-between">
            <div className="nav-text">
                <Link to="/resume" ><btn className="btn btn-ghost text-base sm:text-base">Resume</btn></Link>                
                <Link to="/" ><btn className="btn btn-ghost text-base sm:text-base">About</btn></Link>        
                <Link to="/projects" ><btn className="btn btn-ghost text-base sm:text-base">Projects</btn></Link>             
            </div>
            <div className="w-[50px]" >
                <DayNight/>
            </div>
        </div>
    )
}

export default Nav