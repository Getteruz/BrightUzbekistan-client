import axios from "axios";
import Main from "components/Pages/Main";
import SEO from "components/SEO";

export async function getServerSideProps() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/news`, {
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

export default function Home({news = []}) {
news = news?.reverse()
  return (
    <>
      <SEO />
      <Main news={news} />
    </>
  )
}
