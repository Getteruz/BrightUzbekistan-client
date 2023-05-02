import NewsCard from 'components/UI/Cards/NewsCard';
import { useRouter } from 'next/router';
import NewsImageCard from '../../Cards/NewsImageCard';
import cls from './LastNews.module.scss'

const LastNews = ({
    items = [],
}) => {
    const router = useRouter()
    const [firtsNews] = items?.slice(0, 1) || []
    const otherNews = items?.slice(1, 5) || []

    return (
        <div className={cls.wrapper}>
            {firtsNews?.id && <NewsImageCard 
                id={firtsNews?.shortLink || firtsNews?.id}
                title={firtsNews?.title}
                image={firtsNews?.file}
                description={firtsNews?.shortDescription}
                category={firtsNews?.mainCategory?.[router?.locale]}
                date={firtsNews?.publishedDate || firtsNews?.updated_at}
            />}
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
        </div>
    );
}

export default LastNews;
