import Image from "next/image";
import Aside from "components/UI/Aside/RightAside/News";
import GoToBack from "components/UI/GoToBack";
import LayoutChildWrapper from "components/UI/LayoutChildWrapper";
import ShareBanner from "components/UI/ShareBanner";
import cls from './SingleNews.module.scss'
import parseTimestamp from "utils/parseTimestamp";
import { useRouter } from "next/router";
import { CalendarIcon, ClockIcon } from "components/UI/icons";
import Markup from "components/UI/Markup";
import { useQuery } from "react-query";
import { getNewsById } from "services/news";
import SingleAds from "components/UI/Ads/Single";


const SingleNews = ({ news = {}, lastnews = [] }) => {
    const router = useRouter()
    useQuery(['news', router.query?.id], () => getNewsById(router.query?.id), { initialData: news })
    const { data: currentData, month: currentMonth, year: currentYear } = parseTimestamp(Date.now(), router.locale)
    const { hours, minutes, month, data, year } = parseTimestamp(news?.publishDate || news?.updated_at, router.locale)

    return (
        <LayoutChildWrapper asideComponent={<Aside news={lastnews} />}>
            <main className={cls.main}>
                <GoToBack />
                <SingleAds />
                <div className={cls.main__wrapper}>
                    <h2 className={cls.main__title}>{news?.title}</h2>
                    <div className={cls.main__info}>
                        <time className={cls.main__info__title}>
                            {
                                data === currentData && month === currentMonth && year === currentYear
                                    ? <><ClockIcon /> {hours}:{minutes}</>
                                    : <><CalendarIcon /> {`${data} ${month} ${year === currentYear ? '' : year}`}</>
                            }
                        </time>
                        <span className={cls.main__info__ctg}>{news?.mainCategory?.[router?.locale]}</span>
                    </div>
                    <p className={cls.main__shortDesc}>{news?.shortDescription}</p>
                    <div className={cls.main__image}>
                        <Image
                            src={news?.file || '/Images/BrightUzbekistan.png'}
                            layout="fill"
                            objectFit="cover"
                            alt={news?.title}
                        />
                    </div>
                    <Markup html={news?.description} />
                    <time className={cls.main__time}>{`${data} ${month}, ${year}.  ${hours}:${minutes}`}</time>
                </div>
                <div className={cls.main__banner}>
                    <ShareBanner 
                        tags={news?.tags || []} 
                        link={typeof window !== 'undefined' ? document.location.href : ''} 
                        title={news?.title}
                    />
                </div>
                {/* <div className={cls.main__cards}>
                    <CardsGroup news={{...newsData['political-news'], withNavigation: true}} />
                </div>
                <div className={cls.main__recomended}>
                    <h4 className={cls.main__recomended__text}>Репортерские статьи</h4>
                    <RecomendedCardList items={newsData['last-news'].items}/>
                </div> */}
            </main>
        </LayoutChildWrapper>
    );
}

export default SingleNews;
