import { useContext } from "react"
import { ThemeContext } from "../Contexts/ThemeContext"

export default function Github(){

    const {dark} = useContext(ThemeContext)

    return (
        <button className="btn btn-ghost">
          <img style={{ width: "35px" }} src={dark ? "/assets/github-night.png" : "/assets/github.png"}></img>
        </button>
    )
}