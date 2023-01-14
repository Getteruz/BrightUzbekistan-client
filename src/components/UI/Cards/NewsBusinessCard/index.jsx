import NewsCard from '../NewsCard';
import cls from './NewsBusinessCard.module.scss'

const NewsBusinessCard = ({
    title = '',
    time = '',
    category = ''
}) => {
    return (
        <div className={cls.card}>
            <NewsCard title={title} time={time} category={category} />
        </div>
    );
}

export default NewsBusinessCard;
