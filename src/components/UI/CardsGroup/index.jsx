import createButtonStyleFromCategory from "utils/createButtonStyleFromCategory";
import { useGetWindowWidth } from "hooks/useGetWindowWith";
import AudioCard from "../AudioCard";
import AudioCartmobil from "./audioCart/audioCart";
import BusinessNews from "./BusinessNews";
import EconomicNews from "./EconomicNews";
import LastNews from "./LastNews";
import PoliticalNews from "./PoliticalNews";
import SocietyNews from "./SocietyNews";
import SportNews from "./SportNews";
import UzbekistanNews from "./UzbekistanNews";
import WorldNews from "./WorldNews";

const CardsGroup = ({news = [], category = '', withNavigation = false, ctgId = ''}) => {

    if(ctgId === '0191bfdd-9e68-48ee-b3da-59ea95519497' || category?.toLowerCase() === 'мировые'){
        return <WorldNews items={news} withNavigation={withNavigation} button={createButtonStyleFromCategory(category)} category={category} />
    } else if(ctgId === 'fa5d80e0-e8b4-4412-9d82-bad34e5a104b' || category?.toLowerCase() === 'узбекистан'){
        return <UzbekistanNews items={news} withNavigation={withNavigation} button={createButtonStyleFromCategory(category)} category={category} />
    } else if(ctgId === 'f6060976-5fb8-4e29-8e66-b69bbe1e0ffd' || category?.toLowerCase() === 'политика'){
        return <PoliticalNews items={news} withNavigation={withNavigation} button={createButtonStyleFromCategory(category)} category={category} />
    } else if(ctgId === '4ff57638-8469-4cda-8d02-5fd292d90902' || category?.toLowerCase() === 'экономика'){
        return <EconomicNews items={news} withNavigation={withNavigation} button={createButtonStyleFromCategory(category)} category={category} />
    } else if(ctgId === '425b923c-20ba-4070-b1e5-4c7313d17ace' || category?.toLowerCase() === 'бизнес'){
        return <BusinessNews items={news} withNavigation={withNavigation} button={createButtonStyleFromCategory(category)} category={category} />
    } else if(ctgId === 'cc9c8bf7-8ef5-4407-aa06-80086a8d4784' || category?.toLowerCase() === 'общество'){
        return <SocietyNews items={news} withNavigation={withNavigation} button={createButtonStyleFromCategory(category)} category={category} />
    } else if(ctgId === '99de4a92-38ac-4235-89fe-a5dd6ed4a3a2' || category?.toLowerCase() === "спорт"){
        return <SportNews items={news} withNavigation={withNavigation} button={createButtonStyleFromCategory(category)} category={category} />
    } else {
        return <LastNews items={news} withNavigation={withNavigation} button={createButtonStyleFromCategory(category)} category={category} />;
    }
}

export default CardsGroup;
