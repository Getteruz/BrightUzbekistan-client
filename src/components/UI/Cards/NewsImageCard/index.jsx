import { useGetWindowWidth } from 'hooks/useGetWindowWith';
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
    const windowWidth = useGetWindowWidth()

    return (
        <div >
            {windowWidth < 501 && <p className={cls.cardtext}>Новости дня</p>}
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
                        {windowWidth > 500 && <NewsCard
                            id={id}
                            title={desc}
                            time={time}
                            category={category}
                        />}
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default NewsImageCard;