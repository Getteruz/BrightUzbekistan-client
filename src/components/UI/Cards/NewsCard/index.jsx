import Link from 'next/link';
import parseTimestamp from 'utils/parseTimestamp'
import { CalendarIcon, ClockIcon } from '../../icons';
import cls from './NewsCard.module.scss'

const NewsCard = ({
    id = 1,
    title = '',
    desc = '',
    time = '',
    category = '',
    date = ''
}) => {
    const {hours, minutes} = parseTimestamp(time)
    const link = `/news/${id}`
    return (
        <Link href={link}>
            <div className={cls.card}>
                <div className={cls.card__info}>
                    <time className={cls.card__info__time}>{
                        date ? <><CalendarIcon /> {date}</> : <><ClockIcon /> {`${hours}:${minutes}`}</>
                    }</time>
                    <h4 className={cls.card__info__category}>{category}</h4>
                </div>
                {title && <Link href={link}><a><h3 className={cls.card__title}>{title}</h3></a></Link>}
                {desc && <p className={cls.card__desc}>{desc}</p>}
            </div>
        </Link>
    );
}

export default NewsCard;
