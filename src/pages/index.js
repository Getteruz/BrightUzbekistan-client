import SEO from "components/SEO";
import AudioCard from "components/UI/AudioCard";
import NewsCard from "components/UI/NewsCard";
import NewsImageCard from "components/UI/NewsImageCard";

export default function Home() {

  return (
    <>
    <SEO />
    <AudioCard />
    <AudioCard />
    {/* <NewsCard /> */}
    <NewsImageCard />
    </>
  )
}
