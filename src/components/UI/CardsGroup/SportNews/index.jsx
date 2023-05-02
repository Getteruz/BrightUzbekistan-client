import NewsCard from 'components/UI/Cards/NewsCard';
import NewsImageCard from 'components/UI/Cards/NewsImageCard';
import useGetWindowWidth from 'hooks/useGetWindowWidth';
import { useRouter } from 'next/router';
import cls from './SportNews.module.scss'

const SportNews = ({
    items = []
}) => {
    const router = useRouter()
    const windowWidth = useGetWindowWidth()
    const [firtsNews] = items?.slice(0, 1) || []
    const otherNews = items?.slice(1, 5) || []

    return (
        <div className={cls.wrapper}>
            {firtsNews?.id && <NewsImageCard 
                id={firtsNews?.shortLink || firtsNews?.id}
                title={firtsNews?.title}
                image={firtsNews?.file}
                description={firtsNews?.shortDescription}
                date={firtsNews?.publishedDate || firtsNews?.updated_at}
                category={firtsNews?.mainCategory?.[router?.locale]}
                direction='column'
                reverse={true}
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
                            image={windowWidth < 550 ? news?.file : null}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default SportNews;