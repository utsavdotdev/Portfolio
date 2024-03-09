import "../styles/globals.css";
import Layout from "../Layout/Layout";
import { ChakraProvider, extendTheme, theme } from "@chakra-ui/react";
const customTheme = extendTheme({
  config: {
    initialColorMode: "dark",
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
