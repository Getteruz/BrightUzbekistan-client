import NewsBorderCard from 'components/UI/Cards/NewsBorderCard';
import NewsImageCard from 'components/UI/Cards/NewsImageCard';
import Flex from 'components/UI/Flex';
import GroupWrapper from '../GroupWrapper';

const PoliticalNews = ({
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
                time={firstNews?.publishDate}
                desc={firstNews?.ru?.shortDescription}
                category={firstNews?.mainCategory?.ru}
            />}
            <Flex gap='28' direction='row' rowCount={2}>
                {items?.slice(1, 3)?.length > 0 && items.slice(1, 3).map(item =>
                    <NewsBorderCard 
                        key={item.id} 
                        id={item?.id}
                        desc={item?.ru?.title}
                        image={item?.ru?.file}
                        time={item?.publishDate}
                        category={item?.mainCategory?.ru}
                    />
                )}
            </Flex>
        </GroupWrapper>
    ) : <></>;
}

export default PoliticalNews;