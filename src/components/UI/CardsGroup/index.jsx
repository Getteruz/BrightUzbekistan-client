import createButtonStyleFromCategory from "utils/createButtonStyleFromCategory";
import BusinessNews from "./BusinessNews";
import EconomicNews from "./EconomicNews";
import LastNews from "./LastNews";
import PoliticalNews from "./PoliticalNews";
import SocietyNews from "./SocietyNews";
import SportNews from "./SportNews";
import UzbekistanNews from "./UzbekistanNews";
import WorldNews from "./WorldNews";

const CardsGroup = ({news = [], category = '', withNavigation = false}) => {
    if(category?.toLowerCase() === 'мировые'){
        return <WorldNews items={news} withNavigation={withNavigation} button={createButtonStyleFromCategory(category)} category={category} />
    } else if(category?.toLowerCase() === 'узбекистан'){
        return <UzbekistanNews items={news} withNavigation={withNavigation} button={createButtonStyleFromCategory(category)} category={category} />
    } else if(category?.toLowerCase() === 'политика'){
        return <PoliticalNews items={news} withNavigation={withNavigation} button={createButtonStyleFromCategory(category)} category={category} />
    } else if(category?.toLowerCase() === 'экономика'){
        return <EconomicNews items={news} withNavigation={withNavigation} button={createButtonStyleFromCategory(category)} category={category} />
    } else if(category?.toLowerCase() === 'бизнес'){
        return <BusinessNews items={news} withNavigation={withNavigation} button={createButtonStyleFromCategory(category)} category={category} />
    } else if(category?.toLowerCase() === 'общество'){
        return <SocietyNews items={news} withNavigation={withNavigation} button={createButtonStyleFromCategory(category)} category={category} />
    } else if(category?.toLowerCase() === "спорт"){
        return <SportNews items={news} withNavigation={withNavigation} button={createButtonStyleFromCategory(category)} category={category} />
    } else {
        return <LastNews items={news} withNavigation={withNavigation} button={createButtonStyleFromCategory(category)} category={category} />;
    }
}

export default CardsGroup;
