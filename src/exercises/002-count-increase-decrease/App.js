import { useState } from "react"

const App = () => {
    const [number, setNumber] = useState(0);
    
    const increase = () => {
        setNumber(number + 1)
    }

    const decrease = () => {
        setNumber(number - 1)
    }

    return (
        <div>
            <p>Number: {number}</p>
            <div>
                <button onClick={decrease}>Decrease</button>
                <button onClick={increase}>Increase</button>
            </div>
        </div>
    )
}

export default App