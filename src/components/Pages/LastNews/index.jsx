import Aside from "components/UI/Aside/RightAside/News";
import CardsGroup from "components/UI/CardsGroup";
import Flex from "components/UI/Flex";
import GoToBack from "components/UI/GoToBack";
import LayoutChildWrapper from "components/UI/LayoutChildWrapper";
import { useTranslation } from "next-i18next";
import cls from './LastNews.module.scss'

const LastNews = ({ news = [] }) => {
    let slicedArr = []
    const { t } = useTranslation()
    
    for (let i = 0; i < news.length; i += 5) {
        slicedArr.push(news.slice(i, i + 5));
    }

    return (
        <LayoutChildWrapper asideComponent={<Aside news={news?.slice(0, 5)} />}>
            <main className={cls.main}>
                <GoToBack title={t('Последние новости')} />
                <Flex direction='column' gap='60'>
                    {
                        slicedArr?.length > 0 && slicedArr.map((news) => (
                            <CardsGroup
                                key={news?.id}
                                news={news}
                            />
                        ))
                    }
                </Flex>
            </main>
        </LayoutChildWrapper>
    );
}

export default LastNews;
