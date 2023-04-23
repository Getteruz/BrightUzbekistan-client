import Main from "components/Pages/Main";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {

  return (
    <>
      <SEO />
      <Main />
    </>
  )
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    }
  };
}