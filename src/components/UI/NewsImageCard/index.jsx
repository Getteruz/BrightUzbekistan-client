import Image from 'next/image';
import NewsCard from '../NewsCard';
import cls from './NewsImageCard.module.scss'

const NewsImageCard = ({
    title = '', 
    image = '', 
    desc = '', 
    time = '', 
    category = '',
    direction = 'grid'
}) => {
    return (
        <div className={`${cls.card} ${direction === 'column' ? cls.column : ''}`}>
            <h2 className={cls.card__title}>{title}</h2>
            <div className={cls.card__infoblock}>
                <div className={cls.card__image}>
                    <Image
                        src={image}
                        layout='fill'
                        objectFit='cover'
                        alt='News Image'
                    />
                </div>
                <NewsCard 
                    title={desc}
                    time={time}
                    category={category}
                />
            </div>
        </div>
    );
}

export default NewsImageCard;
