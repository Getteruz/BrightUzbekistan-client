import NewsCardList from 'components/UI/Cards/NewsCard/NewsCardList';
import NewsEconomicCard from 'components/UI/Cards/NewsEconomicCard';
import GroupWrapper from '../GroupWrapper';

const EconomicNews = ({
    withNavigation = true,
    button = {},
    category = '',
    items = []
}) => {
    const [firstNews] = items.slice(0,1) || []
    return items?.length > 0 ? (
        <GroupWrapper withNavigation={withNavigation} button={button} category={category}>
            <NewsEconomicCard 
                id={firstNews?.id}
                title={firstNews?.ru?.title}
                time={firstNews?.publishDate}
                desc={firstNews?.ru?.shortDescription}
            />
            <div style={{padding: '0 50px'}}>
                <NewsCardList items={items.slice(1,5) || []} desc={false} />
            </div>
        </GroupWrapper>
    ) : <></>;
}

export default EconomicNews;