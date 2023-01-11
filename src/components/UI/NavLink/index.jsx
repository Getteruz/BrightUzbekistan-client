import React from 'react'
import Link from "next/link";
import cls from './NavLink.module.scss'

const NavLink = ({ 
    link = '', 
    label = '', 
    light = false, 
    isActive = false,
    activeColor = '',
    icon
}) => {
    return (
        <Link
            href={link}
            className={`${cls.link} ${light ? cls.light__link : ''} ${isActive ? cls.active : ''}`}
            style={activeColor ? {color: activeColor} : {}}
        >
            {typeof icon === 'function' ? icon() : label}
        </Link>
    );
}

export default React.memo(NavLink);
