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
            <span className={cls.aside__city}>ТАШКЕНТ 2023</span>

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
                {
                    categories?.length > 0 && categories.map(ctg => (
                        <li key={ctg.id}>
                            <NavLink
                                link={`/category/${ctg.id}`}
                                label={ctg?.[router?.locale]}
                                isActive={router.asPath.split('/')?.slice(0, 3)?.join('/') === `/category/${ctg.id}`}
                            />
                        </li>
                    ))
                }
                {/* <li>
                    <NavLink
                        link='/category/audio-news'
                        label='Аудио новости'
                        isActive={router.asPath.split('/')?.slice(0, 3)?.join('/') === '/category/audio-news'}
                    />
                </li> */}
                <li>
                    <NavLink
                        link='/journal/2'
                        label='Журналы'
                        isActive={router.asPath.split('/')?.slice(0, 3)?.join('/') === '/journal/2'}
                    />
                </li>
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
        </aside>
    );
}

export default Aside;
