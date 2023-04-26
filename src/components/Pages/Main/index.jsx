import LayoutChildWrapper from 'components/UI/LayoutChildWrapper';
import CardsGroup from 'components/UI/CardsGroup';
import Aside from 'components/UI/Aside/RightAside/Form';
import Flex from 'components/UI/Flex';
import Rate from 'components/UI/Rate';
import { newsData } from './data';
import cls from './Main.module.scss'

const Main = ({ rate }) => {
    const newsArray = Object.entries(newsData || {})

    return (
        <LayoutChildWrapper asideComponent={<Aside />}>
            <main className={cls.main}>
                <Rate rate={rate} />
                <div className={cls.main__cards}>
                    <Flex direction='column' gap='60'>
                        {
                            newsArray.length > 0 && newsArray.map(([_, data]) => (
                                <CardsGroup
                                    key={data.id}
                                    news={data}
                                />
                            ))
                        }
                    </Flex>
                </div>
            </main>
        </LayoutChildWrapper>
    );
}

export default Main;
