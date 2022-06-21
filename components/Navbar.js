import {
  Box,
  Flex,
  IconButton,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  HStack,
  Avatar,
  Link as ChakraLink
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icon";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaMoon, FaSun, FaGithub } from "react-icons/fa";

import Link from "next/link";
import Img from "../public/assets/pic.png";
import NavLink from "./NavLink";

const links = [
  { name: "Tech", path: "/tech" },
  { name: "Project", path: "/project" },
  { name: "Contact", path: "/contact" },
  { name: "Blog", path: "/blog" },
];

function Navbar() {
  const { toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      borderBottomColor={useColorModeValue("white", "blue.900")}
      boxShadow={"md"}
    >
      <Flex
        justifyContent="space-between"
        alignItems={"center"}
        w={["90%", "85%", "80%"]}
        py={4}
        maxW="container.lg"
        mx="auto"
      >
        <IconButton
          sixe={"md"}
          icon={isOpen ? <CloseIcon /> : <GiHamburgerMenu />}
          aria-label={"Open Menu"}
          display={["inherit", "inherit", "none"]}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={4} alignItems={"center"}>
          <Link href="/">
            <Box mr={5} display={["none", "none", "block"]}>
              <Avatar size={"sm"} src={Img} />
            </Box>
          </Link>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {links.map((link, i) => (
              <NavLink
                key={i}
                to={link.path}
                name={link.name}
                onClick={() => onClose()}
              />
            ))}
          </HStack>
        </HStack>
        <HStack alignItems={"center"}>
          <IconButton
          as={ChakraLink}
          href={"https://github.com/utsavbhattarai007"}
          size={"md"}
          icon={<FaGithub/>}
          aria-label={"Github Account"}
          _hover={{
            textDecoration: "none",
            bg: useColorModeValue("gray.300","blue.600"),
          }}
          bg={useColorModeValue("white","gray.700")}
          />
         <IconButton
            variant="outline"
            icon={useColorModeValue(<FaMoon />, <FaSun />)}
            onClick={toggleColorMode}
            aria-label="toggle-dark-mode"
          />
        </HStack>
      </Flex>
    </Box>
  );
}

export default Navbar;
