import NewsCardList from 'components/UI/Cards/NewsCard/NewsCardList';
import NewsImageCard from 'components/UI/Cards/NewsImageCard';
import GroupWrapper from '../GroupWrapper';

const SportNews = ({
    withNavigation = true,
    button = {},
    category = '',
    items = []
}) => {
    const [firstNews] = items?.slice(0,1) || []
    return items?.length > 0 ? (
        <GroupWrapper withNavigation={withNavigation} button={button} category={category}>
            <NewsImageCard
                direction='column' 
                reverse={true}
                id={firstNews?.id}
                title={firstNews?.ru?.title}
                time={firstNews?.publishDate}
                category={firstNews?.mainCategory?.ru}
                desc={firstNews?.ru?.shortDescription}
                image={firstNews?.ru?.file}
            />
            <NewsCardList items={items.slice(1,6) || []} desc={false} />
        </GroupWrapper>
    ): <></>;
}

export default SportNews;