import LayoutChildWrapper from 'components/UI/LayoutChildWrapper';
import CardsGroup from 'components/UI/CardsGroup';
import Aside from 'components/UI/Aside/RightAside/Form';
import Flex from 'components/UI/Flex';
import Rate from 'components/UI/Rate';
import { newsData } from './data';
import cls from './Main.module.scss'
import NavbarResponse from 'components/UI/navbarResponse/navbarResponse';
import { useGetWindowWidth } from 'hooks/useGetWindowWith';

const Main = () => {
    const newsArray = Object.entries(newsData || {})
    const windowWidth = useGetWindowWidth()
    return (
        <LayoutChildWrapper asideComponent={<Aside />}>
            <main className={cls.main}>
                <Rate />
                {windowWidth < 501 && <NavbarResponse />}
                <div style={{ padding: '17px 0 82px 0' }}>
                    <Flex
                        direction='column'
                        gap={windowWidth > 500 ? "84" : '30'}
                    >
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
