import { CalendarIcon, ClockIcon } from '../../icons';
import cls from './NewsCard.module.scss'

const NewsCard = ({
    title = '',
    desc = '',
    time = '',
    category = '',
    date = ''
}) => {
    return (
        <div className={cls.card}>
            <div className={cls.card__info}>
                <time className={cls.card__info__time}>{
                    date ? <><CalendarIcon /> {date}</> : <><ClockIcon /> {time}</>
                }</time>
                <h4 className={cls.card__info__category}>{category}</h4>
            </div>
            {title && <h3 className={cls.card__title}>{title}</h3>}
            {desc && <p className={cls.card__desc}>{desc}</p>}
        </div>
    );
}

export default NewsCard;
