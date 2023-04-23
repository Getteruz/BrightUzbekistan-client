import LeftAside from "components/UI/Aside/LeftAside";
import Container from "components/UI/Container";
import Footer from "components/UI/Footer";
import Banner from "components/UI/Banner";

import cls from './Layot.module.scss'
import { useRouter } from "next/router";

const Layout = ({ children, categories = [] }) => {
    const router = useRouter()
    return (
        <>
            <Container className={cls.layout__container}>
                <div className={cls.layout__left__aside}>
                    <LeftAside categories={categories} />
                </div>
                <div className={cls.layout__main}>
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
