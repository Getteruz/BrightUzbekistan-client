import axios from "axios";
import SingleNews from "components/Pages/SingleNews";
import SEO from "components/SEO";

const SingleNewsPage = ({news = {}}) => {
    return (
        <>
            <SEO />
            <SingleNews news={news} />
        </>
    );
}

export default SingleNewsPage;

export async function getServerSideProps(ctx) {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/single-news/${ctx.params?.newsId}`)
    
    try {
        return {
            props: {
                news: res?.data
            }
        }
    } catch (error) {
        return {
            props: {

            }
        }
    }
}
