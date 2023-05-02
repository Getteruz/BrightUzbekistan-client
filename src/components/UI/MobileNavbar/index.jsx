import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useQueryClient } from 'react-query';
import { BurgerLineIcon, CloseNavbarIcon, MobileGlobusIcon } from '../icons';
import cls from './Mobile.module.scss'
import { useEffect, useState } from 'react';
import { setCookie } from 'nookies';
import { categoryColor } from 'constants/category';

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
        if (router.pathname === '/news/[id]') {
            const news = queryClient.getQueryData(['news', router.query.id])
            router.push({
                route: router.pathname,
                query: router.query
            }, `/news/${news?.[locale]?.shortLink || news?.id}`, { locale })
        } else {
            router.push({
                route: router.pathname,
                query: router.query
            }, router.asPath, { locale });
        }
    }

    return (
        <div className={cls.nav}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div className={`
                    ${cls.icon} 
                    ${isOpen === true ? cls.open : ''} 
                    ${isOpen === true ? cls.open__icon : ''}
                    ${isOpen === false ? cls.close : ''} 
                    ${isOpen === false ? cls.close__icon : ''}
                `}
                    onClick={() => setIsOpen(state => !state)}
                >
                    {/* <BurgerLineIcon /> 
                    */}
                    <span></span>
                    <span></span>
                </div>
                <Link href='/'>
                    <a className={cls.nav__logo}>
                        <Image
                            src='/svg/MobileLogo.svg'
                            layout='fill'
                            objectFit='cover'
                            alt='Bright Uzbekistan logo'
                        />
                    </a>
                </Link>
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
                <div className={cls.nav__sidebar__categories}>
                    <Link href={'/'}>
                        <a
                            style={{
                                [router.asPath.split('/')?.slice(0, 3)?.join('/') === '/' && 'color']: 'rgba(0, 26, 255, 1)'
                            }}
                        >{t('Главная')}</a>
                    </Link>
                    <Link href={'/last-news'}>
                        <a
                            style={{
                                [router.asPath.split('/')?.slice(0, 3)?.join('/').includes('/last-news') && 'color']: 'rgba(0, 175, 255, 1)'
                            }}
                        >{t('Последние новости')}</a>
                    </Link>
                    {
                        categories?.length > 0 && categories.map(ctg => (
                            <Link href={`/category/${ctg.id}`} key={ctg.id}>
                                <a
                                    style={{
                                        [router.asPath.split('/')?.slice(0, 3)?.join('/') === `/category/${ctg.id}` && 'color']: categoryColor?.[ctg.id]
                                    }}
                                >
                                    {ctg?.[router?.locale]}
                                </a>
                            </Link>
                        ))
                    }
                    <Link href={'/journal'}>
                        <a
                            style={{
                                [router.asPath.split('/')?.slice(0, 3)?.join('/').includes('/journal') && 'color']: 'rgba(0, 26, 255, 1)'
                            }}
                        >{t('Журнал')}</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MobileNavbar;
