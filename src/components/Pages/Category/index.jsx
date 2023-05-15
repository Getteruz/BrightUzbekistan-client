import Aside from "components/UI/Aside/RightAside/News";
import GreyButton from "components/UI/Buttons/GreyButton";
import CardsGroup from "components/UI/CardsGroup";
import Flex from "components/UI/Flex";
import GoToBack from "components/UI/GoToBack";
import LayoutChildWrapper from "components/UI/LayoutChildWrapper";
import useGetWindowWidth from "hooks/useGetWindowWidth";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import { newsData } from "./data";

const Category = ({ news = [] }) => {
    let slicedArr = []
    const router = useRouter()
    const queryClient = useQueryClient()
    const windowWidth = useGetWindowWidth()
    const [ctg] = queryClient.getQueryData('categories')?.filter(ctg => ctg.id === router.query?.id) || []

    for (let i = 0; i < news.length; i += 5) {
        slicedArr.push(news.slice(i, i + 5));
    }

    return (
        <LayoutChildWrapper asideComponent={<Aside news={news?.slice(0, 5)} />}>
            <GoToBack title={ctg?.[router.locale]} />
            <div style={{ padding: windowWidth > 550 ? '17px 0 82px 0' : '0 0 40px' }}>
                <Flex
                    direction='column'
                    gap={windowWidth > 550 ? '60' : '0'}
                >
                    {
                        slicedArr?.length > 0 && slicedArr.map((news, index) =>
                            <CardsGroup
                                key={news?.id}
                                news={news}
                                categoryId={router?.query?.id}
                                withAds={windowWidth < 550 && index === 0}
                            />
                        )
                    }
                </Flex>
                {/* <GreyButton label='загрузить еще' style={{marginTop: '80px'}}/> */}
            </div>
        </LayoutChildWrapper>
    );
}

export default Category;
