import CardsGroup from "components/UI/CardsGroup";
import Flex from "components/UI/Flex";
import GoToBack from "components/UI/GoToBack";
import LayoutChildWrapper from "components/UI/LayoutChildWrapper";
import { useTranslation } from "react-i18next";
import { newsData } from "../Main/data";
import cls from './LastNews.module.scss'

const LastNews = () => {
    const newsArray = Object.entries(newsData || {})
    const { t } = useTranslation()
    console.log(t('Последние новости'));
    return (    
        <LayoutChildWrapper>
            <main className={cls.main}>
                <GoToBack title={t('Последние новости')} />
                <Flex direction='column' gap='60'>
                    {
                        newsArray?.length > 0 && newsArray.map(([_, data]) => (
                            <CardsGroup
                                withNavigation={false}
                                key={data.id}
                                news={data}
                            />
                        ))
                    }
                </Flex>
            </main>
        </LayoutChildWrapper>
    );
}

export default LastNews;
