import ContactUs from "components/Pages/ContactUs";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function ContactUsPage() {

  return (
    <>
      <SEO />
      <ContactUs />
    </>
  )
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", 'contact'])),
    }
  };
}