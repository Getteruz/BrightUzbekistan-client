import { useTranslation } from 'next-i18next';
import Flex from '../Flex';
import { socialMedias } from './data';
import cls from './ShareBanner.module.scss'

const ShareBanner = ({
    tags = [],
    link = ''
}) => {
    const {t} = useTranslation()

    return (
        <div className={cls.banner}>
            <div className={cls.banner__block}>
                <span className={cls.banner__block__title}>{t('Используемые теги')}:</span>
                <ul className={cls.banner__list}>
                    {
                        tags?.length > 0 && tags.map((tag, index) => (
                            <li className={cls.banner__tag} key={index}>#{tag}</li>
                        ))
                    }
                </ul>
            </div>
            <span className={cls.banner__line}></span>
            <div className={cls.banner__block}>
                <span className={cls.banner__block__title}>{t('Поделитесь с друзьями')}</span>
                <Flex gap='10'>
                    {
                        socialMedias?.length > 0 && socialMedias.map(item =>
                            <a 
                                key={item?.id}
                                className={cls.banner__button} 
                                href={item?.link + link}
                                target="_blank"
                                rel='noreferrer'
                            >
                                {item.icon()}
                            </a>
                        )
                    }
                </Flex>
            </div>
        </div>
    );
}

export default ShareBanner;
