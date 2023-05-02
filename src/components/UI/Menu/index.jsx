import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { menu } from './data';
import cls from './Menu.module.scss'

const Menu = () => {
    const [isOpen, setIsOpen] = useState(true)
    const prevScrollPosition = useRef(0)

    useEffect(() => {
        const handleScroll = (e) => {
            if (window.scrollY < prevScrollPosition.current || window.scrollY === window.scrollHeight) {
                setIsOpen(true)
            } else {
                setIsOpen(false)
            }

            prevScrollPosition.current = window.scrollY;
        }

        typeof window !== 'undefined' && window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={`${cls.menu} ${isOpen ? cls.open : cls.close}`}>
            <div>
                {
                    menu?.length > 0 && menu.map(menu => (
                        <Link href={menu?.link} key={menu.id}>
                            <a className={cls.menu__link}>
                                {menu?.icon}
                            </a>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

export default Menu;
