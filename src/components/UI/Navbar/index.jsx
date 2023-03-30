import { useEffect, useRef } from 'react';
import { GlassesIcon, GlobusIcon, PersonIcon } from '../icons';
import Button from './Button';
import cls from './Navbar.module.scss'

const Navbar = () => {
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
                        <li>Русский</li>
                        <li>Ўзбекча</li>
                        <li>O'zbekcha</li>
                        <li>English</li>
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
