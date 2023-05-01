import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import parseTimestamp from 'utils/parseTimestamp';
import cls from './NewsImageCard.module.scss'
import { CalendarIcon, ClockIcon } from 'components/UI/icons';

const NewsImageCard = ({
    id = 1,
    title = '',
    image = '',
    description = '',
    date = '',
    category = '',
    direction = 'grid',
    reverse = false
}) => {
    const link = `/news/${id}`
    const router = useRouter()
    const { hours, minutes, month, data, year } = parseTimestamp(date, router.locale)
    const { data: currentData, month: currentMonth, year: currentYear } = parseTimestamp(Date.now(), router.locale)

    return (
        <Link href={link}>
            <div className={`${cls.card} ${direction === 'column' ? cls.column : ''}`}>
                <Link href={link}><a><h2 className={cls.card__title}>{title}</h2></a></Link>
                <div className={cls.card__infoblock} style={{ display: 'flex', flexDirection: `${reverse ? 'column-reverse' : 'row'}` }}>
                    {image && (
                        <div className={cls.card__image}>
                            <Image
                                src={image || '/Images/BrightUzbekistan.svg'}
                                layout='fill'
                                objectFit='cover'
                                alt={title}
                            />
                        </div>
                    )}
                    <div className={cls.card__grid}>
                        <div className={cls.card__grid__info}>
                            <time className={cls.card__grid__info__time}>{
                                data === currentData && month === currentMonth && year === currentYear
                                    ? <><ClockIcon /> {hours}:{minutes}</>
                                    : <><CalendarIcon /> {`${data} ${month} ${year === currentYear ? '' : year}`}</>
                            }</time>
                            <span className={cls.card__grid__info__ctg}>{category}</span>
                        </div>
                        <p className={cls.card__grid__desc}>{description}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default NewsImageCard;
