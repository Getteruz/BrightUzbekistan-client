import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getCategories } from "services/categories";
import LeftAside from "components/UI/Aside/LeftAside";
import Container from "components/UI/Container";
import Footer from "components/UI/Footer";
import Banner from "components/UI/Banner";

import cls from './Layot.module.scss'
import Rate from "components/UI/Rate";
import NavbarResponse from "components/UI/navbarResponse/navbarResponse";
import { useGetWindowWidth } from "hooks/useGetWindowWith";

const Layout = ({ children }) => {
    const windowWidth = useGetWindowWidth()
    const router = useRouter()
    const { data: categories } = useQuery('categories', getCategories)

    return (
        <>
            <Container className={cls.layout__container}>
                <div className={cls.layout__left__aside}>
                    <LeftAside categories={categories} />
                </div>
                <div className={cls.layout__main}>
                    {windowWidth < 501 && <Rate />}
                    {windowWidth < 501 && <NavbarResponse categories={categories} />}
                    <div className={cls.layout__main__wrapper}>
                        {children}
                    </div>
                    {router.pathname !== '/journal-one' && <Banner />}
                </div>
            </Container>

            <Footer />
        </>
    );
}

export default Layout;