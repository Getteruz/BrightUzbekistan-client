import App from 'next/app';
import { store } from 'store';
import { Provider } from 'react-redux';
import { queryClient } from 'services/api';
import { getCategories } from 'services/category';
import { appWithTranslation } from 'next-i18next';
import { Hydrate, QueryClientProvider } from 'react-query';
import Layout from 'components/Layout';
import NextNProgress from 'nextjs-progressbar';
import AdsPopup from 'components/UI/Ads/Popup';
import '../styles/globals.scss'

function MyApp({ Component, pageProps, categories }) {
  return (
    <>
      <NextNProgress color="#F57D68" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Provider store={store}>
            <AdsPopup />
            <Layout categories={categories}>
              <Component {...pageProps} />
            </Layout>
          </Provider>
        </Hydrate>
      </QueryClientProvider>
    </>
  )
}

MyApp.getInitialProps = async (ctx) => {
  const pageProps = await App.getInitialProps(ctx);
  const categories = await getCategories()
  return {
    ...pageProps,
    categories
  }
}

export default appWithTranslation(MyApp)