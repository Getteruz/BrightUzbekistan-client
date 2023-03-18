import Image from 'next/image';
import Link from 'next/link';
import NewsCard from '../NewsCard';
import cls from './NewsImageCard.module.scss'

const NewsImageCard = ({
    id = 1,
    ru = {},
    publishDate,
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
                <Link href={link}><a><h2 className={cls.card__title}>{ru?.title}</h2></a></Link>
                <div className={cls.card__infoblock} style={{ display: 'flex', flexDirection: `${reverse ? 'column-reverse' : ''}` }}>
                    {ru?.file && (
                        <div className={cls.card__image}>
                            <Image
                                src={ru?.file}
                                layout='fill'
                                objectFit='cover'
                                alt='News Image'
                            />
                        </div>
                    )}
                    <NewsCard
                        id={id}
                        ru={{title: ru?.shortDescription}}
                        date={publishDate}
                        categories={categories}
                    />
                </div>
            </div>
        </Link>
    );
}

export default NewsImageCard;
