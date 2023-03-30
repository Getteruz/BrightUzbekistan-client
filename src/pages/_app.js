import { useState } from 'react';
import { appWithTranslation } from 'next-i18next'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { queryClientOptions } from 'services/api';
import { Provider } from 'react-redux';
import { store } from 'store';
import Layout from 'components/Layout';

import '../styles/globals.scss'


const MyApp = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient(queryClientOptions));
  
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate  state={pageProps.dehydratedState}>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default appWithTranslation(MyApp)
