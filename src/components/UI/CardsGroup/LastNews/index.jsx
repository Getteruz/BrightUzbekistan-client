import NewsImageCard from '../../Cards/NewsImageCard';
import GroupWrapper from '../GroupWrapper';
import NewsCardList from 'components/UI/Cards/NewsCard/NewsCardList';

const LastNews = ({
    withNavigation = true,
    button = {},
    category = '',
    items = []
}) => {
    const [firstNews] = items?.slice(0, 1) || []
    
    return items?.length > 0 ? (
        <GroupWrapper withNavigation={withNavigation} button={button} category={category}>
            {items?.slice(0, 1)?.length > 0 && <NewsImageCard 
                id={firstNews?.id}
                title={firstNews?.ru?.title}
                image={firstNews?.ru?.file}
                time={firstNews?.publishDate}
                desc={firstNews?.ru?.shortDescription}
                category={firstNews?.mainCategory?.ru}
            />}
            <NewsCardList items={items?.slice(1, 5) || []} desc={false} />
        </GroupWrapper>
    ) : <></>;
}

export default LastNews;
