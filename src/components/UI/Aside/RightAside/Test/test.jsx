import { useRouter } from 'next/router'
import React from 'react'
import cls from './test.module.scss'
import ru from '../../../../../lang/ru.json'
import uz from '../../../../../lang/uz.json'
import уз from '../../../../../lang/уз.json'
import en from '../../../../../lang/en.json'
export default function Test() {
    const langData = {
        uz,
        уз,
        ru,
        en
    }

    const router = useRouter()
    return (
        <div className={cls.btn}>
            <div className={cls.btn__wrap}>

                <div className={cls.btn__boll}></div>
                <div className={cls.btn__boll3}></div>
            </div>
            <p className={cls.btn__title}>{langData[router.locale].test}</p>
        </div>
    )
}
