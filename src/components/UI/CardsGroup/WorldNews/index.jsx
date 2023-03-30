import NewsCardList from 'components/UI/Cards/NewsCard/NewsCardList';
import NewsImageCard from 'components/UI/Cards/NewsImageCard';
import GroupWrapper from '../GroupWrapper';

const WorldNews = ({
    withNavigation = true,
    button = {},
    category = '',
    items = []
}) => {
    const [lastNews] = items?.slice(4, 5) || []
    return items?.length > 0 ? (
        <GroupWrapper withNavigation={withNavigation} button={button} category={category}>
            <NewsCardList items={items.slice(0, 4) || []} desc={false} />
            {items?.slice(4, 5)?.length > 0 && <NewsImageCard 
                id={lastNews?.id}
                title={lastNews?.ru?.title}
                image={lastNews?.ru?.file}
                time={lastNews?.publishDate}
                desc={lastNews?.ru?.shortDescription}
                category={lastNews?.mainCategory?.ru}
            />}
        </GroupWrapper>
    ) : <></>;
}

export default WorldNews;
