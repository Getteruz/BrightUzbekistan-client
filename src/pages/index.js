import Main from "components/Pages/Main";
import SEO from "components/SEO";
import { getCategories } from "services/categories";
import { getNewsByMainCtg } from "services/news";

export default function Home({ news }) {
  
  return (
    <>
      <SEO />
      <Main news={news} />
    </>
  )
}

export async function getServerSideProps(ctx) {
  const news = []
  const categories = await getCategories()
  await Promise.all(categories?.map(async ctg => {
    const newsCtg = await getNewsByMainCtg(ctg?.id, ctx?.locale)
    news?.push([ctg?.[ctx?.locale], newsCtg?.map(news => ({ru: {...news?.[ctx?.locale]}, ...news}))])
  }))
  return {
    props: {
      news: news || []
    }
  }
}
