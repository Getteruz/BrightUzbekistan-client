import NewsCardList from 'components/UI/Cards/NewsCard/NewsCardList';
import NewsEconomicCard from 'components/UI/Cards/NewsEconomicCard';
import { useGetWindowWidth } from 'hooks/useGetWindowWith';
import GroupWrapper from '../GroupWrapper';

const EconomicNews = ({
    withNavigation = true,
    button = {},
    category = '',
    items = []
}) => {
    const windowWidth = useGetWindowWidth()
    const [firstNews] = items.slice(0,1) || []
    return items?.length > 0 ? (
        <GroupWrapper withNavigation={withNavigation} button={button} category={category}>
            <NewsEconomicCard 
                id={firstNews?.id}
                title={firstNews?.ru?.title}
                time={firstNews?.publishDate}
                desc={firstNews?.ru?.shortDescription}
            />
            <div style={windowWidth > 500 ? { padding: '0 50px' } : { padding: '0' }}>
                <NewsCardList items={items.slice(1, 5) || []} desc={false} />
            </div>
        </GroupWrapper>
    ) : <></>;
}

export default EconomicNews;