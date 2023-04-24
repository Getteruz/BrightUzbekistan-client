import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import { useState } from 'react';
import { GlassesIcon, GlobusIcon, PersonIcon } from '../icons';
import Button from './Button';
import cls from './Navbar.module.scss'

const Navbar = () => {
    const router = useRouter()
    const [openModal, setIsOpenModal] = useState(false)
    const { t } = useTranslation()

    const changeLocale = (locale) => {
        setCookie(null, 'locale', locale, {
            path: '/',
        })
        router.push({
            route: router.pathname,
            query: router.query
        }, router.asPath, { locale });
    }


    return (
        <nav className={cls.navbar}>
            <ul className={cls.navbar__list}>
                <li>
                    <Button
                        label={t('ДЛЯ СЛАБОВИДЯЩИХ')}
                        icon={GlassesIcon}
                    />
                </li>
                <li className={cls.navbar__langugeitem} onClick={() => setIsOpenModal(state => !state)}>
                    <Button 
                        label={t('ЯЗЫК')}
                        icon={GlobusIcon}
                    />
                    <ul className={`${cls.navbar__langugewrap} ${openModal ? cls.open__modal : ""}`}>
                        <li className={router.locale === 'uz' ? cls.active: ""} onClick={() => changeLocale('uz')}>O'zbekcha</li>
                        <li className={router.locale === 'уз' ? cls.active: ""} onClick={() => changeLocale('уз')}>Ўзбекча</li>
                        <li className={router.locale === 'ru' ? cls.active: ""} onClick={() => changeLocale('ru')}>Русский</li>
                        <li className={router.locale === 'en' ? cls.active: ""} onClick={() => changeLocale('en')}>English</li>
                    </ul>
                </li>
                <li>
                    <Button 
                        label={t('КАБИНЕТ')}
                        icon={PersonIcon}
                    />
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
