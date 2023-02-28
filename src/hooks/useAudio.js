import { useMemo, useState, useRef, useEffect, useId } from "react"
import { useDispatch } from "react-redux"
import { audioActions } from "store/Audio"


const useAudio = (src) => {
    const [_, setOptions] = useState({})
    const prevConf = useRef({prevTime: 0})
    const dispatch = useDispatch()
    const id = useId()

    const audio = useMemo(() => {
        return typeof window !== 'undefined' ? new Audio(src) : {}
    }, [typeof window !== 'undefined'])
    
    useEffect(() => {
        return () => {
            audio?.pause()
            audio.onloadedmetadata = false
            audio.ontimeupdate = false
            audio.onpause = false
            audio.onplay = false
            audio.onended = false
        }
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
        audio.onpause = () => {
            setOptions({})
        }
        audio.onplay = () => {
            dispatch(audioActions.addAudio({id, audio}))
            setOptions({})
        }
        audio.onended = () => {
            dispatch(audioActions.removeAudio({id}))
        }
    }

    return audio
}

export default useAudio