import Category from "components/Pages/Category";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getNewsByCtg } from "services/news";

const CategoryPage = ({news = []}) => {
    return (
        <>
            <SEO />
            <Category news={news} />
        </>
    );
}

export async function getServerSideProps({ locale, query }) {
    let news = await getNewsByCtg(query?.id, locale) || []
    
    news = news?.items?.map(news => {
      const dto = { ...news?.[locale], ...news }
      delete dto?.[locale]
      return dto
    })

    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
        news: news || []
      }
    };
  }

export default CategoryPage;