import NewsCardList from 'components/UI/Cards/NewsCard/NewsCardList';
import NewsEconomicCard from 'components/UI/Cards/NewsEconomicCard';
import GroupWrapper from '../GroupWrapper';

const SocietyNews = ({
    withNavigation = true,
    button = {},
    category = '',
    items = []
}) => {
    return (
        <GroupWrapper withNavigation={withNavigation} button={button} category={category}>
            <NewsCardList items={items.slice(0,5) || []} />
        </GroupWrapper>
    );
}

export default SocietyNews;