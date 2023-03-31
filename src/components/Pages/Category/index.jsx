import Aside from "components/UI/Aside/RightAside/News";
import GreyButton from "components/UI/Buttons/GreyButton";
import CardsGroup from "components/UI/CardsGroup";
import Flex from "components/UI/Flex";
import GoToBack from "components/UI/GoToBack";
import LayoutChildWrapper from "components/UI/LayoutChildWrapper";
import { useGetWindowWidth } from "hooks/useGetWindowWith";
import { useRouter } from "next/router";
import { newsData } from "./data";

const Category = () => {
    const router = useRouter()
    const windowWidth = useGetWindowWidth()
    return (
        <LayoutChildWrapper asideComponent={<Aside />}>
            <GoToBack title={newsData[router.query.categoryId]?.category} />
            <div style={windowWidth > 500 ? { padding: '17px 0 82px 0' } : { padding: '17px 0 42px 0' }}>
                <Flex
                    direction='column'
                    gap={windowWidth > 500 ? "84" : '25'}
                >
                    {
                        Array(3).fill(null).map((_, index) =>
                            <CardsGroup
                                key={index}
                                news={{ ...newsData[router.query.categoryId], withNavigation: false }}
                            />
                        )
                    }
                </Flex>
                <GreyButton label='загрузить еще' style={windowWidth > 500 ? { marginTop: '80px' } : { marginTop: '40px' }} />
            </div>
        </LayoutChildWrapper>
    );
}

export default Category;
