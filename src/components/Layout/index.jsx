import LeftAside from "components/UI/Aside/LeftAside";
import Container from "components/UI/Container";
import Footer from "components/UI/Footer";
import Banner from "components/UI/Banner";

import cls from './Layot.module.scss'

const Layout = ({ children }) => {
    return (
        <>
            <Container className={cls.layout__container}>
                <div className={cls.layout__left__aside}>
                    <LeftAside />
                </div>
                <div className={cls.layout__main}>
                    <div className={cls.layout__main__wrapper}>
                        {children}
                    </div>
                    <Banner />
                </div>
            </Container>
            <Footer />
        </>
    );
}

export default Layout;
