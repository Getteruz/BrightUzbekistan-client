import Image from 'next/image';
import Link from 'next/link';
import NewsCard from '../NewsCard';
import cls from './NewsImageCard.module.scss'

const NewsImageCard = ({
    id = 1,
    title = '',
    img = '',
    shortDesc = '',
    time = '',
    categories = '',
    direction = 'grid',
    reverse = false,
    date = ''
}) => {
    const link = `/news/${id}`
    return (
        <Link href={link}>
            <div className={`${cls.card} ${direction === 'column' ? cls.column : ''}`}>
                <Link href={link}><a><h2 className={cls.card__title}>{title}</h2></a></Link>
                <div className={cls.card__infoblock} style={{ display: 'flex', flexDirection: `${reverse ? 'column-reverse' : ''}` }}>
                    {img && (
                        <div className={cls.card__image}>
                            <Image
                            
                                src={'https://bright-test.onrender.com' + img}
                                layout='fill'
                                objectFit='cover'
                                alt='News Image'
                            />
                        </div>
                    )}
                    <NewsCard
                        title={shortDesc}
                        date={date}
                        categories={categories}
                    />
                </div>
            </div>
        </Link>
    );
}

export default NewsImageCard;
