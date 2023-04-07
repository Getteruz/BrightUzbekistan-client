import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NavLink from '../../NavLink';
import { navlinks, projectLinks } from './data';
import ru from '../../../../lang/ru.json'
import uz from '../../../../lang/uz.json'
import уз from '../../../../lang/уз.json'
import en from '../../../../lang/en.json'
import cls from './LeftAside.module.scss'

const Aside = ({ categories = [] }) => {
    const router = useRouter()
    const langData = {
        uz,
        ru,
        уз,
        en
    }

    return (
        <aside className={cls.aside} id='leftAside'>
            <span className={cls.aside__city}>{langData[router.locale]?.city} 2023</span>

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
                        label={projectLinks[router.locale]?.[2]?.label}
                        isActive={router.asPath.split('/')?.slice(0, 3)?.join('/') === '/journal'}
                    />
                </li>
            </ul>

            <ul
                className={cls.aside__links}
                style={{ flexGrow: 0 }}
            >
                {
                    projectLinks[router.locale]?.length > 0 && projectLinks[router.locale].map((options, index) => {
                        if(index !== 2) return <li key={options.id}>
                            <NavLink
                                {...options}
                                isActive={router.asPath.split('/')?.slice(0, 3)?.join('/') === options.link}
                            />
                        </li>
                    })
                }
            </ul>
        </aside>
    );
}

export default Aside;
