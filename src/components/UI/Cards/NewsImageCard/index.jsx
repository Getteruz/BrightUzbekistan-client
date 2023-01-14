import Image from 'next/image';
import Link from 'next/link';
import NewsCard from '../NewsCard';
import cls from './NewsImageCard.module.scss'

const NewsImageCard = ({
    id = 1,
    title = '',
    image = '',
    desc = '',
    time = '',
    category = '',
    direction = 'grid',
    reverse = false
}) => {
    const link = `/news/${id}`
    return (
        <Link href={link}>
            <div className={`${cls.card} ${direction === 'column' ? cls.column : ''}`}>
                <Link href={link}><a><h2 className={cls.card__title}>{title}</h2></a></Link>
                <div className={cls.card__infoblock} style={{ display: 'flex', flexDirection: `${reverse ? 'column-reverse' : ''}` }}>
                    {image && (
                        <div className={cls.card__image}>
                            <Image
                                src={image}
                                layout='fill'
                                objectFit='cover'
                                alt='News Image'
                            />
                        </div>
                    )}
                    <NewsCard
                        title={desc}
                        time={time}
                        category={category}
                    />
                </div>
            </div>
        </Link>
    );
}

export default NewsImageCard;
