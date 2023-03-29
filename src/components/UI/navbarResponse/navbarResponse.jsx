import React, { useRef } from 'react'
import cls from './navbarResponse.module.scss'
import { PersonIcon2, GlobusIcon2 } from '../icons';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import { navlinks } from './data';
import { useRouter } from 'next/router';

export default function NavbarResponse() {
    // const router = useRouter()
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


            <div className={cls.navbarResponse_btn}>
                <Button
                    label='Ру'
                    icon={GlobusIcon2}
                />
            </div>
            <PersonIcon2 />

            <ul ref={modal} className={cls.madalopen}>
                {
                    navlinks?.length > 0 && navlinks.map((options) => (
                        <li key={options.id} className={cls.madalopen_item}>
                            {/* <Link to={options.link}>{options.label}</Link> */}
                            {options.label}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
