import Head from "next/head";
import PropTypes from "prop-types";
import settings from "./settings";
import socialTags from "./socialTags";

const SEO = (props) => {
  const { title, description, keywords, image } = props;

  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1  maximum-scale=2, user-scalable=0"
      />
      <meta charSet="utf-8" />
      <title>{title || "Bright Uzbekistan"}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#255563" />
      <meta name="apple-mobile-web-app-title" content="Bright Uzbekistan" />
      <meta name="application-name" content="Bright Uzbekistan" />
      <meta name="msapplication-TileColor" content="#1a6364" />
      <meta name="theme-color" content="#ffffff" />

      {socialTags(props).map(({ name, content }) => {
        return <meta key={name} property={name} content={content} />;
      })}
      <meta type="image/jpeg" name="link" href={image} rel="image_src"></meta>
      <meta property="og:image:width" content="1200"/>
      <meta property="og:image:height" content="630"/>
    </Head>
  );
};

SEO.defaultProps = {
  url: settings?.meta?.url,
  type: settings?.meta?.type,
  title: settings?.meta?.title,
  description: settings?.meta?.description,
  image:  settings?.meta?.social?.graphic,
  keywords: settings?.meta?.keywords,
};

SEO.propTypes = {
  url: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default SEO;
