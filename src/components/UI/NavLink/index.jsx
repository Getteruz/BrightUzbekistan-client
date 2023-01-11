import React from 'react'
import Link from "next/link";
import cls from './NavLink.module.scss'

const NavLink = ({ 
    link = '', 
    label = '', 
    light = false, 
    isActive = false,
    activeColor = '',
    icon, 
    ariaLabel = ''
}) => {
    return (
        <Link href={link}>
            <a 
                className={`${cls.link} ${light ? cls.light__link : ''} ${isActive ? cls.active : ''}`}
                style={activeColor ? {color: activeColor} : {}}
                aria-label={ariaLabel || label}
            >
            {typeof icon === 'function' ? icon() : label}
            </a>
        </Link>
    );
}

export default React.memo(NavLink);
