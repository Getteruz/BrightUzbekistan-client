import React, { useEffect, useRef } from 'react'
import cls from './navbarResponse.module.scss'
import { PersonIcon2, GlobusIcon2 } from '../icons';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import { navlinks } from './data';
import { useRouter } from 'next/router';
import NavLink from '../NavLink';

export default function NavbarResponse({ categories }) {
    const x = useRef()
    const iconRef = useRef()
    const router = useRouter()
    const changeLocale = (locale) => {
        router.push({
            route: router.pathname,
            query: router.query
        }, router.asPath, { locale });
    }
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
    const modal = useRef()

    return (
        <div className={cls.navbarResponse}>
            <div className={cls.navbarResponse__burger} onClick={() => modal.current.classList.toggle(cls.open)}>
                <Image
                    src='/svg/burgersvg.svg'
                    layout='fill'
                    objectFit='cover'
                    alt='Bright Uzbekistan logo'
                    priority='hight'
                />
            </div>

            <Link href='/'>
                <div className={cls.navbarResponse__logo}>
                    <Image
                        src='/svg/MaskGroup.svg'
                        layout='fill'
                        objectFit='cover'
                        alt='Bright Uzbekistan logo'
                        priority='hight'

                    />
                </div>
            </Link >


            <div ref={iconRef} className={cls.navbarResponse_btn} onClick={() => x.current.classList.add(cls.openmadal)}>
                <Button
                    label='Ру'
                    icon={GlobusIcon2}
                />
                <ul ref={x} className={cls.navbarResponse__langugewrap}>
                    <li onClick={() => changeLocale('uz')}>O'zbekcha</li>
                    <li onClick={() => changeLocale('уз')}>Ўзбекча</li>
                    <li onClick={() => changeLocale('ru')}>Русский</li>
                    <li onClick={() => changeLocale('en')}>English</li>
                </ul>
            </div>
            <PersonIcon2 />

            <ul ref={modal} className={cls.madalopen}>
                {
                    categories?.length > 0 && categories.map((ctg) => (
                        <li key={ctg.id} className={cls.madalopen_item} >
                            <NavLink
                                link={`/category/${ctg.id}`}
                                label={ctg?.[router?.locale]}
                                isActive={router.asPath.split('/')?.slice(0, 3)?.join('/') === `/category/${ctg.id}`}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
