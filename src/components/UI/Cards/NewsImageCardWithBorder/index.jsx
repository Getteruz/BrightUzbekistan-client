import { CalendarIcon, ClockIcon } from 'components/UI/icons';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import parseTimestamp from 'utils/parseTimestamp';
import cls from './NewsImageCardWithBorder.module.scss'

const NewsImageCardWithBorder = ({
    id = 1,
    image = '',
    title = '',
    category = '',
    date = ''
}) => {
    const link = `/news/${id}`
    const router = useRouter()
    const { hours, minutes, month, data, year } = parseTimestamp(date, router.locale)
    const { data: currentData, month: currentMonth, year: currentYear } = parseTimestamp(Date.now())

    return (
        <Link href={link}>
            <div className={cls.card}>
                <div className={cls.card__image}>
                    <Image
                        src={image || '/Images/BrightUzbekistan.svg'}
                        layout='fill'
                        objectFit='cover'
                        alt={title}
                    />
                </div>
                <div className={cls.card__info}>
                    <a><h2 className={cls.card__info__title}>{title}</h2></a>
                    <div className={cls.card__info__flex}>
                        <time className={cls.card__info__time}>{
                            data === currentData && month === currentMonth && year === currentYear
                                ? <><ClockIcon /> {hours} : {minutes}</>
                                : <><CalendarIcon /> {`${data} ${month} ${year === currentYear ? '' : year}`}</>
                        }</time>
                        <span className={cls.card__info__ctg}>{category}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default NewsImageCardWithBorder;
