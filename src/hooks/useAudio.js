import { useRouter } from "next/router"
import { useMemo, useState, useRef, useEffect } from "react"


const useAudio = (src) => {
    const router = useRouter()
    const [_, setOptions] = useState({})
    const prevConf = useRef({prevTime: 0, router: router.pathname})

    const audio = useMemo(() => {
        return typeof window !== 'undefined' ? new Audio(src) : {}
    }, [typeof window !== 'undefined'])

    useEffect(() => {
        return () => audio?.pause()
    }, [])
    
    if(audio){
        audio.onloadedmetadata = () => setOptions({})
        audio.ontimeupdate = () => {
            if(prevConf.current.prevTime !== Math.floor(audio.currentTime)){
                prevConf.current.prevTime = Math.floor(audio.currentTime)
                setOptions({})
            } else {
                return
            }
        }
        audio.onpause = () => setOptions({})
        audio.onplay = () => setOptions({})
        audio.onaddtrack = (e) => console.log(e);
    }

    return audio
}

export default useAudio