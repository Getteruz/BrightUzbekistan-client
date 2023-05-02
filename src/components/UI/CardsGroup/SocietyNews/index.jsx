import NewsCard from 'components/UI/Cards/NewsCard';
import useGetWindowWidth from 'hooks/useGetWindowWidth';
import { useRouter } from 'next/router';
import cls from './SocietyNews.module.scss'

const SocietyNews = ({
    items = []
}) => {
    const router = useRouter()
    const windowWidth = useGetWindowWidth() 
    const news = items?.slice(0,5) || []

    return (
        <div className={cls.wrapper}>
            {
                news?.length > 0 && news?.map((news) =>  (
                    <NewsCard 
                        key={news?.id}
                        id={news?.shortLink || news?.id}
                        title={news?.title}
                        description={windowWidth > 550 ? news?.shortDescription : ''}
                        category={news?.mainCategory?.[router?.locale]}
                        date={news?.publishedDate || news?.updated_at}
                        image={windowWidth < 550 ? news?.file : null}
                    />
                ))
            }
        </div>
    );
}

export default SocietyNews;