import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { GlassesIcon, GlobusIcon, PersonIcon } from '../icons';

import Button from './Button';
import cls from './Navbar.module.scss'

const Navbar = () => {
    const router = useRouter()
    const changeLocale = (locale) => {
        router.push({
            route: router.pathname,
            query: router.query
        }, router.asPath, { locale });
    }
    const x = useRef()
    const iconRef = useRef()
    useEffect(() => {
        const handleClick = (e) => {
            if (!x.current.contains(e.target) && !iconRef.current.contains(e.target)) {
                x.current.classList.remove(cls.openmadal)
            }
            else if (x.current === e.target) {
                x.current.classList.add(cls.openmadal)
            }

        }
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick)
    }, [])
    return (
        <nav className={cls.navbar}>
            <ul className={cls.navbar__list}>
                <li onClick={() => document.body.classList.toggle('gradient')}>
                    <Button
                        label='для слабовидящих'
                        icon={GlassesIcon}
                    />
                </li>
                <li ref={iconRef} className={cls.navbar__langugeitem} onClick={() => x.current.classList.add(cls.openmadal)}>
                    <Button
                        label='Русский'
                        icon={GlobusIcon}
                    />
                    <ul ref={x} className={cls.navbar__langugewrap}>
                        <li onClick={() => changeLocale('ru')}>Русский</li>
                        <li onClick={() => changeLocale('уз')}>Ўзбекча</li>
                        <li onClick={() => changeLocale('uz')}>O'zbekcha</li>
                        <li onClick={() => changeLocale('en')}>English</li>
                    </ul>
                </li>
                <li>
                    <Button
                        label='kabinet'
                        icon={PersonIcon}
                    />
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
