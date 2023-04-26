import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useQueryClient } from 'react-query';
import AppStore from '../Buttons/AppStore';
import GooglePlay from '../Buttons/GooglePlay';
import Flex from '../Flex';
import NavLink from '../NavLink';

import { contacts, navlinks } from './data';
import cls from './Banner.module.scss'
import { useRouter } from 'next/router';

const Banner = () => {
    const { t } = useTranslation()
    const router = useRouter()
    const queryClient = useQueryClient()
    const categories = queryClient.getQueryData('categories')

    return (
        <div className={cls.banner}>
            <Flex>
                <div className={cls.banner__block}>
                    <div className={cls.banner__info}>
                        <span className={cls.banner__info__title}>{t('Скоро')}</span>
                        <span className={cls.banner__info__desc}>{t('Мобильное приложение Для вашего удобства')}</span>
                    </div>
                    <Flex gap={10} >
                        <span>
                            <GooglePlay />
                        </span>
                        <span>
                            <AppStore />
                        </span>
                    </Flex>
                </div>
                <div style={{ position: 'relative' }}>
                    <div className={cls.banner__image}>
                        <Image
                            src='/svg/MobileApp.svg'
                            layout='fill'
                            objectFit='cover'
                            alt='Bright Uzbekistan Mobile App'
                        />
                    </div>
                </div>
            </Flex>
            <div className={cls.banner__footer}>
                <div className={cls.banner__categories}>
                    {
                        categories?.length > 0 && categories.map(ctg => (
                            <NavLink
                                key={ctg.id}
                                label={ctg?.[router.locale]}
                                link={`/category/${ctg.id}`}
                            />
                        ))
                    }
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '30px', flexShrink: 0}}>
                    {
                        contacts?.length > 0 && contacts.map(link => (
                            <a
                                className={cls.banner__link}
                                href={link.link}
                                target='_blank'
                                rel='noreferrer'
                                key={link.id}
                            >
                                {link.icon}
                                {link.label}
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Banner;
