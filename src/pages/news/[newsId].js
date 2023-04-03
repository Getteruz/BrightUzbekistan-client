import SingleNews from "components/Pages/SingleNews";
import SEO from "components/SEO";
import { getNewsById } from "services/news";

const SingleNewsPage = ({news = {}}) => {
    return (
        <>
            <SEO />
            <SingleNews news={news}/>
        </>
    );
}

export default SingleNewsPage;

export async function getServerSideProps(ctx) {
    const news = await getNewsById(ctx?.query?.newsId, ctx?.locale)
    return {
        props: {
            news: news || {}
        }
    }
}