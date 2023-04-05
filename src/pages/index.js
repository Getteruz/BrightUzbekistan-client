import Main from "components/Pages/Main";
import SEO from "components/SEO";
import { getCategories } from "services/categories";
import { getLastNews, getNewsByMainCtg } from "services/news";

const lastNewsCtg = {
  uz: 'So\'ngi yan giliklar',
  ru: 'Последние новости',
  en: 'Hot news',
  'уз': 'сунги янгиликлар'
}

export default function Home({ news }) {

  return (
    <>
      <SEO />
      <Main news={news} />
    </>
  )
}

export async function getServerSideProps(ctx) {
  let news = []
  const categories = await getCategories()
  const lastNews = await getLastNews(ctx?.locale)

  news?.push([
    lastNewsCtg?.[ctx.locale], 
    lastNews?.map(news => ({ ru: { ...news?.[ctx?.locale] }, ...news })) || [], 
    false
  ])
  
  try {
    await Promise.all(categories?.map(async ctg => {
    const newsCtg = await getNewsByMainCtg(ctg?.id, ctx?.locale)
    news.push([ctg?.[ctx?.locale], newsCtg?.map(news => ({ ru: { ...news?.[ctx?.locale] }, ...news })), true])
  }))
  } catch (err) {
    console.log("error");
  }
  return {
    props: {
      news: news || []
    }
  }
}