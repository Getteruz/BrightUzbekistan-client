import Image from 'next/image';
import NewsCard from '../NewsCard';
import cls from './NewsCardWithBorder.module.scss'

const NewsCardWithBorder = ({
    image = '',
    title = '',
    desc = '',
    time = '',
    category = '',
    withImage = false
}) => {
    return (
        <div className={cls.card}>
            {withImage && image && (
                <div className={cls.card__image}>
                    <Image
                        src={image}
                        layout='fill'
                        objectFit='cover'
                        alt={title}
                    />
                </div>
            )}
            <div className={cls.card__block}>
                {title && <h3 className={cls.card__title}>{title}</h3>}
                <NewsCard 
                    title={desc || title}
                    time={time}
                    category={category}
                />
            </div>
        </div>
    );
}

export default NewsCardWithBorder;
