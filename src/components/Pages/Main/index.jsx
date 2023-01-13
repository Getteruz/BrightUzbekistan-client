import CardsGroup from 'components/UI/CardsGroup';
import Flex from 'components/UI/Flex';
import LayoutChildWrapper from 'components/UI/LayoutChildWrapper';
import Rate from 'components/UI/Rate';
import Aside from 'components/UI/Aside/RightAside/Form';
import { newsData } from './data';
import cls from './Main.module.scss'

const Main = () => {
    const newsArray = Object.entries(newsData || {})

    return (
        <LayoutChildWrapper asideComponent={<Aside />}>
            <main className={cls.main}>
                <Rate />
                <div style={{ padding: '17px 0 82px 0' }}>
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
        </LayoutChildWrapper>
    );
}

export default Main;
