import { useState } from "react"
import generateOneRandomColor from "./domain/random_color_generator"
import ColoredBlock from "./components/ColoredBlock";
import styles from "./App.module.css"

const App = () => {
    const [randomColor, setRandomColor] = useState(generateOneRandomColor());

    const handleRandomColor = () => {
        setRandomColor(generateOneRandomColor())
    }

    return (
        <div>
            <div className={styles.vertical_align}>
                <p>Generated color: {randomColor}</p>
                <ColoredBlock color={randomColor}></ColoredBlock>
                <button onClick={handleRandomColor}>Generate a new color</button>
            </div>
        </div>
    )
}

export default App