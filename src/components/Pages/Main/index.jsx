import LayoutChildWrapper from 'components/UI/LayoutChildWrapper';
import CardsGroup from 'components/UI/CardsGroup';
import Aside from 'components/UI/Aside/RightAside/Form';
import Flex from 'components/UI/Flex';
import Rate from 'components/UI/Rate';
import { newsData } from './data';
import cls from './Main.module.scss'
import LastNews from 'components/UI/CardsGroup/LastNews';

const Main = ({ news = [] }) => {
    const newsArray = Object.entries(newsData || {})
    let result = [];
    for (let i = 0; i < news.length; i += 5) {
        result.push(news.slice(i, i + 5));
    }
  
    return (
        <LayoutChildWrapper asideComponent={<Aside />}>
            <main className={cls.main}>
                <Rate />
                <div style={{ padding: '17px 0 82px 0' }}>
                    <Flex
                        direction='column'
                        gap='84'
                    >
                        {/* {
                            newsArray.length > 0 && newsArray.map(([_, data]) => (
                                <CardsGroup
                                    key={data.id}
                                    news={data}
                                />
                            ))
                        } */}
                        {
                            result?.map((item, index) => 
                                <LastNews key={index} items={item} withNavigation={false} />
                            )
                        }
                    </Flex>
                </div>
            </main>
        </LayoutChildWrapper>
    );
}

export default Main;
