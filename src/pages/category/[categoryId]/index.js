import Category from "components/Pages/Category";
import SEO from "components/SEO";
import { getNewsByCtg } from "services/news";

const CategoryPage = ({ news }) => {
    let result = [];
    for (let i = 0; i < news.length; i += 5) {
        result.push(news.slice(i, i + 5));
    }
    return (
        <>
            <SEO />
            <Category news={result} />
        </>
    );
}

export default CategoryPage;

export async function getServerSideProps(ctx) {
    let news = await getNewsByCtg(ctx?.query?.categoryId)
    news = news?.map(news => ({ru: {...news?.[ctx?.locale]}, ...news}))
    
    return {
        props: {
            news: news || []
        }
    }
}