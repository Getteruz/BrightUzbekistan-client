import NewsCard from 'components/UI/Cards/NewsCard';
import NewsCardWithBorder from 'components/UI/Cards/NewsCardWithBorder';
import cls from './EconomicNews.module.scss'

const EconomicNews = ({
    items = []
}) => {
    const [firtsNews] = items?.slice(4, 5) || []
    const otherNews = items?.slice(0, 4) || []
    return (
        <div className={cls.wrapper}>
            {firtsNews?.id && <NewsCardWithBorder
                id={1}
                title='Mastercard от АО «Узнацбанк» – Финансовая свобода и безграничные возможности'
                description='Оплата онлайн-услуг, шопинг в интернет-магазинах, физические покупки в любой точке земного шара - в современном мире все это стало возможным благодаря международным платежным системам.'
                date='2023-04-24T12:58:51.406Z'
                category='Iqtisod'
            />}
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
        </div>
    );
}

export default EconomicNews;