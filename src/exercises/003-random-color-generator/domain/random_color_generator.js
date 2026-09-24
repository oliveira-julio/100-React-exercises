const generateOneRandomHexadecimal = () => {
    const decimal = Math.floor(Math.random() * 16)
    return decimal.toString(16)
}

const generateOneRandomColor = () => {
    const hexs = Array.from({length: 6}, generateOneRandomHexadecimal)
    return "#" + hexs.join("")
}



export default generateOneRandomColor