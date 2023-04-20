import Image from 'next/image';
import AppStore from '../Buttons/AppStore';
import GooglePlay from '../Buttons/GooglePlay';
import Flex from '../Flex';
import NavLink from '../NavLink';

import { contacts, navlinks } from './data';
import cls from './Banner.module.scss'
import { useGetWindowWidth } from 'hooks/useGetWindowWith';
import { useRouter } from 'next/router';
import ru from '../../../lang/ru.json'
import uz from '../../../lang/uz.json'
import уз from '../../../lang/уз.json'
import en from '../../../lang/en.json'
const Banner = () => {
    const langData = {
        uz,
        уз,
        ru,
        en
    }

    const widthwindow = useGetWindowWidth()
    const router = useRouter()
    // console.log(router.locale)
    return (
        <div className={cls.banner}>
            <Flex>
                <div className={cls.banner__block}>
                    <h2 className={cls.banner__title}>{langData[router.locale].Soon}</h2>
                    <p className={cls.banner__text}>{langData[router.locale].Download}!</p>
                    <Flex gap={10} >
                        <span>
                            <GooglePlay />
                        </span>
                        <span>
                            <AppStore />
                        </span>
                    </Flex>
                </div>

                {
                    widthwindow > 500 ? <div style={{ position: 'relative' }}>
                        <div className={cls.banner__image}>
                            <Image
                                src='/svg/MobileApp.svg'
                                layout='fill'
                                objectFit='cover'
                                alt='Bright Uzbekistan Mobile App'
                            />
                        </div>
                    </div> : <div className={cls.banner__image2}>
                        <Image
                            width={240}
                            height={310}
                            src='/svg/MobileApp.svg'
                            alt='Bright Uzbekistan Mobile App'
                        />
                    </div>
                }


            </Flex>
            <div className={cls.banner__footer}>
                <Flex gap={widthwindow < 500 ? 20 : 30} width='auto'>
                    {
                        navlinks[router.locale]?.length > 0 && navlinks[router.locale].map((options) => (
                            <NavLink
                                key={options.id}
                                {...options}
                            />
                        ))
                    }
                </Flex>
                <Flex width='100%' gap={widthwindow < 500 ? 20 : 30}>
                    {
                        contacts?.length > 0 && contacts.map((options) => (
                            <p key={options.id} className={cls.banner__contacttetx}>
                                <NavLink
                                    key={options.id}
                                    {...options}
                                />
                            </p>
                        ))
                    }
                </Flex>
            </div>
        </div>
    );
}

export default Banner;
