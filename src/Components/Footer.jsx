import Github from "./Github";
import Gmail from "./Gmail";
import LinkedIn from "./LinkedIn";

export default function Footer() {
    return (
        <div className="flex fixed bottom-0 left-0 right-0 bg-base-100 p-2 gap-5 justify-center" >    
            <Github width={"25px"}/>
            <Gmail/>
            <LinkedIn/>
        </div>
    )
}