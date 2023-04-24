import Journal from "components/Pages/SingleJournal";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


const JournalPage = () => {
    return (
        <>
            <SEO />
            <Journal />
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

export default JournalPage;
