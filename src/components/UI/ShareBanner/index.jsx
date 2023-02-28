import Link from 'next/link';
import Flex from '../Flex';
import { socialMedias } from './data';
import cls from './ShareBanner.module.scss'

const ShareBanner = ({
    tags = [],
}) => {
    return (
        <div className={cls.banner}>
            <div className={cls.banner__block}>
                <span className={cls.banner__block__title}>Используемые теги:</span>
                <ul className={cls.banner__list}>
                    {
                        tags?.length > 0 && tags.map((tag, index) => (
                            <li className={cls.banner__tag} key={index}>{tag}</li>
                        ))
                    }
                </ul>
            </div>
            <span className={cls.banner__line}></span>
            <div className={cls.banner__block}>
                <span className={cls.banner__block__title}>Поделитесь с друзьями</span>
                <Flex gap='10'>
                    {
                        socialMedias?.length > 0 && socialMedias.map(item =>
                            <Link 
                                key={item.id}
                                href={item.link}
                            >
                                <a className={cls.banner__button} target="_blank">{item.icon()}</a>
                            </Link>
                        )
                    }
                </Flex>
            </div>
        </div>
    );
}

export default ShareBanner;
