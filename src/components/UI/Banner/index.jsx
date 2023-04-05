import Image from 'next/image';
import AppStore from '../Buttons/AppStore';
import GooglePlay from '../Buttons/GooglePlay';
import Flex from '../Flex';
import NavLink from '../NavLink';

import { contacts, navlinks } from './data';
import cls from './Banner.module.scss'
import { useGetWindowWidth } from 'hooks/useGetWindowWith';

const Banner = () => {
    const widthwindow = useGetWindowWidth()
    return (
        <div className={cls.banner}>
            <Flex>
                <div className={cls.banner__block}>
                    <h2 className={cls.banner__title}>Скоро</h2>
                    <p className={cls.banner__text}>Скачайте наше мобильное приложение и следите за новостями!</p>
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
                        <img
                            src='/svg/MobileApp.svg'
                            alt='Bright Uzbekistan Mobile App'
                        />
                    </div>
                }


            </Flex>
            <div className={cls.banner__footer}>
                <Flex gap={widthwindow < 500 ? 20 : 30} width='auto'>
                    {
                        navlinks?.length > 0 && navlinks.map((options) => (
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
                            <p className={cls.banner__contacttetx}>
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
