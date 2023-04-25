import NewsCard from 'components/UI/Cards/NewsCard';
import NewsImageCard from 'components/UI/Cards/NewsImageCard';
import cls from './SportNews.module.scss'

const SportNews = ({
    items = []
}) => {
    const [firtsNews] = items?.slice(0, 1) || []
    const otherNews = items?.slice(1, 5) || []

    return (
        <div className={cls.wrapper}>
            {firtsNews?.id && <NewsImageCard 
                title='Криштиану Роналду побил мировой рекорд по забитым мячам за сборную'
                description='В рамках отборочного турнира чемпионата мира-2022 сборная Португалии в домашнем матче оказалась сильнее сборной Ирландии.'
                category='Sport'
                date='2023-04-24T12:58:51.406Z'
                image='/Images/image.webp'
                direction='column' 
                reverse={true}
            />}
            <div className={cls.wrapper__group}>
                {
                    otherNews?.length > 0 && otherNews.map((news, index) => (
                        <NewsCard 
                            key={index}
                            title='Пекин 2022. Биатлон. Йоханнес Бё — пятикратный олимпийский чемпион.'
                            category='Sport'
                            date='2023-04-24T12:58:51.406Z'
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default SportNews;