import NewsCard from 'components/UI/Cards/NewsCard';
import NewsImageCard from 'components/UI/Cards/NewsImageCard';
import { useRouter } from 'next/router';
import cls from './WorldNews.module.scss'

const WorldNews = ({
    items = []
}) => {
    const router = useRouter()
    const [lastNews] = items?.slice(4, 5) || []
    const otherNews = items?.slice(0, 4) || []

    return (
        <div className={cls.wrapper}>
            <div className={cls.wrapper__group}>
                {
                    otherNews?.length > 0 && otherNews.map((news) => (
                        <NewsCard
                            key={news?.id}
                            id={news?.shortLink || news?.id}
                            title={news?.title}
                            date={news?.publishedDate || news?.updated_at}
                            category={news?.mainCategory?.[router?.locale]}
                        />
                    ))
                }
            </div>
            {lastNews?.id && <NewsImageCard
                id={lastNews?.shortLink || lastNews?.id}
                title={lastNews?.title}
                image={lastNews?.file}
                description={lastNews?.shortDescription}
                category={lastNews?.mainCategory?.[router?.locale]}
                date={lastNews?.publishedDate || lastNews?.updated_at}
            />}
        </div>
    );
}

export default WorldNews;
