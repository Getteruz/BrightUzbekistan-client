const secondToTime = (sec) => {
    if(!sec || sec === 0) return '00:00'

    const minute = Math.floor(sec / 60)
    const second = Math.floor(sec) - (minute * 60)

    return `${minute < 1 ? '00' : minute > 9 ? minute : `0${minute}`}:${second > 9 ? second : `0${second}`}`
}

export default secondToTime