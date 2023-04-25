import { CalendarIcon, ClockIcon } from 'components/UI/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import parseTimestamp from 'utils/parseTimestamp';
import cls from './NewsCardWithBorder.module.scss'

const NewsCardWithBorder = ({
    id = 1,
    title = '',
    category = '',
    description = '',
    date = ''
}) => {
    const link = `/news/${id}`
    const router = useRouter()
    const { hours, minutes, month, data, year } = parseTimestamp(date, router.locale)
    const { data: currentData, month: currentMonth, year: currentYear } = parseTimestamp(Date.now())

    return (
        <Link href={link}>
            <div className={cls.card}>
                {title && <a><h2 className={cls.card__title}>{title}</h2></a>}
                <div className={cls.card__info}>
                    <div className={cls.card__flex}>
                        <time className={cls.card__info__time}>{
                            data === currentData && month === currentMonth && year === currentYear
                                ? <><ClockIcon /> {hours} : {minutes}</>
                                : <><CalendarIcon /> {`${data} ${month} ${year === currentYear ? '' : year}`}</>
                        }</time>
                        <span className={cls.card__info__ctg}>{category}</span>
                    </div>
                    <p className={cls.card__desc}>{description}</p>
                </div>
            </div>
        </Link>
    );
}

export default NewsCardWithBorder;