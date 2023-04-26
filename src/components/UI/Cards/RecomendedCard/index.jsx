import Link from "next/link";
import Image from 'next/image';
import cls from './RecomendedCard.module.scss'
import { ClockIcon } from "components/UI/icons";

const RecomendedCard = ({
    id = 1,
    title = '',
    image = '',
    category = '',
    time = '',
    fullWidth = false
}) => {
    const link = `/news/${id}`
    return (
        <Link href={link}>
            <div className={`${cls.card} ${fullWidth ? cls.fullWidth : ''}`}>
                <div className={cls.card__image}>
                    <Image
                        src={image || '/Images/BrightUzbekistan.svg'}
                        layout='fill'
                        objectFit='cover'
                        alt={title}
                    />
                </div>
                <div className={cls.card__text}>
                    <Link href={link}><a><h3 className={cls.card__title}>{title}</h3></a></Link>
                    <div className={cls.card__info}>
                        <time className={cls.card__info__time}><ClockIcon /> {time}</time>
                        <h4 className={cls.card__info__category}>{category}</h4>
                    </div>
                </div>
            </div>
        </Link>

    );
}

export default RecomendedCard;
