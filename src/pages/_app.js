import App from 'next/app';
import { Provider } from 'react-redux';
import NextNProgress from 'nextjs-progressbar';
import { appWithTranslation } from 'next-i18next';
import { store } from 'store';
import Layout from 'components/Layout';
import { getCategories } from 'services/category';

import '../styles/globals.scss'

function MyApp({ Component, pageProps, categories }) {
  return (
    <>
      <NextNProgress color="#F57D68" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
      <Provider store={store}>
        <Layout categories={categories}>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  )
}

MyApp.getInitialProps = async (ctx) => {
  const pageProps = await App.getInitialProps(ctx);
  const categories = await getCategories()
  return { ...pageProps, categories }
}

export default appWithTranslation(MyApp)