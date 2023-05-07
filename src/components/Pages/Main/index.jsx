import { useRouter } from 'next/router';
import LayoutChildWrapper from 'components/UI/LayoutChildWrapper';
import CardsGroup from 'components/UI/CardsGroup';
import Aside from 'components/UI/Aside/RightAside/Form';
import Flex from 'components/UI/Flex';
import Rate from 'components/UI/Rate';
import cls from './Main.module.scss'
import useGetWindowWidth from 'hooks/useGetWindowWidth';
import JournalCarousel from 'components/UI/JournalCarousel';
import { useQuery } from 'react-query';
import { getRate } from 'services/rate';
import React from 'react';

const Main = ({ rate = [], news = [], asideNews = [] }) => {
    const router = useRouter()
    const windowWidth = useGetWindowWidth() || 1024
    useQuery('rate', getRate, { initialData: rate })

    return (
        <LayoutChildWrapper asideComponent={<Aside news={asideNews?.slice(0, 2)} />}>
            <main className={cls.main}>
                {windowWidth > 670 && <Rate rate={rate} />}
                <div className={cls.main__cards}>
                    <Flex direction='column' gap={windowWidth > 550 ? '60' : 0}>
                        {
                            news.length > 0 && news.map((news, index) => (
                                windowWidth > 1000 ? (
                                    <CardsGroup
                                        key={index}
                                        news={news?.news}
                                        categoryName={news?.ctg?.[router?.locale]}
                                        categoryId={news?.ctg?.id}
                                        withNavigation={index !== 0}
                                    />) : (
                                    <React.Fragment key={index}>
                                        <CardsGroup
                                            news={news?.news}
                                            categoryName={news?.ctg?.[router?.locale]}
                                            categoryId={news?.ctg?.id}
                                            withNavigation={index !== 0}
                                        // grey={index % 2 && windowWidth < 550 ? true : false}
                                        />
                                        {index === 0 && <JournalCarousel />}
                                    </React.Fragment>
                                )
                            ))
                        }
                    </Flex>
                </div>
            </main>
        </LayoutChildWrapper>
    );
}

export default Main;
