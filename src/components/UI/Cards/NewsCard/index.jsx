import Link from 'next/link';
import { CalendarIcon, ClockIcon } from '../../icons';
import cls from './NewsCard.module.scss'

const NewsCard = ({
    ru = {},
    publishDate,
    id = 1,
    title = '',
    desc = '',
    // time = '',
    categories = '',
    date = ''
}) => {
    publishDate = date || publishDate
    const link = `/news/${id}`
    let time = new Date(publishDate)
  
    return (
        <Link href={link}>
            <div className={cls.card}>
                <div className={cls.card__info}>
                    <time className={cls.card__info__time}>{
                         <><ClockIcon /> {`${time.getHours()}:${time.getMinutes()}`}</>
                    }</time>
                    <h4 className={cls.card__info__category}>{categories?.[0]}</h4>
                </div>
                {ru?.title && <Link href={link}><a><h3 className={cls.card__title}>{ru?.title}</h3></a></Link>}
                {ru?.shortDescription && <p className={cls.card__desc}>{ru?.shortDescription}</p>}
            </div>
        </Link>
    );
}

export default NewsCard;
