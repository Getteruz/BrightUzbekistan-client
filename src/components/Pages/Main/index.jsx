import { useRouter } from 'next/router';
import LayoutChildWrapper from 'components/UI/LayoutChildWrapper';
import CardsGroup from 'components/UI/CardsGroup';
import Aside from 'components/UI/Aside/RightAside/Form';
import Flex from 'components/UI/Flex';
import Rate from 'components/UI/Rate';
import cls from './Main.module.scss'

const Main = ({ rate = [], news = [] }) => {
    const router = useRouter()
    
    return (
        <LayoutChildWrapper asideComponent={<Aside news={news?.[0]?.news?.slice(0,2)} />}>
            <main className={cls.main}>
                <Rate rate={rate} />
                <div className={cls.main__cards}>
                    <Flex direction='column' gap='60'>
                        {
                            news.length > 0 && news.map((news, index) => (
                                <CardsGroup
                                    key={index}
                                    news={news?.news}
                                    categoryName={news?.ctg?.[router?.locale]}
                                    categoryId={news?.ctg?.id}
                                    withNavigation={index !== 0}
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
