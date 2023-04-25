import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import GoToBack from 'components/UI/GoToBack'
import LayoutChildWrapper from 'components/UI/LayoutChildWrapper'
import Map from 'components/UI/Map'
import { socialMedias } from './data'
import cls from './ContactUs.module.scss'

export default function ContactUs() {
    const { t } = useTranslation('contact')

    return (
        <LayoutChildWrapper >
            <GoToBack title={t('Связаться с нами') || ''} />
            <main className={cls.Contact}>
                <h2 className={cls.Contact__title}>{t('Связаться с нами') || ''}</h2>
                <p className={cls.Contact__text}>{t('ООО “Bright Uzbekistan”  — You may be disappointed if you fail, but you are doomed if you don\'t try. If you keep moving in the right direction you\'ll get your dream or something better.') || ''}</p>
                <div className={cls.Contact__wrap}>
                    <div className={cls.Contact__box}>
                        <p className={cls.Contact__box__text}>{t('Наше телефон:') || ''}</p>
                        <p className={cls.Contact__box__text2}> <Link href={"tel:998900110000"}> +998 90 011 00 00</Link></p>
                    </div>
                    <div className={cls.Contact__box}>
                        <p className={cls.Contact__box__text}>{t('Коммерческий отдел:') || ''}</p>
                        <p className={cls.Contact__box__text2}><Link href={"tel:998900001155"}>+998 90 000 11 55</Link></p>

                    </div>
                    <div className={cls.Contact__box}>
                        <p className={cls.Contact__box__text}>{t('Социальные сети') || ''}</p>
                        <div className={cls.Contact__box__text2}>
                            {
                                socialMedias?.length > 0 && socialMedias.map(contact => (
                                    <span key={contact.id}>
                                        <Link href={contact.link} passHref>
                                            <a target="_blank" rel="noreferrer">{contact.icon}</a>
                                        </Link>
                                    </span>
                                ))
                            }
                        </div>
                    </div>
                    <div className={cls.Contact__box}>
                        <p className={cls.Contact__box__text}>{t('Адресс') || ''}</p>
                        <p className={cls.Contact__box__text2}>
                            <Link href={"https://goo.gl/maps/HJZLLLshWigYFNhE6"} passHref>
                                <a target="_blank" rel="noopener noreferrer">
                                    {t("O'zbekiston, Toshkent, Mustaqillik shoh ko'chasi, 59A") || ''}
                                </a>
                            </Link>
                        </p>
                    </div>
                    <div className={cls.Contact__box} style={{width:'100%'}}>
                        <p className={cls.Contact__box__text}>{t('Электронная почта:') || ''}</p>
                        <p className={cls.Contact__box__text3}>{t('Письма в редакцию, пресс-релизы, жалобы, сообщения об ошибках просьба направлять по адресу:') || ''}</p>
                        <p className={cls.Contact__box__email}>
                            <Link href={"mailto:info@buzb.uz"} passHref>
                                <a target="_blank" rel="noopener noreferrer">info@buzb.uz</a>
                            </Link>
                        </p>
                    </div>
                    <div className={cls.Contact__map}>
                        <Map />
                    </div>
                </div>

            </main>
        </LayoutChildWrapper >
    )
}