import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useQueryClient } from 'react-query';
import { CloseNavbarIcon, MobileGlobusIcon } from '../icons';
import cls from './Mobile.module.scss'
import { useEffect, useState } from 'react';
import { setCookie } from 'nookies';

const MobileNavbar = () => {
    const router = useRouter()
    const { t } = useTranslation()
    const queryClient = useQueryClient()
    const [isOpen, setIsOpen] = useState()
    const [openModal, setIsOpenModal] = useState()
    const categories = queryClient.getQueryData('categories') || []

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (isOpen) {
                document.body.style.overflowY = 'hidden'
            } else {
                document.body.style.overflowY = 'auto'
            }
        }
    }, [isOpen])

    useEffect(() => {
        setIsOpen(state => state === true ? false : null)
    }, [router?.asPath])

    const changeLocale = (locale) => {
        setCookie(null, 'locale', locale, {
            path: '/',
            maxAge: 30 * 24 * 60 * 60
        })
        router.push({
            route: router.pathname,
            query: router.query
        }, router.asPath, { locale });
    }

    return (
        <div className={cls.nav}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div className={cls.close__icon} onClick={() => setIsOpen(true)}>
                    <CloseNavbarIcon />
                </div>
                <div className={cls.nav__logo}>
                    <Image
                        src='/svg/MobileLogo.svg'
                        layout='fill'
                        objectFit='cover'
                        alt='Bright Uzbekistan logo'
                    />
                </div>
            </div>
            <div className={cls.nav__lang} onClick={() => setIsOpenModal(state => !state)}>
                <MobileGlobusIcon />
                {router.locale}
                <ul className={`${cls.nav__langugewrap} ${openModal ? cls.open__modal : ""}`}>
                    <li className={router.locale === 'uz' ? cls.active : ""} onClick={() => changeLocale('uz')}>O'zbekcha</li>
                    {/* <li className={router.locale === 'уз' ? cls.active: ""} onClick={() => changeLocale('уз')}>Ўзбекча</li> */}
                    <li className={router.locale === 'ru' ? cls.active : ""} onClick={() => changeLocale('ru')}>Русский</li>
                    <li className={router.locale === 'en' ? cls.active : ""} onClick={() => changeLocale('en')}>English</li>
                </ul>
            </div>

            <div className={`${cls.nav__sidebar} ${isOpen === true ? cls.openSidebar : ''} ${isOpen === false ? cls.closeSidebar : ''}`}>
                <div className={cls.nav__sidebar__nav}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <div className={isOpen ? cls.open : ''} onClick={() => setIsOpen(false)}>
                            <CloseNavbarIcon />
                        </div>
                        <div className={cls.nav__sidebar__logo}>
                            <Image
                                src='/svg/MobileGreenLogo.svg'
                                layout='fill'
                                objectFit='cover'
                                alt='Bright Uzbekistan Logo'
                            />
                        </div>
                    </div>
                    <div className={cls.nav__sidebar__btn} onClick={() => setIsOpenModal(state => !state)}>
                        <MobileGlobusIcon />
                        {router.locale}
                        <ul className={`${cls.nav__langugewrap} ${openModal ? cls.open__modal : ""}`}>
                            <li className={router.locale === 'uz' ? cls.active : ""} onClick={() => changeLocale('uz')}>O'zbekcha</li>
                            {/* <li className={router.locale === 'уз' ? cls.active: ""} onClick={() => changeLocale('уз')}>Ўзбекча</li> */}
                            <li className={router.locale === 'ru' ? cls.active : ""} onClick={() => changeLocale('ru')}>Русский</li>
                            <li className={router.locale === 'en' ? cls.active : ""} onClick={() => changeLocale('en')}>English</li>
                        </ul>
                    </div>
                </div>
                <div className={cls.nav__sidebar__categories}>
                    <Link href={'/'}>
                        <a>{t('Главная')}</a>
                    </Link>
                    <Link href={'/last-news'}>
                        <a>{t('Последние новости')}</a>
                    </Link>
                    {
                        categories?.length > 0 && categories.map(ctg => (
                            <Link href={'/'} key={ctg.id}>
                                <a>{ctg?.[router?.locale]}</a>
                            </Link>
                        ))
                    }
                    <Link href={'/journal'}>
                        <a>{t('Журнал')}</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MobileNavbar;
