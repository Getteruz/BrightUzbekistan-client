import NewsImageCard from '../../Cards/NewsImageCard';
import GroupWrapper from '../GroupWrapper';
import NewsCardList from 'components/UI/Cards/NewsCard/NewsCardList';

const LastNews = ({
    withNavigation = true,
    button = {},
    category = '',
    items = []
}) => {
    const firtsNews = items?.slice(0, 1)?.[0]
    
    return (
        <GroupWrapper withNavigation={withNavigation} button={button} category={category}>
            {firtsNews && <NewsImageCard
                ru={firtsNews?.ru}
                publishDate={firtsNews?.created_at}
                categories={firtsNews?.categories?.map(ctg => ctg.ru)}
                id={firtsNews?.id}
            />}
            <NewsCardList items={items?.slice(1, 5) || []} desc={false} />
        </GroupWrapper>
    );
}

export default LastNews;
