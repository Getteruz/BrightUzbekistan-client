import Head from "next/head";
import PropTypes from "prop-types";
import settings from "./settings";
import socialTags from "./socialTags";

const SEO = (props) => {
  const { title, description, keywords } = props;

  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1  maximum-scale=2, user-scalable=0"
      />
      <meta charSet="utf-8" />
      <title>{title || "SamAuto"}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="icon" href="/favicon.ico" />

      {socialTags(props).map(({ name, content }) => {
        return <meta key={name} name={name} content={content} />;
      })}
    </Head>
  );
};

SEO.defaultProps = {
  url: settings && settings.meta && settings.meta.url,
  type: settings && settings.meta && settings.meta.type,
  title: settings && settings.meta && settings.meta.title,
  description: settings && settings.meta && settings.meta.description,
  image:
    settings &&
    settings.meta &&
    settings.meta.social &&
    settings.meta.social.graphic,
  keywords: settings && settings.meta && settings.meta.keywords,
};

SEO.propTypes = {
  url: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default SEO;
