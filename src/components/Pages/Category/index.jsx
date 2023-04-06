import Aside from "components/UI/Aside/RightAside/News";
import GreyButton from "components/UI/Buttons/GreyButton";
import CardsGroup from "components/UI/CardsGroup";
import Flex from "components/UI/Flex";
import GoToBack from "components/UI/GoToBack";
import LayoutChildWrapper from "components/UI/LayoutChildWrapper";
import { useGetWindowWidth } from "hooks/useGetWindowWith";
import { useRouter } from "next/router";
import { newsData } from "./data";
import ru from '../../../lang/ru.json'
import uz from '../../../lang/uz.json'
import уз from '../../../lang/уз.json'
import en from '../../../lang/en.json'
import Rate from "components/UI/Rate";
import NavbarResponse from "components/UI/navbarResponse/navbarResponse";

const Category = ({ news = [] }) => {
    const router = useRouter()
    const windowWidth = useGetWindowWidth()
    const langData = {
        uz,
        уз,
        ru,
        en
    }
    return (
        <LayoutChildWrapper asideComponent={<Aside />}>
            {windowWidth < 501 && <Rate />}
            {windowWidth < 501 && <NavbarResponse />}
            <GoToBack title={newsData[router.query.categoryId]?.category} />
            <div style={windowWidth > 500 ? { padding: '17px 0 82px 0' } : { padding: '17px 0 42px 0' }}>
                <Flex
                    direction='column'
                    gap={windowWidth > 500 ? "84" : '25'}
                >
                    {
                        news?.length > 0 && news.map((news, index) =>
                            <CardsGroup
                                key={index}
                                news={news}
                                withNavigation={false}
                            />
                        )
                    }
                </Flex>
                <GreyButton label={langData[router.locale]?.Load} style={windowWidth > 500 ? { marginTop: '80px' } : { marginTop: '40px' }} />
            </div>
        </LayoutChildWrapper>
    );
}

export default Category;
