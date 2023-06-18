import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box } from "@chakra-ui/layout";
import Head from "next/head";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Utsav Bhattarai</title>
        <meta name="description" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Navbar />
      <Box
        textAlign="center"
        fontSize="xl"
        w={["90%", "85%", "80%"]}
        maxW={800}
        mx="auto"
      >
        <Box pt={10} pb={10}>
          {children}
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default Layout;
