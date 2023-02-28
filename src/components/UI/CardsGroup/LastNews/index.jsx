import NewsImageCard from '../../Cards/NewsImageCard';
import GroupWrapper from '../GroupWrapper';
import NewsCardList from 'components/UI/Cards/NewsCard/NewsCardList';

const LastNews = ({
    withNavigation = true,
    button = {},
    category = '',
    items = []
}) => {
    return (
        <GroupWrapper withNavigation={withNavigation} button={button} category={category}>
            {items?.slice(0, 1)?.length > 0 && <NewsImageCard {...items?.slice(0, 1)?.[0]} />}
            <NewsCardList items={items?.slice(1, 5) || []} desc={false} />
        </GroupWrapper>
    );
}

export default LastNews;
