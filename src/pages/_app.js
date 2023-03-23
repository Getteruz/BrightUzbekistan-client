import { QueryClientProvider } from 'react-query';
import { queryClient } from 'services/api';
import { Provider } from 'react-redux';
import { store } from 'store';
import Layout from 'components/Layout';

import '../styles/globals.scss'


function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </QueryClientProvider>
  )
}

export default MyApp
