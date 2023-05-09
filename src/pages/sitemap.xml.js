import { getAllNews } from "services/news";

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

function generateSiteMap(news) {
    return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <url>
         <loc>https://buzb.uz</loc>
         <xhtml:link
               rel="alternate"
               hreflang="uz"
               href="https://buzb.uz/uz/"/>
          <xhtml:link
               rel="alternate"
               hreflang="en"
               href="https://buzb.uz/en/"/>
       </url>
       <url>
         <loc>https://buzb.uz/about-project</loc>
         <xhtml:link
               rel="alternate"
               hreflang="uz"
               href="https://buzb.uz/uz/about-project"/>
          <xhtml:link
               rel="alternate"
               hreflang="en"
               href="https://buzb.uz/en/about-project"/>
        </url>
        <url>
          <loc>https://buzb.uz/contact-us</loc>
          <xhtml:link
                rel="alternate"
                hreflang="uz"
                href="https://buzb.uz/uz/contact-us"/>
          <xhtml:link
                rel="alternate"
                hreflang="en"
                href="https://buzb.uz/en/contact-us"/>
        </url>
        <url>
          <loc>https://buzb.uz/last-news</loc>
          <changefreq>hourly</changefreq>
          <xhtml:link
                rel="alternate"
                hreflang="uz"
                href="https://buzb.uz/uz/last-news"/>
          <xhtml:link
                rel="alternate"
                hreflang="en"
                href="https://buzb.uz/en/last-news"/>
        </url>
       ${news.map(news => {
            return `
                <url>
                  <loc>https://buzb.uz/news/${news?.ru?.shortLink || news?.id}</loc>
                  <news:news>
                    <news:publication>
                      <news:name>Bright Uzbekistan</news:name>
                      <news:language>ru</news:language>
                    </news:publication>
                    <news:publication_date>${news?.publishDate || news?.updated_at}</news:publication_date>
                    <news:title>${news?.ru?.title}</news:title>
                    <news:keywords>${news?.ru?.tags}</news:keywords>
                  </news:news>
                </url>
                <url>
                  <loc>https://buzb.uz/uz/news/${news?.uz?.shortLink || news?.id}</loc>
                  <news:news>
                    <news:publication>
                      <news:name>Bright Uzbekistan</news:name>
                      <news:language>uz</news:language>
                    </news:publication>
                    <news:publication_date>${news?.publishDate || news?.updated_at}</news:publication_date>
                    <news:title>${news?.uz?.title}</news:title>
                    <news:keywords>${news?.uz?.tags}</news:keywords>
                  </news:news>
                </url>
                <url>
                  <loc>https://buzb.uz/en/news/${news?.en?.shortLink || news?.id}</loc>
                  <news:news>
                    <news:publication>
                      <news:name>Bright Uzbekistan</news:name>
                      <news:language>en</news:language>
                    </news:publication>
                    <news:publication_date>${news?.publishDate || news?.updated_at}</news:publication_date>
                    <news:title>${news?.en?.title}</news:title>
                    <news:keywords>${news?.en?.tags}</news:keywords>
                  </news:news>
                </url>
            `;
            }).join('')}
     </urlset>
   `;
}

export async function getServerSideProps({ res }) {
    const news = await getAllNews();
  
    const sitemap = generateSiteMap(news);
  
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();
  
    return {
      props: {},
    };
  }

  export default SiteMap