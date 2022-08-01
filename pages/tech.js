import {
  Box,
  Heading,
  Link,
  SimpleGrid,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import SkillItem from "../components/SkillItem";
import { technologies } from "../Config/Data.js";

const tech = () => {
  return (
    <Box>
      <VStack spacing={3}>
        <VStack>
          <Heading bgClip="text" bgGradient="linear(to-l, gray.300, blue.300)">
            <Link color={() => useColorModeValue("blue.500", "blue.300")}>S</Link>
            kills
          </Heading>
          <Text
            fontSize={"xl"}
            color={() => useColorModeValue("gray.500", "gray.200")}
            maxW="lg"
            textAlign="center"
          >
            Some of the skills I’ve been practicing and mastering through time.
          </Text>
        </VStack>
        <Box w="78%">
          <Tabs
            variant="soft-rounded"
            colorScheme="blue"
            align="center"
            w="100%"
          >
            <TabPanels minH={"45vh"}>
              <TabPanel px={0}>
                <SimpleGrid columns={[1, 2, 3]} spacing={4} mt={8}>
                  {technologies.map((skill, index) => (
                    <SkillItem
                      key={index}
                      name={skill.name}
                      link={skill.link}
                      color={skill.color}
                      icon={skill.icon}
                    />
                  ))}
                </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </VStack>
    </Box>
  );
};

export default tech;
