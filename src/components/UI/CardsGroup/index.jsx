import BusinessNews from "./BusinessNews";
import EconomicNews from "./EconomicNews";
import LastNews from "./LastNews";
import PoliticalNews from "./PoliticalNews";
import SocietyNews from "./SocietyNews";
import SportNews from "./SportNews";
import UzbekistanNews from "./UzbekistanNews";
import WorldNews from "./WorldNews";
import Navigation from "./Navigation";
import {categoryColor} from '../../../constants/category'
import cls from './CardsGroup.module.scss'

const CardsGroup = ({news = {}, withNavigation = true}) => {
    
    return (
        <div className={cls.wrapper}>
            {withNavigation && <Navigation 
                title="Мировые"
                label="Мировые"
                color={categoryColor?.['f6060976-5fb8-4e29-8e66-b69bbe1e0ffd']}
            />}
            {
                (() => {
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
                })()
            }
        </div>
    )
}

export default CardsGroup;
