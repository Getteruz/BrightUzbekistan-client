import AudioCard from 'components/UI/AudioCard'
import GreyButton from 'components/UI/Buttons/GreyButton'
import React from 'react'
import cls from './audioCart.module.scss'
export default function AudioCartmobil() {
    return (
        <>
            <GreyButton label='все новости' icon={RightArrows} />
            <AudioCard />
        </>
    )
}
