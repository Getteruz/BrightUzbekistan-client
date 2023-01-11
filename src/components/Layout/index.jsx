import Aside from "components/UI/Aside";
import Container from "components/UI/Container";
import Footer from "components/UI/Footer";
import Banner from "components/UI/Banner";

const Layout = ({ children }) => {
    return (
        <>
            <Container style={{display: 'block'}}>
                <div style={{display: 'flex', alignItems: 'flex-start'}}>
                    <Aside />
                    {children}
                </div>
                <Banner />
            </Container>
            <Footer />
        </>
    );
}

export default Layout;
