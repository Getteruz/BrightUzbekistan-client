import Link from 'next/link';
import { useRouter } from 'next/router';
import parseTimestamp from 'utils/parseTimestamp';
import { CalendarIcon, ClockIcon } from '../../icons';
import cls from './NewsCard.module.scss'

const NewsCard = ({
    id = 1,
    title = '',
    description = '',
    category = '',
    date = '',
    maxTitleLine = 3
}) => {
    const link = `/news/${id}`
    const router = useRouter()
    const { hours, minutes, month, data, year } = parseTimestamp(date, router.locale)
    const { data: currentData, month: currentMonth, year: currentYear } = parseTimestamp(Date.now(), router.locale)

    const ellipsisStyle = maxTitleLine !== Infinity ? {
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: maxTitleLine,
        lineClamp: maxTitleLine,
        webkirBoxOrient: 'vertical',
    } : {}

    return (
        <Link href={link}>
            <div className={cls.card}>
                <div className={cls.card__info}>
                    <time className={cls.card__info__time}>{
                        data === currentData && month === currentMonth && year === currentYear
                            ? <><ClockIcon /> {hours}:{minutes}</>
                            : <><CalendarIcon /> {`${data} ${month} ${year === currentYear ? '' : year}`}</>
                    }</time>
                    <h4 className={cls.card__info__category}>{category}</h4>
                </div>
                {title && <Link href={link}>
                    <a>
                        <h3 className={cls.card__title} style={ellipsisStyle}>
                            {title}
                        </h3>
                    </a>
                </Link>}
                {description && <p className={cls.card__desc}>{description}</p>}
            </div>
        </Link>
    );
}

export default NewsCard;
