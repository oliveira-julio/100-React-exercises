import { useState } from "react"
import HideAndShowPanel from "./HideAndShowPanel"

const App = () => {
    const [isShowing, setIsShowing] = useState(false)
    const [buttonName, setButtonName] = useState("Show")

    const handleButtonName = (isShowing) => {
        if (isShowing) {
            setButtonName("Hide")
        } else {
            setButtonName("Show")
        }
    }

    const handleIsShowing = () => {
        setIsShowing(!isShowing)
        handleButtonName(!isShowing)
    }

    return (
        <div>
            <button onClick={handleIsShowing}>{buttonName}</button>
            <HideAndShowPanel isShowing={isShowing}></HideAndShowPanel>
        </div>
    )
}

export default App