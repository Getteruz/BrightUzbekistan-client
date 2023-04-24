import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

Document.getInitialProps = async (ctx) => {
    const locales = ['ru', 'en', 'uz', 'уз']
    const initialProps = await NextDocument.getInitialProps(ctx)
    const { locale } = ctx.req.cookies
    const currentLocale = ctx.locale 

    if (locale !== currentLocale && locales.includes(locale)) {
        if (ctx.res) {  
            ctx.res.writeHead(307, { Location: locale === 'уз' ? '/' : `/${locale}/` }).end();
        }
    }

    return { ...initialProps, props: {} };
}