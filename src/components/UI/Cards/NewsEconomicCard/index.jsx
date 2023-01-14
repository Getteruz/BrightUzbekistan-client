import NewsCard from '../NewsCard';
import cls from './NewsEconomicCard.module.scss'

const NewsEconomicCard = ({
    title = '',
    ...other
}) => {
    return (
        <div className={cls.card}>
            <h2 className={cls.card__title}>{title}</h2>
            <NewsCard {...other} />
        </div>
    );
}

export default NewsEconomicCard;