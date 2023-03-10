import axios from "axios";
import Main from "components/Pages/Main";
import SEO from "components/SEO";

export async function getServerSideProps() {
  const res = await axios.get('https://bright-test.onrender.com/news', {
    headers: {
      "Content-Type": "application/json"
    }
  })

  return {
    props: {
      news: res.data
    }
  }
}

export default function Home({news}) {

  return (
    <>
      <SEO />
      <Main news={news} />
    </>
  )
}
