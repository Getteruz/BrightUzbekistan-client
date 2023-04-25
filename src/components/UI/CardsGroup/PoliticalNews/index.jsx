import NewsImageCard from 'components/UI/Cards/NewsImageCard';
import NewsImageCardWithBorder from 'components/UI/Cards/NewsImageCardWithBorder';
import cls from './PoliticalNews.module.scss'

const PoliticalNews = ({
    items = []
}) => {
    const [firtsNews] = items?.slice(0, 1) || []
    const otherNews = Array(4).fill(null) || []

    return (
        <div className={cls.wrapper}>
            {firtsNews?.id && <NewsImageCard
                id={1}
                title='Рискнувшая отдыхом в бюджетном отеле Египта россиянка рассказала о везении'
                description='Россиянка купила тур в бюджетный отель Египта за 39 тысяч рублей и рассказала о его плюсах...'
                category='Iqtisod'
                date='2023-04-24T12:58:51.406Z'
                direction='column'
            />}
            <div className={cls.wrapper__group}>
                {otherNews.length > 0 && otherNews.map((news, index) =>
                    <NewsImageCardWithBorder
                        key={index} 
                        title='Рискнувшая отдыхом в бюджетном отеле Египта россиянка рассказала о везении'
                        category='Iqtisod'
                        image='/Images/image.webp'
                        date='2023-04-24T12:58:51.406Z'
                    />
                )}
            </div>
        </div>
    );
}

export default PoliticalNews;