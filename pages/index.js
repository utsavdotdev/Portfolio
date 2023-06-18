import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Code,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Typist from "react-typist";
export default function Home() {
  return (
    <>
      <Flex direction={"column"} align="center">
        <Flex direction={["column", "column", "row"]}>
          <Avatar
            size={"2xl"}
            src="/pic.png"
            alt="Utsav"
            mb={4}
            display={["block", "block", "none"]}
            alignSelf={"center"}
          />
          <Box p={4} mr={4} w={"full"} maxW={"800px"}>
            <Heading
              mb={6}
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold"
              color={useColorModeValue("brand.600", "gray.300")}
              lineHeight="shorter"
              textAlign={{ base: "inherit", md: "start" }}
            >
              Hey, I&apos;m{" "}
              <Text
                display={"inline"}
                w="full"
                bgClip="text"
                bgGradient="linear(to-l, blue.200, blue.600)"
                fontWeight="extrabold"
              >
                Utsav
              </Text>
            </Heading>
            <Text
              pr={{ base: 0, md: 16 }}
              mb={4}
              fontSize={{ base: "md", md: "lg" }}
              color={useColorModeValue("brand.600", "gray.400")}
              letterSpacing="wider"
              textAlign={"start"}
              fontFamily={"body"}
            >
              {" "}
              I&apos;m a <br />
              <Code animation="infinite" fontSize={"lg"}>
                <Typist>Developer, Designer and Learner</Typist>
              </Code>
              <br />
              <br />I code <Code colorScheme="blue"> beautifully</Code>{" "}
              <Code colorScheme="green"> simple</Code> things and I{" "}
              <Code colorScheme="red"> love </Code> what I do but It&apos;s being
              frustrating sometimes but result&apos;s{" "}
              <Code colorScheme="purple">adrenaline</Code> hits different😘.
            </Text>
          </Box>
          <Box
            maxW={"320px"}
            w={"full"}
            h={"330px"}
            bg={useColorModeValue("gray.100", "gray.900")}
            shadow={"lg"}
            rounded={"lg"}
            p={5}
            textAlign={"center"}
            display={["none", "none", "block"]}
          >
            <Avatar
              size={"2xl"}
              src="/image.jpg"
              alt="Utsav"
              loading="eager"
              mb={4}
            />

            <Heading fontSize="md" fontWeight={400}>
              Utsav Bhattarai
            </Heading>
            <Text fontSize={"md"} fontWeight={200} color={"gray.500"} mb={4}>
              Software Engineer Student
            </Text>
            <Stack
              align={"flex-start"}
              justify={"flex-start"}
              direction={"column"}
              textAlign={"left"}
            >
              <Button
                target="_blank"
                w={"full"}
                mt={10}
                bg={useColorModeValue("gray.300", "gray.700")}
                color={useColorModeValue("gray.800", "white")}
                rounded={"md"}
                _hover={{
                  bg: useColorModeValue("gray.200", "gray.800"),
                  textDecoration: "none",
                }}
                _focus={{ outline: "none" }}
              >
                Resume
              </Button>
            </Stack>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
