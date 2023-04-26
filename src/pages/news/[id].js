import SingleNews from "components/Pages/SingleNews";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getLastNews, getNewsById } from "services/news";

const SingleNewsPage = ({ news = {}, lastnews = []}) => {
    return (
        <>
            <SEO />
            <SingleNews news={news} lastnews={lastnews} />
        </>
    );
}

export async function getServerSideProps({ locale, query }) {
    let news = await getNewsById(query?.id, locale) || {}
    let lastnews = await getLastNews(locale, 6)

    lastnews = lastnews?.map(news => {
      const dto = { ...news?.[locale], ...news }
      delete dto?.[locale]
      return dto
    })
    news = {...news?.[locale], ...news}
    delete news?.[locale]

    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
        news,
        lastnews
      }
    };
  }

export default SingleNewsPage;
