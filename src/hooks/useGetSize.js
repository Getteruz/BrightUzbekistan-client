import { useEffect, useState } from "react"

const useGetSize = (selector) => {
    const [size, setSize] = useState({})
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const aside = document.getElementById(selector)
            const handleResize = () => { setSize({ width: aside?.clientWidth, height: aside?.clientHeight }) }
            handleResize()
            window.addEventListener('resize', handleResize)
            return () => window.removeEventListener('resize', handleResize)
        }
    }, [typeof window])
    return size
}

export default useGetSize