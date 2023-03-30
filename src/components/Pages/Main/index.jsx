import LayoutChildWrapper from 'components/UI/LayoutChildWrapper';
import CardsGroup from 'components/UI/CardsGroup';
import Aside from 'components/UI/Aside/RightAside/Form';
import Flex from 'components/UI/Flex';
import Rate from 'components/UI/Rate';
import data from './data';
import cls from './Main.module.scss'

const Main = ({news = []}) => {
    console.log(news);
    return (
        <LayoutChildWrapper asideComponent={<Aside />}>
            <main className={cls.main}>
                <Rate />
                <div style={{ padding: '17px 0 82px 0' }}>
                    <Flex
                        direction='column'
                        gap='84'
                    >
                        {
                            news?.length > 0 && news?.map((news, index) => (
                                <CardsGroup
                                    withNavigation
                                    key={index}
                                    news={news?.[1]}
                                    category={news?.[0]}
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
