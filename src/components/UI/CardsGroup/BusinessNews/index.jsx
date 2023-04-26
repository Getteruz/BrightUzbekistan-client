import NewsCard from 'components/UI/Cards/NewsCard';
import NewsCardWithBorder from 'components/UI/Cards/NewsCardWithBorder';
import NewsImageCard from 'components/UI/Cards/NewsImageCard';
import { useRouter } from 'next/router';
import cls from './BusinessNews.module.scss'

const BusinessNews = ({
    items = []
}) => {
    const router = useRouter()
    const firstGroup = items.slice(0, 2) || []
    const [thirdNews] = items?.slice(2, 3) || []
    const secondGroup = items.slice(3, 5) || []

    return (
        <div className={cls.wrapper}>
            <div className={cls.wrapper__group}>
                {firstGroup?.length > 0 && firstGroup.map((news) =>
                    <NewsCardWithBorder
                        key={news.id}
                        id={news?.id}
                        description={news?.shortDescription}
                        category={news?.mainCategory?.[router?.locale]}
                        date={news?.publishedDate || news?.updated_at}
                    />
                )}
            </div>
            {thirdNews?.id && <NewsImageCard
                id={thirdNews?.id}
                title={thirdNews?.title}
                description={thirdNews?.shortDescription}
                image={thirdNews?.file}
                category={thirdNews?.mainCategory?.[router?.locale]}
                date={thirdNews?.publishedDate || thirdNews?.updated_at}
                direction='column'
                reverse={true}
            />}
            <div className={cls.wrapper__group}>
                {secondGroup?.length > 0 && secondGroup.map((news) =>
                    <NewsCard
                        key={news?.id}
                        id={news?.id}
                        title={news?.title}
                        category={news?.mainCategory?.[router?.locale]}
                        date={news?.publishedDate || news?.updated_at}
                    />
                )}
            </div>
        </div>
    );
}

export default BusinessNews;