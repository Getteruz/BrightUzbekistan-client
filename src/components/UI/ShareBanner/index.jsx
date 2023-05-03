import { useTranslation } from 'next-i18next';
import { FacebookShareButton, InstapaperShareButton, LinkedinShareButton, TelegramIcon, TelegramShareButton, TwitterShareButton } from 'next-share';
import Flex from '../Flex';
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from '../icons';
import cls from './ShareBanner.module.scss'

const ShareBanner = ({
    tags = [],
    link = '',
    title = ''
}) => {
    const { t } = useTranslation()

    return (
        <div className={cls.banner}>
            {tags?.length > 0 && (
                <>
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
                </>
            )}
            <div className={cls.banner__block}>
                <span className={cls.banner__block__title}>{t('Поделитесь с друзьями')}</span>
                <Flex gap='10'>
                    <FacebookShareButton
                        url={link}
                        title={title}
                        hashtags={tags}
                    >
                        <FacebookIcon />
                    </FacebookShareButton>
                    <LinkedinShareButton
                        url={link}
                        title={title}
                        hashtags={tags}
                    >
                        <LinkedinIcon />
                    </LinkedinShareButton>
                    <a
                        className={cls.banner__button}
                        href='https://instagram.com/bright_uzbekistan'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <InstagramIcon />
                    </a>
                    <TwitterShareButton
                        url={link}
                        title={title}
                        hashtags={tags}
                    >
                        <TwitterIcon />
                    </TwitterShareButton>
                </Flex>
            </div>
        </div>
    );
}

export default ShareBanner;
