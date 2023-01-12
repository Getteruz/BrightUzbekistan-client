import { ClockIcon } from '../icons';
import cls from './NewsCard.module.scss'

const NewsCard = ({
    title = '',
    time = '',
    category = ''
}) => {
    return (
        <div className={cls.card}>
            <div className={cls.card__info}>
                <time className={cls.card__info__time}><ClockIcon /> {time}</time>
                <h4 className={cls.card__info__category}>{category}</h4>
            </div>
            <h3 className={cls.card__title}>{title}</h3>
        </div>
    );
}

export default NewsCard;
