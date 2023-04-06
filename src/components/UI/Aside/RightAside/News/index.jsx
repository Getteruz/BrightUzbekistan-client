import GreyButton from 'components/UI/Buttons/GreyButton';
import NewsCard from 'components/UI/Cards/NewsCard';
import Flex from 'components/UI/Flex';
import { RightArrows } from 'components/UI/icons';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getLastNews } from 'services/news';
import { newsData } from './data';
import cls from './News.module.scss'

const Aside = () => {
    const router = useRouter()
    const { data } = useQuery('last-news', () => getLastNews(router.locale))
    
    return (
        <>
            <div className={cls.cards__wrapper}>
                <Flex direction='column' gap='27'>
                    {
                        data?.length > 0 && data?.map(news => (
                            <NewsCard
                                key={news?.id}
                                title={news?.[router?.locale]?.title}
                                category={news?.categories?.[0]?.[router?.locale]}
                                time={news?.publishDate}
                            />
                        ))
                    }
                </Flex>
            </div>
            {/* <GreyButton label='все новости' icon={RightArrows} /> */}
        </>
    );
}

export default Aside;
