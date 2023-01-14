import BusinessNews from "./BusinessNews";
import EconomicNews from "./EconomicNews";
import LastNews from "./LastNews";
import PoliticalNews from "./PoliticalNews";
import SocietyNews from "./SocietyNews";
import SportNews from "./SportNews";
import UzbekistanNews from "./UzbekistanNews";
import WorldNews from "./WorldNews";

const CardsGroup = ({news = {}}) => {
    if(news?.category?.toLowerCase() === 'мировые'){
        return <WorldNews {...news}/>
    } else if(news?.category?.toLowerCase() === 'узбекистан'){
        return <UzbekistanNews {...news}/>
    } else if(news?.category?.toLowerCase() === 'политика'){
        return <PoliticalNews {...news}/>
    } else if(news?.category?.toLowerCase() === 'экономика'){
        return <EconomicNews {...news}/>
    } else if(news?.category?.toLowerCase() === 'бизнес'){
        return <BusinessNews {...news}/>
    } else if(news?.category?.toLowerCase() === 'общество'){
        return <SocietyNews {...news}/>
    } else if(news?.category?.toLowerCase() === "спорт"){
        return <SportNews {...news}/>
    } else {
        return <LastNews {...news}/>;
    }
}

export default CardsGroup;
