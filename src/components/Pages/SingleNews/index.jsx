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
import Markup from "components/UI/Markup";
import parseTimestamp from "utils/parseTimestamp";
import { ClockIcon } from "components/UI/icons";


const SingleNews = ({news = {}}) => {
    const {year, data, hours, minutes, month} = parseTimestamp(news?.created_at)
    
    return (
        <LayoutChildWrapper asideComponent={<Aside />}>
            <main className={cls.main}>
                <GoToBack title="Последние новости" />
                <div className={cls.main__wrapper}>
                    <h2 className={cls.main__title}>{news?.ru?.title}</h2>
                    <div className={cls.main__time}>
                        <span><ClockIcon />{`${hours}:${minutes}`}</span>
                        <span>{news?.categories?.[0]?.ru}</span>
                    </div>
                    <h3 className={cls.main__subtitle}>{news?.ru?.shortDescription}</h3>
                    <div className={cls.main__image}>
                        <Image
                            src={news?.ru?.file || '/Images/prezident.webp'}
                            layout="fill"
                            objectFit="cover"
                            alt="Image"
                        />
                    </div>
                    <Markup html={news?.ru?.description} />
                    <time className={cls.main__time}>{`${data} ${month}, ${year}.  ${hours}:${minutes}`}</time>
                </div>
                <div className={cls.main__banner}>
                    <ShareBanner tags={news?.ru?.tags} />
                </div>
                <div className={cls.main__cards}>
                    <CardsGroup news={{...newsData['political-news'], withNavigation: true}} />
                </div>
                <div className={cls.main__recomended}>
                    <h4 className={cls.main__recomended__text}>Репортерские статьи</h4>
                    <RecomendedCardList items={newsData['last-news'].items}/>
                </div>
            </main>
        </LayoutChildWrapper>
    );
}

export default SingleNews;
