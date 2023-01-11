import { GlassesIcon, GlobusIcon, PersonIcon } from '../icons';
import Button from './Button';
import cls from './Navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={cls.navbar}>
            <ul className={cls.navbar__list}>
                <li>
                    <Button
                        label='для слабовидящих'
                        icon={GlassesIcon}
                    />
                </li>
                <li>
                    <Button 
                        label='Русский'
                        icon={GlobusIcon}
                    />
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
