import settings from "./settings.js";

const socialTags = ({
    url,
    type,
    title,
    description,
    image,
    createdAt,
    updatedAt,
}) => {
    const metaTags = [
        { name: "twitter:card", content: "summary" },
        {
            name: "twitter:site",
            content: settings &&
                settings.meta &&
                settings.meta.social &&
                settings.meta.social.twitter,
        },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        {
            name: "twitter:creator",
            content: settings &&
                settings.meta &&
                settings.meta.social &&
                settings.meta.social.twitter,
        },
        { name: "twitter:image:src", content: image },

        { name: "og:title", content: title },
        {
            name: "og:type",
            content: type,
        },
        // {
        //   name: 'og:url',
        //   content: url,
        // },
        { name: "og:image", content: image },
        { name: "og:description", content: description },
        {
            name: "og:site_name",
            content: settings && settings.meta && settings.meta.title,
        },
        {
            name: "og:published_time",
            content: createdAt || new Date().toISOString(),
        },
        {
            name: "og:modified_time",
            content: updatedAt || new Date().toISOString(),
        },
    ];

    return metaTags;
};

export default socialTags;