
const generateProgress = (value, maxValue) => {
    const valPercent = (value / maxValue) * 100
    return `linear-gradient(to right, #0B212B ${valPercent}%, rgba(0,0,0,0) ${valPercent}%)`
}

export default generateProgress