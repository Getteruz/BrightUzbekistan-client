import axios from "axios";
import Main from "components/Pages/Main";
import SEO from "components/SEO";

export default function Home({news}) {

  return (
    <>
      <SEO />
      <Main news={news} />
    </>
  )
}

export async function getServerSideProps() {
  let res = await axios.get('https://bright-test.onrender.com/news')
  return {
    props: {
      news: res.data
    }
  }
}