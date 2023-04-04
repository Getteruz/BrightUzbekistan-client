
import GoToBack from 'components/UI/GoToBack'
import { FacebookIcon, InstagramIcon, TwitterIcon } from 'components/UI/icons'
import LayoutChildWrapper from 'components/UI/LayoutChildWrapper'
import NavbarResponse from 'components/UI/navbarResponse/navbarResponse'
import Rate from 'components/UI/Rate'
import { useGetWindowWidth } from 'hooks/useGetWindowWith'
import React from 'react'
import cls from './ContactUs.module.scss'

export default function ContactUs() {
    const windowWidth = useGetWindowWidth()
    return (
        <LayoutChildWrapper >

            {windowWidth < 501 && <Rate />}
            {windowWidth < 501 && <NavbarResponse />}

            <GoToBack title='Связаться с нами' />
            <main className={cls.Contact}>
                <h2 className={cls.Contact__title}>Связаться с нами</h2>
                <p className={cls.Contact__text}>ООО “Bright Uzbekistan”  — You may be disappointed if you fail, but you are doomed if you don't try. If you keep moving in the right direction you'll get your dream or something better.</p>
                <div className={cls.Contact__wrap}>
                    <div className={cls.Contact__box}>
                        <p className={cls.Contact__box__text}>Наше телефон:</p>
                        <div className={cls.Contact__box__text2}>
                            <p> +998 90 000 77 11</p>
                            <p>  +998 90 000 77 11</p>
                        </div>
                    </div>
                    <div className={cls.Contact__box}>
                        <p className={cls.Contact__box__text}>E-mail</p>
                        <p className={cls.Contact__box__text2}>info@gmail.com</p>

                    </div>
                    <div className={cls.Contact__box}>
                        <p className={cls.Contact__box__text}>Социальные сети</p>
                        <div className={cls.Contact__box__text2}>
                            <span> {
                                FacebookIcon()

                            }
                            </span>
                            <span> {
                                InstagramIcon()
                            }</span>
                            <span> {
                                TwitterIcon()
                            }</span>
                        </div>
                    </div>
                    <div className={cls.Contact__box}>
                        <p className={cls.Contact__box__text}>Адресс:</p>
                        <p className={cls.Contact__box__text2}>O'zbekiston, Toshkent, Mustaqillik shoh ko'chasi, 59A</p>
                    </div>
                </div>

            </main>
        </LayoutChildWrapper >
    )
}
