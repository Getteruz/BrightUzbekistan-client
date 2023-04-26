import LastNews from "components/Pages/LastNews";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


const LastNewsPage = () => {
    return (
        <>
            <SEO />
            <LastNews />
        </>
    );
}

export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        }
    };
}

export default LastNewsPage;
