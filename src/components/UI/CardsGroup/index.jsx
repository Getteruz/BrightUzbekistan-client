import BusinessNews from "./BusinessNews";
import EconomicNews from "./EconomicNews";
import LastNews from "./LastNews";
import PoliticalNews from "./PoliticalNews";
import SocietyNews from "./SocietyNews";
import SportNews from "./SportNews";
import UzbekistanNews from "./UzbekistanNews";
import WorldNews from "./WorldNews";
import Navigation from "./Navigation";
import { categories, categoryColor } from '../../../constants/category'
import cls from './CardsGroup.module.scss'
import { useRouter } from "next/router";
import MiddleAds from "../Ads/Middle";

const CardsGroup = ({
    categoryName = '',
    categoryId = '',
    news = [],
    withNavigation = false,
    grey = false,
    withAds = false,
    ...other
}) => {
    const router = useRouter()

    if (news?.length < 1) {
        return <></>
    } else {
        return (
            <div className={`${cls.wrapper} ${grey ? cls.grey : ''} ${categoryId == '' ? cls.wrapcard : ''}`} {...other}>
                {router.pathname === '/' && <MiddleAds />}
                {withNavigation && <Navigation
                    title={categoryName}
                    label={categoryName}
                    link={`/category/${categoryId}`}
                    color={categoryColor?.[categoryId]}
                />}
                {
                    (() => {
                        if (categoryId === categories?.['Мир']) {
                            return <WorldNews items={news} withAds={withAds} />
                        } else if (categoryId === categories?.['Узбекистан']) {
                            return <UzbekistanNews items={news} withAds={withAds} />
                        } else if (categoryId === categories?.['Политика']) {
                            return <PoliticalNews items={news} withAds={withAds} />
                        } else if (categoryId === categories?.['Экономика']) {
                            return <EconomicNews items={news} withAds={withAds} />
                        } else if (categoryId === categories?.['Бизнес']) {
                            return <BusinessNews items={news} withAds={withAds} />
                        } else if (categoryId === categories?.['Общество']) {
                            return <SocietyNews items={news} withAds={withAds} />
                        } else if (categoryId === categories?.['Спорт']) {
                            return <SportNews items={news} withAds={withAds} />
                        } else {
                            return <LastNews items={news} withAds={withAds} />;
                        }
                    })()
                }
            </div>
        )
    }
}

export default CardsGroup;
