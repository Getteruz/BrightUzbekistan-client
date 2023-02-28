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
    return (
        <GroupWrapper withNavigation={withNavigation} button={button} category={category}>
            {items?.slice(0, 1)?.length > 0 && <NewsImageCard {...items.slice(0, 1)?.[0]} image='' />}
            <Flex gap='28' direction='row' rowCount={2}>
                {items?.slice(1, 3)?.length > 0 && items.slice(1, 3).map(item =>
                    <NewsBorderCard {...item} key={item.id} />
                )}
            </Flex>
        </GroupWrapper>
    );
}

export default PoliticalNews;