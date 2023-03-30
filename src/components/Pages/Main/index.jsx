import LayoutChildWrapper from 'components/UI/LayoutChildWrapper';
import CardsGroup from 'components/UI/CardsGroup';
import Aside from 'components/UI/Aside/RightAside/Form';
import Flex from 'components/UI/Flex';
import Rate from 'components/UI/Rate';
import data from './data';
import cls from './Main.module.scss'
import NavbarResponse from 'components/UI/navbarResponse/navbarResponse';
import { useGetWindowWidth } from 'hooks/useGetWindowWith';
import AudioCartmobil from 'components/UI/CardsGroup/audioCart/audioCart';

const Main = ({news = []}) => {
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
                            news?.length > 0 && news?.map((news, index) => (
                                <CardsGroup
                                    withNavigation
                                    key={index}
                                    news={news?.[1]}
                                    category={news?.[0]}
                                />
                            ))
                        }
                        {/* {windowWidth < 501 && <AudioCartmobil />} */}
                    </Flex>
                </div>
            </main>
        </LayoutChildWrapper>
    );
}

export default Main;
