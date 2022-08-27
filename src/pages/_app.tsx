import "../../styles/globals.css";
import Head from "next/head";
import Header from "../../components/Header";

interface IProps {
  Component: any;
  pageProps: any;
}

const MyApp = ({ Component, pageProps }: IProps) => {
  return (
    <>
      <Head>
        <title>Neto | Dev</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
