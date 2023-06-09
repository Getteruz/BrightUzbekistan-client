import Image from "next/image";
import Aside from "components/UI/Aside/RightAside/News";
import NewsCard from "components/UI/Cards/NewsCard";
import RecomendedCardList from "components/UI/Cards/RecomendedCard/RecomendedCardList";
import CardsGroup from "components/UI/CardsGroup";
import GoToBack from "components/UI/GoToBack";
import LayoutChildWrapper from "components/UI/LayoutChildWrapper";
import ShareBanner from "components/UI/ShareBanner";
import { newsData } from "./data";
import cls from './SingleNews.module.scss'
import { useRouter } from "next/router";
import Markup from "components/UI/Markup";
import parseTimestamp from "utils/parseTimestamp";
import { useGetWindowWidth } from "hooks/useGetWindowWith";
import ru from '../../../lang/ru.json'
import uz from '../../../lang/uz.json'
import уз from '../../../lang/уз.json'
import en from '../../../lang/en.json'

const tags = ['# Узбекистан', '# Таможня', '# Шавкат Мирзиёев.', '# Экономика']

const SingleNews = ({ news = {} }) => {
    const windowWidth = useGetWindowWidth()
    const langData = {
        uz,
        уз,
        ru,
        en
    }
    const router = useRouter()
    const { hours, minutes, year, month, data } = parseTimestamp(news?.publishDate)

    return (
        <LayoutChildWrapper asideComponent={<Aside />}>
            <main className={cls.main}>
                <GoToBack title={langData[router.locale].lastNew} />
                <div className={cls.main__wrapper}>
                    <h2 className={cls.main__title}>{news?.[router?.locale]?.title}</h2>
                    <NewsCard
                        cutLine={false}
                        id={news?.id}
                        time={news?.publishDate}
                        category={news?.mainCategory?.[router?.locale]}
                        title={news?.[router?.locale]?.shortDescription}
                    />
                    <div className={cls.main__image}>
                        {news?.file && <Image
                            src={news?.file || ''}
                            layout="fill"
                            objectFit="cover"
                            alt="Image"
                        />}
                    </div>
                    <div className={cls.main__desc}>
                        <Markup html={news?.[router?.locale]?.description} />
                    </div>
                    <time className={cls.main__time}>{`${data} ${month}, ${year}  ${hours}:${minutes}`}</time>
                </div>
                <div className={cls.main__banner}>
                    <ShareBanner tags={news?.[router?.locale]?.tags} />
                </div>
                <div className={cls.main__cards}>
                    {/* <CardsGroup news={{...newsData['political-news'], withNavigation: true}} /> */}
                </div>
                {/* <div className={cls.main__recomended}>
                    <h4 className={cls.main__recomended__text}>Репортерские статьи</h4>
                    <RecomendedCardList items={newsData['last-news'].items} />
                </div> */}
            </main>
        </LayoutChildWrapper>
    );
}

export default SingleNews;