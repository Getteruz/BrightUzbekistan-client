import { useEffect, useState } from "react";

const Progress = ({
    max = 100,
    className = '',
    interval = 0.01,
    duration = 10,
    onEnd = () => {}
}) => {
    const [value, setValue] = useState(0)
    
    useEffect(() => {
       const intervalFunc = setInterval(() => {
            setValue(state => {
                const diff = duration * interval
                if(state + diff <= max) {
                    return state + diff 
                 } else {
                    typeof onEnd === 'function' && onEnd()
                    return 0
                 }
            })
        }, interval * 1000)
        return () => clearInterval(intervalFunc)
    }, [duration, interval, max, onEnd])

    return (
        <progress className={className} max={max} value={value} />
    );
}

export default Progress;
