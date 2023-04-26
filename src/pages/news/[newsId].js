import SingleNews from "components/Pages/SingleNews";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const SingleNewsPage = () => {
    return (
        <>
            <SEO />
            <SingleNews />
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

export default SingleNewsPage;
