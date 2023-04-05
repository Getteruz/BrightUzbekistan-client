import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import Progress_bar from '../Aside/RightAside/ProgresBar'
import { DownloadIcon2, NetIcon, RightIcon } from '../icons'
import cls from './JurnalCard.module.scss'

const sekund = 10
const data = [
    {
        id: 1,
        img: '/images/jurnal1.svg',
        title: "Выпуск: 10.01.2023"
    },
    {
        id: 2,
        img: '/images/jurnal2svgsvg.svg',
        title: "Выпуск: 10.01.2023"
    },
    {
        id: 3,
        img: '/images/jurnal1.svg',
        title: "Выпуск: 10.01.2023"
    },

]
export default function JurnalCard() {
    const img1 = useRef()
    const img2 = useRef()
    const [progress, setProgress] = useState(0)
    const [number, setNunber] = useState(0)
    const [number2, setNunber2] = useState(1)
    useEffect(() => {
        setInterval(() => {
            setProgress(state => {
                return state < 100 ? state + 1 : 0
            })

        }, 1000 / (100 / sekund))


    }, [])
    // 



    return (
        <div className={cls.JurnalCard}>
            <div className={cls.JurnalCard__top}>
                <div>
                    <div className={cls.JurnalCard__img}>
                        <div ref={img1} className={cls.JurnalCard__img2}>
                            <Image src={'/images/jurnal1.svg'} width={200} height={282} />
                        </div>
                        <div ref={img2} className={cls.JurnalCard__img1}>
                            <Image src={'/images/jurnal2svgsvg.svg'} width={200} height={282} />
                        </div>
                    </div>
                    <Progress_bar bgcolor="#F35034" progress={progress} height={1} />
                    <h3 className={cls.JurnalCard__text}>Выпуск: 10.01.2023</h3>
                </div>
                <div className={cls.JurnalCard__icons}>
                    <div >
                        {RightIcon()}
                    </div>
                    <div>
                        {NetIcon()}
                    </div>
                    <div>
                        {DownloadIcon2()}
                    </div>
                </div>
            </div>

        </div>
    )
}
