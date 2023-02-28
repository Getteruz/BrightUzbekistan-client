import useAudio from 'hooks/useAudio'
import secondToTime from 'utils/secondToTime'
import generateProgress from 'utils/customProgress'
import { PauseIcon, PlayIcon } from '../icons'
import cls from './AudioPlayer.module.scss'

const AudioPlayer = ({src = ''}) => {
    const options = useAudio(src)
    const currentTime = Math.floor(options.currentTime || 0)
    const duration = Math.floor(options?.duration || 0)

    return (
        <div className={cls.player}>
            <button
                aria-label='audio play and pause button' 
                className={cls.player__button}
                onClick={() => options?.paused ? options?.play() : options?.pause()}
            >
                {typeof window !== 'undefined' && !options.paused ? <PauseIcon /> : <PlayIcon />}
            </button>
            <label className={cls.player__info}>
                <input
                    className={cls.player__progress} 
                    type="range" 
                    step={1}
                    min={0}
                    max={duration}
                    value={currentTime}
                    onChange={e => options.currentTime = e.target.value}
                    style={{background: generateProgress(currentTime, duration)}} 
                />
                <span className={cls.player__duration}>
                    <span>{secondToTime(currentTime)}</span>
                    <span>/</span>
                    <span>{secondToTime(duration)}</span>
                </span>
            </label>
        </div>
    );
}

export default AudioPlayer;
