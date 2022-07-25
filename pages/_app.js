import "../styles/globals.css";
import Layout from "../Layout/Layout";
import { ChakraProvider, extendTheme, theme } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Loader from "../components/loader";
const customTheme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    primary: theme.colors.blue,
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider resetCSS={true} theme={customTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
