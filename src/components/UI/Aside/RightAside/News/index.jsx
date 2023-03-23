import GreyButton from 'components/UI/Buttons/GreyButton';
import NewsCard from 'components/UI/Cards/NewsCard';
import Flex from 'components/UI/Flex';
import { RightArrows } from 'components/UI/icons';
import { newsData } from './data';
import cls from './News.module.scss'

const Aside = () => {
    return (
        <>
            <div className={cls.cards__wrapper}>
                <Flex direction='column' gap='27'>
                    {/* {
                        newsData?.length > 0 && newsData.map(news => 
                            <NewsCard 
                                key={news.id}
                                {...news}
                            />    
                        )
                    } */}
                </Flex>
            </div>
            {/* <GreyButton label='все новости' icon={RightArrows} /> */}
        </>
    );
}

export default Aside;
