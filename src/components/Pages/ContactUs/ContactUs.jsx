
import GoToBack from 'components/UI/GoToBack'
import { FacebookcolorIcon, TelgramcolorIcon, TiwitercolorIcon, YoutobeIcon } from 'components/UI/icons'
import LayoutChildWrapper from 'components/UI/LayoutChildWrapper'
import Map from 'components/UI/Map'
import NavbarResponse from 'components/UI/navbarResponse/navbarResponse'
import Rate from 'components/UI/Rate'
import { useGetWindowWidth } from 'hooks/useGetWindowWith'
import Link from 'next/link'
import cls from './ContactUs.module.scss'
import ru from '../../../lang/ru.json'
import uz from '../../../lang/uz.json'
import уз from '../../../lang/уз.json'
import en from '../../../lang/en.json'
import { useRouter } from 'next/router'
import { InstagramcolorIcon } from 'components/UI/instagram'
export default function ContactUs() {
    const windowWidth = useGetWindowWidth()
    const router = useRouter()
    const langData = {
        uz,
        ru,
        уз,
        en
    }
    return (
        <LayoutChildWrapper >

            {windowWidth < 501 && <Rate />}
            {windowWidth < 501 && <NavbarResponse />}

            <GoToBack title={langData[router.locale]?.Contact} />
            <main className={cls.Contact}>
                <h2 className={cls.Contact__title}>{langData[router.locale]?.Contact}</h2>
                <p className={cls.Contact__text}>ООО “Bright Uzbekistan”  — {langData[router.locale]?.ContactText}</p>
                <div className={cls.Contact__wrap}>
                    <div className={cls.Contact__box}>
                        <p className={cls.Contact__box__text}>{langData[router.locale]?.Commercial}:</p>
                        <p className={cls.Contact__box__text2}> <Link href={"tel:998900110000"}> +998 90 011 00 00</Link></p>

                    </div>
                    <div className={cls.Contact__box}>
                        <p className={cls.Contact__box__text}>{langData[router.locale]?.Commercial}:</p>
                        <p className={cls.Contact__box__text2}><Link href={"tel:998900001155"}>+998 90 000 11 55</Link></p>

                    </div>
                    <div className={cls.Contact__box}>
                        <p className={cls.Contact__box__text}>{langData[router.locale]?.Social}</p>
                        <div className={cls.Contact__box__text2}>
                            <span>
                                <Link href={'https://www.facebook.com/bright.uzbekistan'}>

                                    <a target="_blank"> <FacebookcolorIcon /></a>
                                </Link>

                            </span>
                            <span> {
                                <Link href={'https://www.instagram.com/bright_uzbekistan/'}>

                                    <a target="_blank"> <InstagramcolorIcon /></a>

                                </Link>
                            }</span>
                            <span> {
                                <Link href={'https://t.me/bright_uzbekistan'}>
                                    <a target="_blank"> <TelgramcolorIcon /></a>
                                </Link>
                            }</span>
                            <span> {
                                <Link href={'https://twitter.com/brightuzb'}>
                                    <a target="_blank"> <TiwitercolorIcon /></a>
                                </Link>
                            }</span>
                            <span> {
                                <Link href={'https://www.youtube.com/channel/UCqKubJUkz9N36NhO92Pq7-g'}>
                                    <a target="_blank"> <YoutobeIcon /></a>
                                </Link>
                            }</span>
                        </div>
                    </div>
                    <div className={cls.Contact__box}>
                        <p className={cls.Contact__box__text}>{langData[router.locale]?.Address}:</p>
                        <p className={cls.Contact__box__text2}>{langData[router.locale]?.AddressText}</p>
                    </div>
                    <div className={cls.Contact__box}>
                        <p className={cls.Contact__box__text}>{langData[router.locale]?.email}:</p>
                        <p className={cls.Contact__box__text3}>{langData[router.locale]?.emailText}:</p>
                        <p className={cls.Contact__box__email}> <Link href={"mailto:info@buzb.uz"}> info@buzb.uz</Link></p>
                    </div>
                    <Map />
                </div>

            </main>
        </LayoutChildWrapper >
    )
}
