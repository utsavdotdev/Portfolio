import React from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import {Box} from "@chakra-ui/layout"


function Layout({children}) {
  return (
    <>
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
