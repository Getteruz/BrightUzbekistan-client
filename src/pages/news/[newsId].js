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
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/news/${ctx.params?.newsId}`)
    console.log(res.data);
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
