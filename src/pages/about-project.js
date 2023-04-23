import AboutUs from "components/Pages/AboutUs";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function AboutUsPage() {

  return (
    <>
      <SEO />
      <AboutUs />
    </>
  )
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", 'about'])),
    }
  };
}