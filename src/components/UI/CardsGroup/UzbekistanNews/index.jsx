import NewsCardList from 'components/UI/Cards/NewsCard/NewsCardList';
import NewsImageCard from 'components/UI/Cards/NewsImageCard';
import GroupWrapper from '../GroupWrapper';

const UzbekistanNews = ({
    withNavigation = true,
    button = {},
    category = '',
    items = []
}) => {
    return (
        <GroupWrapper withNavigation={withNavigation} button={button} category={category}>
            <NewsCardList items={items.slice(0,4) || []} desc={false} />
            {items?.slice(4,5)?.length > 0 && <NewsImageCard {...items.slice(4,5)?.[0]} direction='column' />}
        </GroupWrapper>
    );
}

export default UzbekistanNews;
