import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NavLink from '../../NavLink';
import { navlinks, projectLinks } from './data';
import cls from './LeftAside.module.scss'

const Aside = ({ categories = [] }) => {
    const router = useRouter()
    const { t } = useTranslation()

    return (
        <aside className={cls.aside} id='leftAside'>
            <span className={cls.aside__city}>{t('ТАШКЕНТ')} 2023</span>

            <Link href='/'>
                <div className={cls.aside__logo}>
                    <Image
                        src='/svg/logo.svg'
                        layout='fill'
                        objectFit='cover'
                        alt='Bright Uzbekistan logo'
                        priority='hight'
                    />
                </div>
            </Link>

            <ul className={cls.aside__links}>
                <li>
                    <NavLink link='' label={t("Главная")} />
                </li>
                {
                    categories?.length > 0 && categories.map((ctg) => (
                        <li key={ctg.id}>
                            <NavLink
                                link={ctg.id}
                                label={ctg.ru}
                                isActive={router.asPath.split('/')?.slice(0, 3)?.join('/') === ctg.ru}
                            />
                        </li>
                    ))
                }
                <li>
                    <NavLink link='' label={t("Журнал")} />
                </li>
            </ul>

            <ul
                className={cls.aside__links}
                style={{ flexGrow: 0 }}
            >
                {
                    projectLinks?.length > 0 && projectLinks.map(link => (
                        <li key={link.id}>
                            <NavLink
                                link={link.link}
                                label={t(link.label)}
                                isActive={router.asPath.split('/')?.slice(0, 3)?.join('/') === link.link}
                                light
                            />
                        </li>
                    ))
                }
            </ul>
        </aside>
    );
}

export default Aside;
