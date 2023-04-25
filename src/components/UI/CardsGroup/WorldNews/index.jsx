import NewsCard from 'components/UI/Cards/NewsCard';
import NewsImageCard from 'components/UI/Cards/NewsImageCard';
import cls from './WorldNews.module.scss'

const WorldNews = ({
    items = []
}) => {
    const [lastNews] = items?.slice(4, 5) || []
    const otherNews = items?.slice(0, 4) || []

    return (
        <div className={cls.wrapper}>
            <div className={cls.wrapper__group}>
                {
                    otherNews?.length > 0 && otherNews.map((news, index) => (
                        <NewsCard
                            key={index}
                            title={'Рискнувшая отдыхом в бюджетном отеле Египта россиянка рассказала о везении'}
                            date={'2023-04-24T12:58:51.406Z'}
                            category='Iqtisod'
                        />
                    ))
                }
            </div>
            {lastNews?.id > 0 && <NewsImageCard
                id={1}
                title='Рискнувшая отдыхом в бюджетном отеле Египта россиянка рассказала о везении'
                image='/Images/Image.webp'
                description='Россиянка купила тур в бюджетный отель Египта за 39 тысяч рублей и рассказала о его плюсах...'
                category='Iqtisod'
                date='2023-04-24T12:58:51.406Z'
            />}
        </div>
    );
}

export default WorldNews;
