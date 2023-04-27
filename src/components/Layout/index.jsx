import { useRouter } from "next/router";
import LeftAside from "components/UI/Aside/LeftAside";
import Container from "components/UI/Container";
import Footer from "components/UI/Footer";
import Banner from "components/UI/Banner";

import cls from './Layot.module.scss'
import { useQuery } from "react-query";
import { getCategories } from "services/category";
import useGetSize from "hooks/useGetSize";
import useGetWindowWidth from "hooks/useGetWindowWidth";

const Layout = ({ children, categories = [] }) => {
    const router = useRouter()
    const { data } = useQuery('categories', getCategories, { initialData: categories })
    const windowWidth = useGetWindowWidth()
    const { width } = useGetSize('leftAside')

    return (
        <>
            <Container className={cls.layout__container}>
                <div className={cls.layout__left__aside}>
                    <LeftAside categories={categories} />
                </div>
                <div className={cls.layout__main} style={{[windowWidth < 1260 && 'maxWidth']: `calc(100% - ${width}px)`}}>
                    <div className={cls.layout__main__wrapper}>
                        {children}
                    </div>
                    {router.pathname !== '/journal/[id]' && <Banner />}
                </div>
            </Container>
            <Footer />
        </>
    );
}

export default Layout;
