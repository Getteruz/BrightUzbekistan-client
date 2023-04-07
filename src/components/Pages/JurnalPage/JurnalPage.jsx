import GoToBack from 'components/UI/GoToBack'
import LayoutChildWrapper from 'components/UI/LayoutChildWrapper'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import cls from "./JournalPage.module.scss"
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
export default function JurnalPage() {
    const router = useRouter()
    return (
        <LayoutChildWrapper >
            <GoToBack title='Мировые новости' />
            <div className={cls.JournalById__top} onClick={() => router.push('journal/1')} >
                <Image alt="img" className={cls.JournalById__img} src='/svg/rentang.svg' objectFit='cover' height={388} width={295} />
                <div className={cls.JournalById__left}>
                    <h2 className={cls.JournalById__left__title}>Информация о двадцать третьем пленарном заседании Сената Олий Мажлиса Республики Узбекистан﻿</h2>
                    <p className={cls.JournalById__left__text}>If you keep moving in the right direction you'll get your dream or something better.</p>
                    <div className={cls.JournalById__left__btnwrap}>
                        <button className={cls.JournalById__left__btn}><Link href={'/journal-one'}>Интро</Link></button>
                        <button className={cls.JournalById__left__btn}>Заказать журнал</button>
                    </div>
                </div>
            </div>
            <div className={cls.JournalById__top} onClick={() => router.push('journal/1')}>
                <Image alt="img" className={cls.JournalById__img} src='/svg/Rectanglesvg.svg' objectFit='cover' height={388} width={295} />
                <div className={cls.JournalById__left}>
                    <h2 className={cls.JournalById__left__title}>Информация о двадцать третьем пленарном заседании Сената Олий Мажлиса Республики Узбекистан﻿</h2>
                    <p className={cls.JournalById__left__text}>If you keep moving in the right direction you'll get your dream or something better.</p>
                    <div className={cls.JournalById__left__btnwrap}>
                        <button className={cls.JournalById__left__btn}><Link href={'/journal-one'}>Интро</Link></button>
                        <button className={cls.JournalById__left__btn}>Заказать журнал</button>
                    </div>
                </div>
            </div >

        </LayoutChildWrapper >
    )
}
