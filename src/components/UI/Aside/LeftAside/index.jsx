import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NavLink from '../../NavLink';
import { navlinks, projectLinks } from './data';
import cls from './LeftAside.module.scss'

const Aside = ({ categories = [] }) => {
    const router = useRouter()

    return (
        <aside className={cls.aside} id='leftAside'>
            <span className={cls.aside__city}>ТАШКЕНТ 2022</span>

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
            <div className={cls.aside__btns}>
                <ul className={cls.aside__links}>
                    {
                        categories?.length > 0 && categories.map((options) => (
                            <li key={options.id}>
                                <NavLink
                                    label={options.label}
                                    link={`/category/${options.id}`}
                                    isActive={router.asPath.split('/')?.slice(0, 3)?.join('/') === options.id}
                                />
                            </li>
                        ))
                    }
                </ul>

                <ul
                    className={cls.aside__links}
                    style={{ flexGrow: 0 }}
                >
                    {
                        projectLinks?.length > 0 && projectLinks.map((options) => (
                            <li key={options.id}>
                                <NavLink
                                    {...options}
                                    isActive={router.asPath.split('/')?.slice(0, 3)?.join('/') === options.link}
                                />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </aside>
    );
}

export default Aside;
