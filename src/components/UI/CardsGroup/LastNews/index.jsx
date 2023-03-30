import NewsImageCard from '../../Cards/NewsImageCard';
import GroupWrapper from '../GroupWrapper';
import NewsCardList from 'components/UI/Cards/NewsCard/NewsCardList';
import { useGetWindowWidth } from 'hooks/useGetWindowWith';
import AudioCartmobil from '../audioCart/audioCart';

const LastNews = ({
    withNavigation = true,
    button = {},
    category = '',
    items = []
}) => {
    const windowWidth = useGetWindowWidth()
    return (
        <GroupWrapper withNavigation={withNavigation} button={button} category={category}>
            {items?.slice(0, 1)?.length > 0 && <NewsImageCard {...items?.slice(0, 1)?.[0]} />}
            <NewsCardList items={items?.slice(1, 5) || []} desc={false} />
        </GroupWrapper>

    );
}

export default LastNews;
