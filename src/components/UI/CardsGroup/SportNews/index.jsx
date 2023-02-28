import NewsCardList from 'components/UI/Cards/NewsCard/NewsCardList';
import NewsImageCard from 'components/UI/Cards/NewsImageCard';
import GroupWrapper from '../GroupWrapper';

const SportNews = ({
    withNavigation = true,
    button = {},
    category = '',
    items = []
}) => {
    return (
        <GroupWrapper withNavigation={withNavigation} button={button} category={category}>
            <NewsImageCard {...items?.slice(0,1)?.[0]} direction='column' reverse={true}/>
            <NewsCardList items={items.slice(1,6) || []} desc={false} />
        </GroupWrapper>
    );
}

export default SportNews;