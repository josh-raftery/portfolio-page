import { Link } from "react-router-dom"
import DayNight from "./DayNight"

function Nav(){
    return (
        <div className="bg-base-100 w-full nav-pos fixed top-0 left-0 right-0" >
            <div className="flex max-w-[500px] m-[auto] p-5 relative">
                <div className="justify-start" >
                    <div className="flex justify-between min-w-[200px] m-auto">
                        <Link to="/" ><btn href="#" class="underline-hover"><b>About</b></btn></Link>        
                        <Link to="/projects" ><btn href="#" class="underline-hover"><b>Projects</b></btn></Link>             
                        <Link to="/resume" ><btn href="#" class="underline-hover"><b>Resume</b></btn></Link>                
                    </div>
                </div>
                <div className="m-auto gap-3 w-fit right-[50px] absolute" >  
                    <Link to="/contact" ><btn href="#" class="underline-hover"><b>Contact</b></btn></Link>
                </div>
                <div className=" gap-3 w-fit right-[0] mr-2 top-[0] mt-[14.5px] absolute" >  
                    <DayNight/>
                </div>
            </div>
        </div>
    )
}

export default Nav