import LastNews from "components/Pages/LastNews";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getLastNews } from "services/news";


const LastNewsPage = ({ news = [] }) => {
    return (
        <>
            <SEO />
            <LastNews news={news} />
        </>
    );
}

export async function getServerSideProps({ locale }) {
    let news = await getLastNews(locale) || []

    news = news?.items?.map(news => {
        const dto = { ...news?.[locale], ...news }
        delete dto?.[locale]
        return dto
    })

    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            news
        }
    };
}

export default LastNewsPage;
