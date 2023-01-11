import Aside from "components/UI/Aside";
import Container from "components/UI/Container";
import Footer from "components/UI/Footer";
import Banner from "components/UI/Banner";

import cls from './Layot.module.scss'

const Layout = ({ children }) => {
    return (
        <>
            <Container className={cls.layout__container}>
                <div className={cls.layout__left__aside}>
                    <Aside />
                </div>
                <div className={cls.layout__main}>
                    <div className={cls.layout__main__wrapper}>
                        <div className={cls.layout__main__content}>
                            {children}
                        </div>
                        <div className={cls.layout__main__aside}>

                        </div>
                    </div>
                    <Banner />
                </div>
            </Container>
            <Footer />
        </>
    );
}

export default Layout;
