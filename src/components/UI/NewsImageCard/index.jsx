import Image from 'next/image';
import NewsCard from '../NewsCard';
import cls from './NewsImageCard.module.scss'

const NewsImageCard = () => {
    return (
        <div className={cls.card}>
            <h2 className={cls.card__title}>Рискнувшая отдыхом в бюджетном отеле Египта россиянка рассказала о везении</h2>
            <div className={cls.card__infoblock}>
                <div className={cls.card__image}>
                    <Image
                        src='/Image.png'
                        layout='fill'
                        objectFit='cover'
                        alt='News Image'
                    />
                </div>
                <NewsCard />
            </div>
        </div>
    );
}

export default NewsImageCard;
