import Aside from "components/UI/Aside/RightAside/News";
import CardsGroup from "components/UI/CardsGroup";
import Flex from "components/UI/Flex";
import GoToBack from "components/UI/GoToBack";
import LayoutChildWrapper from "components/UI/LayoutChildWrapper";
import { useRouter } from "next/router";
import { newsData } from "./data";

const Category = () => {
    const router = useRouter()

    return (
        <LayoutChildWrapper asideComponent={<Aside />}>
            <GoToBack />
            <div style={{ padding: '17px 0 82px 0' }}>
                <Flex
                    direction='column'
                    gap='84'
                >
                    {
                        Array(3).fill(null).map((_, index) =>
                            <CardsGroup
                                key={index}
                                news={{...newsData[router.query.categoryId], withNavigation: false}}
                            />
                        )
                    }
                </Flex>
            </div>
        </LayoutChildWrapper>
    );
}

export default Category;
