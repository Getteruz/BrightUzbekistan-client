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
    const [thirdNews] = items?.slice(2,3) || []
    return items?.length > 0 ?  (
        <GroupWrapper withNavigation={withNavigation} button={button} category={category}>
            <Flex rowCount={2} gap='48' direction='row'>
                {items?.slice(0,2)?.length > 0 && items.slice(0,2).map(item => <NewsBusinessCard 
                    key={item.id}
                    id={item?.id}
                    title={item?.ru?.title}
                    time={item?.publishDate}
                    category={item?.mainCategory?.ru}
                />)}
            </Flex>
            {thirdNews && <NewsImageCard 
                direction='column' 
                reverse={true} 
                id={thirdNews?.id}
                title={thirdNews?.ru?.title}
                image={thirdNews?.ru?.file}
                time={thirdNews?.publishDate}
                category={thirdNews?.mainCategory?.ru}
                desc={thirdNews?.ru?.shortDescription}
            />}
            {items.slice(3,7)?.length > 0 && <NewsCardList items={items.slice(3,7) || []} desc={false} />}
        </GroupWrapper>
    ) : <></>;
}

export default BusinessNews;