import NewsCard from 'components/UI/Cards/NewsCard';
import NewsImageCard from 'components/UI/Cards/NewsImageCard';
import useGetWindowWidth from 'hooks/useGetWindowWidth';
import { useRouter } from 'next/router';
import cls from './UzbekistanNews.module.scss'

const UzbekistanNews = ({
    items = []
}) => {
    const router = useRouter()
    const windowWidth = useGetWindowWidth()
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
                            image={windowWidth < 550 ? news?.file : null}
                        />
                    ))
                }
            </div>
            {lastNews?.id && <NewsImageCard
                id={lastNews?.shortLink || lastNews?.id}
                title={lastNews?.title}
                image={lastNews?.file}
                description={lastNews?.shortDescription}
                date={lastNews?.publishedDate || lastNews?.updated_at}
                category={lastNews?.mainCategory?.[router?.locale]}
                direction='column'
            />}
        </div>
    );
}

export default UzbekistanNews;
