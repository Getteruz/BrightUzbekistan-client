import React from 'react'
import cls from './test.module.scss'
export default function Test() {
    return (
        <div className={cls.btn}>
            <div className={cls.btn__wrap}>

                <div className={cls.btn__boll}></div>
                <div className={cls.btn__boll3}></div>
            </div>
            <p className={cls.btn__title}>Сайт находится в тестовом режиме</p>
        </div>
    )
}
