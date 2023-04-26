import Main from "components/Pages/Main";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getRate } from "services/rate";

export default function Home({rate}) {
  return (
    <>
      <SEO />
      <Main rate={rate} />
    </>
  )
}

export async function getServerSideProps({ locale }) {
  const rate = await getRate() || []
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      rate
    }
  };
}