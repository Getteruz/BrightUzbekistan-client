import LeftAside from "components/UI/Aside/LeftAside";
import Container from "components/UI/Container";
import Footer from "components/UI/Footer";
import Banner from "components/UI/Banner";

import cls from './Layot.module.scss'
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getCategories } from "services/categories";

const Layout = ({ children }) => {
    const router = useRouter()
    const {data: categories} = useQuery('categories', getCategories)
    console.log(categories);
    return (
        <>
            <Container className={cls.layout__container}>
                <div className={cls.layout__left__aside}>
                    <LeftAside categories={categories?.map(ctg => ({id: ctg.id, label: ctg.ru}))} />
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
