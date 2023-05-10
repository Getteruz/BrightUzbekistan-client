import Main from "components/Pages/Main";
import SEO from "components/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getCategories } from "services/category";
import { getLastNews, getNewsByMainCtg } from "services/news";
import { getRate } from "services/rate";

export default function Home({ rate = [], news = [], asideNews = [] }) {
  return (
    <>
      <SEO />  
      <Main rate={rate} news={news} asideNews={asideNews} />
    </>
  )
}

export async function getServerSideProps({ locale }) {
  let news = []
  const rate = await getRate() || []
  const categories = await getCategories()
  const lastNews = await getLastNews(locale, 5) || []

  news?.push({
    ctg: '',
    news: lastNews?.length > 0 ? lastNews?.items?.map(news => {
      const dto = { ...news?.[locale], ...news }
      delete dto?.[locale]
      return dto
    }) : []
  })

  const asideNews = await getLastNews(locale, 5, 2) || []

  await Promise.all(categories?.map(async ctg => {
    const ctgNews = await getNewsByMainCtg(ctg?.id, locale)
    news.push({
      ctg: ctg,
      news: ctgNews?.items?.map(news => {
        const dto = { ...news?.[locale], ...news }
        delete dto?.[locale]
        return dto
      }),
    })
  }))
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      rate,
      news,
      asideNews: asideNews?.items?.map(news => {
        const dto = { ...news?.[locale], ...news }
        delete dto?.[locale]
        return dto
      })
    }
  };
}