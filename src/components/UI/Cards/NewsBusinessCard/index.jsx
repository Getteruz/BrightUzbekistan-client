import Link from 'next/link';
import NewsCard from '../NewsCard';
import cls from './NewsBusinessCard.module.scss'

const NewsBusinessCard = ({
    id = 1,
    title = '',
    time = '',
    category = ''
}) => {
    const link = `/news/${id}`
    return (
        <Link href={link}>
            <div className={cls.card}>
                <NewsCard title={title} time={time} category={category} />
            </div>
        </Link>
    );
}

export default NewsBusinessCard;
