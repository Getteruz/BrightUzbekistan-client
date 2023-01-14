import NewsBusinessCard from 'components/UI/Cards/NewsBusinessCard';
import NewsCardList from 'components/UI/Cards/NewsCard/NewsCardList';
import NewsImageCard from 'components/UI/Cards/NewsImageCard';
import Flex from 'components/UI/Flex';
import GroupWrapper from '../GroupWrapper';

const BusinessNews = ({
    withNavigation = true,
    button = {},
    category = '',
    items = []
}) => {
    return (
        <GroupWrapper withNavigation={withNavigation} button={button} category={category}>
            <Flex rowCount={2} gap='48' direction='row'>
                {items?.slice(0,2)?.length > 0 && items.slice(0,2).map(item => <NewsBusinessCard key={item.id} {...item}/>)}
            </Flex>
            <NewsImageCard direction='column' {...items?.slice(2,3)?.[0]} reverse={true} />
            <NewsCardList items={items.slice(3,7) || []} desc={false} />
        </GroupWrapper>
    );
}

export default BusinessNews;