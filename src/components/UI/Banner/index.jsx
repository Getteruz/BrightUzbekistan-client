import Image from 'next/image';
import AppStore from '../Buttons/AppStore';
import GooglePlay from '../Buttons/GooglePlay';
import Flex from '../Flex';
import NavLink from '../NavLink';

import { contacts, navlinks } from './data';
import cls from './Banner.module.scss'

const Banner = () => {
    return (
        <div className={cls.banner}>
            <Flex>
                <div className={cls.banner__block}>
                    <Flex gap={10} >
                        <span>
                            <GooglePlay />
                        </span>
                        <span>
                            <AppStore />
                        </span>
                    </Flex>
                    <p className={cls.banner__text}>Скачайте наше мобильное приложение и следите за новостями!</p>
                </div>
                <div style={{position: 'relative'}}>
                    <div  className={cls.banner__image}>
                    <Image 
                        src='/MobileApp.svg'
                        layout='fill'
                        objectFit='cover'
                        alt='Bright Uzbekistan Mobile App'
                    />
                    </div>
                </div>
            </Flex>
            <div className={cls.banner__footer}>
                <Flex gap='30' width='auto'>
                    {
                        navlinks?.length > 0 && navlinks.map((options) => (
                            <NavLink
                                key={options.id}
                                {...options}
                            />
                        ))
                    }
                </Flex>
                <Flex width='auto' gap='30'>
                    {
                        contacts?.length > 0 && contacts.map((options) => (
                            <NavLink
                                key={options.id}
                                {...options}
                            />
                        ))
                    }
                </Flex>
            </div>
        </div>
    );
}

export default Banner;
