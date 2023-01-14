import Link from 'next/link';
import NewsCard from '../NewsCard';
import cls from './NewsEconomicCard.module.scss'

const NewsEconomicCard = ({
    id = 1,
    title = '',
    ...other
}) => {
    const link = `/news/${id}`
    return (
        <Link href={link}>
            <div className={cls.card}>
                <Link href={link}><a><h2 className={cls.card__title}>{title}</h2></a></Link>
                <NewsCard {...other} />
            </div>
        </Link>
    );
}

export default NewsEconomicCard;