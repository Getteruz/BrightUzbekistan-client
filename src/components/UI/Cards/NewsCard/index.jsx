import Link from 'next/link';
import { CalendarIcon, ClockIcon } from '../../icons';
import cls from './NewsCard.module.scss'

const NewsCard = ({
    id = 1,
    title = '',
    desc = '',
    // time = '',
    categories = '',
    date = ''
}) => {
    const link = `/news/${id}`
    let time = new Date(date)
  
    return (
        <Link href={link}>
            <div className={cls.card}>
                <div className={cls.card__info}>
                    <time className={cls.card__info__time}>{
                         <><ClockIcon /> {`${time.getHours()}:${time.getMinutes()}`}</>
                    }</time>
                    <h4 className={cls.card__info__category}>{categories?.[0]}</h4>
                </div>
                {title && <Link href={link}><a><h3 className={cls.card__title}>{title}</h3></a></Link>}
                {desc && <p className={cls.card__desc}>{shortDesc}</p>}
            </div>
        </Link>
    );
}

export default NewsCard;
