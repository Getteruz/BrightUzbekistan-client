import GoToBack from 'components/UI/GoToBack'
import LayoutChildWrapper from 'components/UI/LayoutChildWrapper'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import cls from "./JournalById.module.scss"
const data = [
    {
        id: 2,
        img: '/svg/Rectanglesvg.svg'
    },
    {
        id: 1,
        img: '/svg/rentang.svg'
    }
]

export default function JournalById() {
    const router = useRouter()
    const id = router.query.id

    const filter = data.filter(e => e.id == id || 1)

    return (

        <div className={cls.JournalById}>
            <GoToBack title='Мировые новости' />
            <div className={cls.JournalById__top}>
                <Image alt="img" className={cls.JournalById__img} src={filter[0]?.img} height={388} width={295} />
                <div className={cls.JournalById__left}>
                    <h2 className={cls.JournalById__left__title}>Информация о двадцать третьем пленарном заседании Сената Олий Мажлиса Республики Узбекистан﻿</h2>
                    <p className={cls.JournalById__left__text}>If you keep moving in the right direction you'll get your dream or something better.</p>
                    <div className={cls.JournalById__left__btnwrap}>
                        <button className={cls.JournalById__left__btn}><Link href={'/journal'}>Интро</Link></button>
                        <button className={cls.JournalById__left__btn}>Заказать журнал</button>
                    </div>
                </div>
            </div>
            <div className={cls.JournalById__bottom}>

                <h1 className={cls.JournalById__bottom__title}>Jurnalning ushbu nashri bo'yicha qisqacha ma'lumot!</h1>
                <p className={cls.JournalById__bottom__text}>"Bright Uzbekistan" loyihasi O'zbekistonning eksport, import va investitsiya faoliyati, hamkorlarimiz haqida fikr olish, o'z biznesini jahon miqyosida namoyish etish, yangi, uzoq kutilgan shartnomalar tuzish va yetkazib berish geografiyasini kengaytirish uchun ajoyib imkoniyatdir. </p>
                <ul className={cls.JournalById__list}>
                    <li className={cls.JournalById__item}>
                        <span>01</span>
                        Пятизвездочный отель Atlantis с частным песчаным пляжем
                    </li>
                    <li className={cls.JournalById__item}>
                        <span>04</span>
                        Дубае на острове Палм-Джумейра.
                    </li>
                    <li className={cls.JournalById__item}>
                        <span>07</span>
                        Частным песчаным пляжем расположен в Дубае на острове Палм-Джумейра.
                    </li>
                    <li className={cls.JournalById__item}>
                        <span>12</span>
                        Частным песчаным пляжем расположен в Дубае на острове Палм-Джумейра.
                    </li>
                </ul>
            </div>
        </div>
    )
}