
import GoToBack from 'components/UI/GoToBack'
import { FacebookIcon, InstagramIcon, TwitterIcon } from 'components/UI/icons'
import LayoutChildWrapper from 'components/UI/LayoutChildWrapper'
import Map from 'components/UI/Map'
import NavbarResponse from 'components/UI/navbarResponse/navbarResponse'
import Rate from 'components/UI/Rate'
import { useGetWindowWidth } from 'hooks/useGetWindowWith'
import Link from 'next/link'
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
                        <p className={cls.Contact__box__text2}> <Link href={"tel:998900110000"}> +998 90 011 00 00</Link></p>

                    </div>
                    <div className={cls.Contact__box}>
                        <p className={cls.Contact__box__text}>Коммерческий отдел:</p>
                        <p className={cls.Contact__box__text2}><Link href={"tel:998900001155"}>+998 90 000 11 55</Link></p>

                    </div>
                    <div className={cls.Contact__box}>
                        <p className={cls.Contact__box__text}>Социальные сети</p>
                        <div className={cls.Contact__box__text2}>
                            <span>
                                <Link href={'/'}>
                                    {
                                        FacebookIcon()
                                    }
                                </Link>

                            </span>
                            <span> {
                                <Link href={'/'}>
                                    {
                                        InstagramIcon()
                                    }
                                </Link>
                            }</span>
                            <span> {
                                <Link href={'/'}>
                                    {
                                        TwitterIcon()
                                    }
                                </Link>
                            }</span>
                        </div>
                    </div>
                    <div className={cls.Contact__box}>
                        <p className={cls.Contact__box__text}>Адресс:</p>
                        <p className={cls.Contact__box__text2}>O'zbekiston, Toshkent, Mustaqillik shoh ko'chasi, 59A</p>
                    </div>
                    <div className={cls.Contact__box}>
                        <p className={cls.Contact__box__text}>Электронная почта:</p>
                        <p className={cls.Contact__box__text3}>Письма в редакцию, пресс-релизы, жалобы, сообщения об ошибках просьба направлять по адресу:</p>
                        <p className={cls.Contact__box__email}> <Link href={"mailto:info@buzb.uz"}> info@buzb.uz</Link></p>
                    </div>
                    <Map />
                </div>

            </main>
        </LayoutChildWrapper >
    )
}
