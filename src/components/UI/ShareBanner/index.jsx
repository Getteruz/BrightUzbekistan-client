import { useGetWindowWidth } from 'hooks/useGetWindowWith';
import Link from 'next/link';
import Flex from '../Flex';
import { socialMedias } from './data';
import cls from './ShareBanner.module.scss'
import ru from '../../../lang/ru.json'
import uz from '../../../lang/uz.json'
import уз from '../../../lang/уз.json'
import en from '../../../lang/en.json'
import { useRouter } from 'next/router';
const ShareBanner = ({
    tags = [],
}) => {

    const langData = {
        uz,
        уз,
        ru,
        en
    }
    const router = useRouter()

    return (
        <div className={cls.banner}>
            <div className={cls.banner__block}>
                <span className={cls.banner__block__title}>{langData[router.locale].tag}:</span>
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
                <span className={cls.banner__block__title}>{langData[router.locale].withfriend}</span>
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
