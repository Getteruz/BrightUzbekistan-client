import { useTranslation } from 'next-i18next';
import { GlassesIcon, GlobusIcon, PersonIcon } from '../icons';
import Button from './Button';
import cls from './Navbar.module.scss'

const Navbar = () => {
    const { t } = useTranslation()

    return (
        <nav className={cls.navbar}>
            <ul className={cls.navbar__list}>
                <li>
                    <Button
                        label={t('ДЛЯ СЛАБОВИДЯЩИХ')}
                        icon={GlassesIcon}
                    />
                </li>
                <li>
                    <Button 
                        label={t('ЯЗЫК')}
                        icon={GlobusIcon}
                    />
                </li>
                <li>
                    <Button 
                        label={t('КАБИНЕТ')}
                        icon={PersonIcon}
                    />
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
