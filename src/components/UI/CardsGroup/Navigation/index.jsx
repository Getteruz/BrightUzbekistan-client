import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import cls from './Navigation.module.scss'

const regex = /[0-9](?![^1]*[0-9])/m

const Navigation = ({title = '', label = '', link = '', color = ''}) => {
    const { t } = useTranslation()

    const style = {
        borderColor: color,
        color: color,
        background: color.replace(regex, 0.1)
    }
    
    return (
        <div className={cls.navigation}>
            <div className={cls.navigation__icon}>
                <Image 
                    src='/svg/globus.svg'
                    layout='fill'
                    objectFit='cover'
                    alt='Globus icon'
                />
            </div>
            <div className={cls.navigation__info}>
                <span className={cls.navigation__info__title}>{title}</span>
                <span className={cls.navigation__info__subtitle}>{t('Новости')}</span>
            </div>
            <Link href={link}>
                <a className={cls.navigation__link} style={style}>{label}</a>
            </Link>
        </div>
    );
}

export default Navigation;
