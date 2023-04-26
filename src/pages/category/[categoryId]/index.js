import Category from "components/Pages/Category";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const CategoryPage = () => {
    return (
        <>
            <SEO />
            <Category />
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

export default CategoryPage;