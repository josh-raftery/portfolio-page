import { Link } from "react-router-dom"
import DayNight from "./DayNight"

function Nav(){
    return (
        <div style={{marginBottom: "1rem"}} className="nav" >
            <div className="navbar text-center bg-base-100">
                <div className="nav-bar flex-1 flex-nowrap">
                    <Link to="/resume" ><btn className="btn btn-ghost text-base sm:text-base">Resume</btn></Link>                
                    <Link to="/" ><btn className="btn btn-ghost text-base sm:text-base">About</btn></Link>        
                    <Link to="/projects" ><btn className="btn btn-ghost text-base sm:text-base">Projects</btn></Link>             
                </div>
                <DayNight/>
            </div>
        </div>
    )
}

export default Nav