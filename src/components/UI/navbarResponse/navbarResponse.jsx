import React, { useEffect, useRef } from 'react'
import cls from './navbarResponse.module.scss'
import { PersonIcon2, GlobusIcon2 } from '../icons';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import { navlinks } from './data';
import { useRouter } from 'next/router';
import NavLink from '../NavLink';

export default function NavbarResponse() {
    const x = useRef()
    const iconRef = useRef()
    const router = useRouter()
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
                    <li>Русский</li>
                    <li>Ўзбекча</li>
                    <li>O'zbekcha</li>
                    <li>English</li>
                </ul>
            </div>
            <PersonIcon2 />

            <ul ref={modal} className={cls.madalopen}>
                {
                    navlinks?.length > 0 && navlinks.map((options) => (
                        <li key={options.id} className={cls.madalopen_item}>
                            <NavLink
                                {...options}
                                isActive={router.asPath.split('/')?.slice(0, 3)?.join('/') === options.link}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
