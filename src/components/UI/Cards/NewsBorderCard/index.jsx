import Image from 'next/image';
import Link from 'next/link';
import NewsCard from '../NewsCard';
import cls from './NewsBorderCard.module.scss'

const NewsBorderCard = ({
    id = 1,
    image = '',
    title = '',
    desc = '',
    time = '',
    category = '',
    withImage = true
}) => {
    const link = `/news/${id}`
    return (
        <Link href={link}>
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
                    {title && <Link href={link}><a><h3 className={cls.card__title}>{title}</h3></a></Link>}
                    <NewsCard
                        title={desc || title}
                        time={time}
                        category={category}
                    />
                </div>
            </div>
        </Link>
    );
}

export default NewsBorderCard;
