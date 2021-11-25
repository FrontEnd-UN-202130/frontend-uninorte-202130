import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { Ui } from '@frontend-uninorte-202130/ui'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to football-pro!</title>
      </Head>
      <div className="app">
        <Ui title={"Welcome to football-pro!"} showTitle={true} />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
