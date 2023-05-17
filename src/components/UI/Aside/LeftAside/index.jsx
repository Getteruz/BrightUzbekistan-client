import { categoryColor } from 'constants/category';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NavLink from '../../NavLink';
import { projectLinks } from './data';
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
            <nav style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1}}>
                <ul className={cls.aside__links}>
                    <li>
                        <NavLink
                            link='/'
                            label={t("Главная")}
                            isActive={router.asPath.split('/')?.slice(0, 3)?.join('/') === '/'}
                        />
                    </li>
                    <li>
                        <NavLink
                            link='/last-news'
                            label={t("Последние новости")}
                            isActive={router.asPath.split('/')?.slice(0, 3)?.join('/').includes('/last-news')}
                        // activeColor='rgba(0, 175, 255, 1)'
                        />
                    </li>
                    {
                        categories?.length > 0 && categories.map((ctg) => (
                            <li key={ctg.id}>
                                <NavLink
                                    link={`/category/${ctg.id}`}
                                    label={ctg?.[router.locale]}
                                    isActive={router.asPath.split('/')?.slice(0, 3)?.join('/') == `/category/${ctg.id}`}
                                // activeColor={categoryColor?.[ctg.id]}
                                />
                            </li>
                        ))
                    }
                    <li>
                        <NavLink
                            link='/journal'
                            label={t("Журнал")}
                            isActive={router.asPath.split('/')?.slice(0, 3)?.join('/').includes('/journal')}
                        />
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
                                    isActive={router.asPath.split('/')?.slice(0, 3)?.join('/').includes(link.link)}
                                    // activeColor={link.activeColor}
                                    light
                                />
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </aside>
    );
}

export default Aside;
