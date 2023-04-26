import NewsImageCard from 'components/UI/Cards/NewsImageCard';
import NewsImageCardWithBorder from 'components/UI/Cards/NewsImageCardWithBorder';
import { useRouter } from 'next/router';
import cls from './PoliticalNews.module.scss'

const PoliticalNews = ({
    items = []
}) => {
    const router = useRouter()
    const [firtsNews] = items?.slice(0, 1) || []
    const otherNews = items?.slice(1, 5) || []

    return (
        <div className={cls.wrapper}>
            {firtsNews?.id && <NewsImageCard
                id={firtsNews?.id}
                title={firtsNews?.title}
                description={firtsNews?.shortDescription}
                category={firtsNews?.mainCategory?.[router?.locale]}
                date={firtsNews?.publishedDate || firtsNews?.updated_at}
                direction='column'
            />}
            <div className={cls.wrapper__group}>
                {otherNews.length > 0 && otherNews.map((news) =>
                    <NewsImageCardWithBorder
                        key={news?.id} 
                        id={news?.id}
                        title={news?.title}
                        image={news?.file}
                        category={news?.mainCategory?.[router?.locale]}
                        date={news?.publishedDate || news?.updated_at}
                    />
                )}
            </div>
        </div>
    );
}

export default PoliticalNews;