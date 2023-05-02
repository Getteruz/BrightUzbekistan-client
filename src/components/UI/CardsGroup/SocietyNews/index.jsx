import NewsCard from 'components/UI/Cards/NewsCard';
import { useRouter } from 'next/router';
import cls from './SocietyNews.module.scss'

const SocietyNews = ({
    items = []
}) => {
    const router = useRouter()
    const news = items?.slice(0,5) || []

    return (
        <div className={cls.wrapper}>
            {
                news?.length > 0 && news?.map((news) =>  (
                    <NewsCard 
                        key={news?.id}
                        id={news?.shortLink || news?.id}
                        title={news?.title}
                        description={news?.shortDescription}
                        category={news?.mainCategory?.[router?.locale]}
                        date={news?.publishedDate || news?.updated_at}
                    />
                ))
            }
        </div>
    );
}

export default SocietyNews;