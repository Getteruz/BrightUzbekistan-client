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
import Image from "next/image";

const CardsGroup = ({
    categoryName = '',
    categoryId = '',
    news = [],
    withNavigation = false,
    grey = false,
    ...other
}) => {

    if (news?.length < 1) {
        return <></>
    } else {
        return (
            <div className={`${cls.wrapper} ${grey ? cls.grey : ''}`} {...other}>
                {
                    ['0191bfdd-9e68-48ee-b3da-59ea95519497', 'cc9c8bf7-8ef5-4407-aa06-80086a8d4784'].includes(categoryId) && (
                        <div className={cls.wrapper__ads}>
                            <Image 
                                src='/ads/avto_lizing_short_banner.svg'
                                layout="fill"
                                objectFit="cover"
                                alt="ads"
                            />
                        </div>
                    )
                }
                {withNavigation && <Navigation
                    title={categoryName}
                    label={categoryName}
                    link={`/category/${categoryId}`}
                    color={categoryColor?.[categoryId]}
                />}
                {
                    (() => {
                        if (categoryId === categories?.['Мир']) {
                            return <WorldNews items={news} />
                        } else if (categoryId === categories?.['Узбекистан']) {
                            return <UzbekistanNews items={news} />
                        } else if (categoryId === categories?.['Политика']) {
                            return <PoliticalNews items={news} />
                        } else if (categoryId === categories?.['Экономика']) {
                            return <EconomicNews items={news} />
                        } else if (categoryId === categories?.['Бизнес']) {
                            return <BusinessNews items={news} />
                        } else if (categoryId === categories?.['Общество']) {
                            return <SocietyNews items={news} />
                        } else if (categoryId === categories?.['Спорт']) {
                            return <SportNews items={news} />
                        } else {
                            return <LastNews items={news} />;
                        }
                    })()
                }
            </div>
        )
    }
}

export default CardsGroup;
