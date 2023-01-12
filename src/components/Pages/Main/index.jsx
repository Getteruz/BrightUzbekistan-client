import CardsGroup from 'components/UI/CardsGroup';
import Flex from 'components/UI/Flex';
import Rate from 'components/UI/Rate';
import { newsData } from './data';
import cls from './Main.module.scss'

const Main = () => {
    const newsArray = Object.entries(newsData || {})

    return (
        <main className={cls.main}>
            <Rate />
            <div style={{padding: '17px 0 82px 0'}}>
                <Flex
                    direction='column'
                    gap='130'
                >
                    {
                        newsArray.length > 0 && newsArray.map(([_, data]) => (
                            <CardsGroup
                                key={data.id}
                                {...data}
                            />
                        ))
                    }
                </Flex>
            </div>
        </main>
    );
}

export default Main;
