import useGetWindowWidth from 'hooks/useGetWindowWidth';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import { useState } from 'react';
import { useQueryClient } from 'react-query';
import { GlassesIcon, GlobusIcon, PersonIcon } from '../icons';
import Button from './Button';
import cls from './Navbar.module.scss'

const Navbar = () => {
    const router = useRouter()
    const { t } = useTranslation()
    const queryClient = useQueryClient()
    const windowWidth = useGetWindowWidth()
    const [openModal, setIsOpenModal] = useState(false)

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
            }, `/news/${news?.[locale]?.shortLink || news?.id}`, { locale, replace: true })
        } else {
            router.push({
                route: router.pathname,
                query: router.query
            }, router.asPath, { locale });
        }
    }

    return (
        <nav className={cls.navbar}>
            <ul className={cls.navbar__list}>
                {windowWidth < 670 && (
                    <li>
                        <Button
                            label={`${t('ТАШКЕНТ')} 2023`}
                        />
                    </li>
                )}
                <li>
                    <Button
                        label={t('ПОСЛЕДНИЕ НОВОСТИ')}
                        // icon={GlassesIcon}
                        onClick={() => router.push('/last-news')}
                    />
                </li>
                {windowWidth > 670 && (
                    <>
                        <li className={cls.navbar__langugeitem} onClick={() => setIsOpenModal(state => !state)}>
                            <Button
                                label={t('ЯЗЫК')}
                                icon={GlobusIcon}
                            />
                            <ul className={`${cls.navbar__langugewrap} ${openModal ? cls.open__modal : ""}`}>
                                <li className={router.locale === 'uz' ? cls.active : ""} onClick={() => changeLocale('uz')}>O'zbekcha</li>
                                {/* <li className={router.locale === 'уз' ? cls.active: ""} onClick={() => changeLocale('уз')}>Ўзбекча</li> */}
                                <li className={router.locale === 'ru' ? cls.active : ""} onClick={() => changeLocale('ru')}>Русский</li>
                                <li className={router.locale === 'en' ? cls.active : ""} onClick={() => changeLocale('en')}>English</li>
                            </ul>
                        </li>
                        {/* <li>
                            <Button
                                label={t('КАБИНЕТ')}
                                icon={PersonIcon}
                            />
                        </li> */}
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
