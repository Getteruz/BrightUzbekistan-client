import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NavLink from '../NavLink';

import { navlinks, projectLinks } from './data';
import cls from './Aside.module.scss'

const Aside = () => {
    const router = useRouter()

    return (
        <aside className={cls.aside} id='leftAside'>
            <span className={cls.aside__city}>ТАШКЕНТ 2022</span>

            <Link href='/'>
                <div className={cls.aside__logo}>
                    <Image
                        src='/logo.svg'
                        layout='fill'
                        objectFit='cover'
                        alt='Bright Uzbekistan logo'
                        priority='hight'
                    />
                </div>
            </Link>

            <ul className={cls.aside__links}>
                {
                    navlinks?.length > 0 && navlinks.map((options) => (
                        <NavLink
                            key={options.id}
                            {...options}
                            isActive={'/' + router.pathname.split('/')?.[1] === options.link}
                        />
                    ))
                }
            </ul>

            <ul
                className={cls.aside__links}
                style={{ flexGrow: 0 }}
            >
                {
                    projectLinks?.length > 0 && projectLinks.map((options) => (
                        <NavLink
                            key={options.id}
                            {...options}
                            isActive={'/' + router.pathname.split('/')?.[1] === options.link}
                        />
                    ))
                }
            </ul>
        </aside>
    );
}

export default Aside;
