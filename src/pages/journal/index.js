import Journals from "components/Pages/Journals";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const JournalPage = () => {
    return (
        <>
            <SEO />
            <Journals />
        </>
    );
}

export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", 'journal'])),
        }
    };
}

export default JournalPage