import GreyButton from 'components/UI/Buttons/GreyButton';
import NewsCard from 'components/UI/Cards/NewsCard';
import Flex from 'components/UI/Flex';
import { RightArrows } from 'components/UI/icons';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import cls from './News.module.scss'

const Aside = ({ news = [] }) => {
    const { t } = useTranslation()
    const router = useRouter()

    return (
        <>
            <div className={cls.cards__wrapper}>
                <Flex direction='column' gap='27'>
                    {
                        news?.length > 0 && news?.map(news => (
                            <NewsCard
                                key={news?.id}
                                id={news?.id}
                                title={news?.title}
                                category={news?.mainCategory?.[router?.locale]}
                                date={news?.publishedDate || news?.updated_at}
                            />
                        ))
                    }
                </Flex>
            </div>
            <GreyButton 
                label={t("все новости")} 
                icon={RightArrows} 
                onClick={() => router.push('/last-news')}
            />
        </>
    );
}

export default Aside;
