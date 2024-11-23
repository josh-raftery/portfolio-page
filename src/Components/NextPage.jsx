import { Link } from "react-router-dom";
import Next from "./Next";

export default function NextPage({text, page}){
    return(
        <Link to={page} >
            <div className="flex justify-center gap-2 p-10 cursor-pointer w-fit m-auto" >
                <p className="hover:border-b border-[currentColor] leading-tight" >{text}</p>
                <div className="bouncing-next m-auto" >
                    <Next />
                </div>
            </div>
        </Link>
    )
}