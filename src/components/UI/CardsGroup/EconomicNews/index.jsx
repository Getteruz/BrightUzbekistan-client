import TopAds from 'components/UI/Ads/Top';
import NewsCard from 'components/UI/Cards/NewsCard';
import NewsCardWithBorder from 'components/UI/Cards/NewsCardWithBorder';
import useGetWindowWidth from 'hooks/useGetWindowWidth';
import { useRouter } from 'next/router';
import cls from './EconomicNews.module.scss'

const EconomicNews = ({
    items = [],
    withAds = false
}) => {
    const router = useRouter()
    const windowWidth = useGetWindowWidth()
    const [firtsNews] = items?.slice(4, 5) || []
    const otherNews = items?.slice(0, 4) || []

    return (
        <div className={cls.wrapper}>
            {firtsNews?.id && <NewsCardWithBorder
                id={firtsNews?.shortLink || firtsNews?.id}
                title={firtsNews?.title}
                description={firtsNews?.shortDescription}
                category={firtsNews?.mainCategory?.[router?.locale]}
                date={firtsNews?.publishedDate || firtsNews?.updated_at}
            />}
            {withAds && <TopAds />}
            <div className={cls.wrapper__group}>
                {
                    otherNews?.length > 0 && otherNews.map((news) => (
                        <NewsCard
                            key={news?.id}
                            id={news?.shortLink || news?.id}
                            title={news?.title}
                            category={news?.mainCategory?.[router?.locale]}
                            date={news?.publishedDate || news?.updated_at}
                            image={windowWidth < 550 ? news?.file : null}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default EconomicNews;