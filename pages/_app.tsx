import { NextPageContext } from 'next';
import { AppProps } from 'next/app';
import { ComponentType, ReactElement } from 'react';
import '../styles/globals.css'

type NextPageWithLayout = NextPageContext & {
  getLayout?: (page: ReactElement) => ComponentType
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout || ((page) => page );

  // return (
  //   <>
  //     <Component {...pageProps} />
  //   </>
  // )
  return getLayout( <Component {...pageProps} /> )
}

export default MyApp
