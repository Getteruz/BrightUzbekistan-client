import React from 'react'
import Link from "next/link";
import cls from './NavLink.module.scss'

const NavLink = ({ 
    link = '', 
    label = '', 
    light = false, 
    isActive = false,
    activeColor = 'rgba(0, 26, 255, 1)',
    icon, 
    ariaLabel = ''
}) => {
    return (
        <Link href={link}>
            <a 
                className={`${cls.link} ${light ? cls.light__link : ''}`}
                style={isActive ? {color: activeColor} : {}}
                aria-label={ariaLabel || label}
            >
            {typeof icon === 'function' ? icon() : label}
            </a>
        </Link>
    );
}

export default React.memo(NavLink);
