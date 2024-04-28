import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import AboutMeData from "../../constant/AboutMe.json";
import { Helmet } from "react-helmet";

const AboutMe = () => {
    return (
        <Box mt={5}>
            <Helmet>
                <title>Harsh Raghavani</title>
                <meta name="description" content="Harsh Raghavani Portfolio" />
                <meta name="keywords" content="Harsh Raghavani" />
            </Helmet>
            <Flex justifyContent={"center"} flexDirection={"column"}>
                <Flex justifyContent={"center"} mb={5}>
                    <Heading as={"h1"} size={"md"}>
                        About, Harsh!
                    </Heading>
                </Flex>
                <Flex justifyContent={"center"} flexDirection={"column"} gap={6} p={6}>
                    {AboutMeData.map((item) => (
                        <Text
                            key={item.id}
                            textAlign={"justify"}
                            fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                            lineHeight={{ base: "30px", md: "32px", lg: "32px" }}
                            letterSpacing={"1px"}
                        >
                            {item.about}
                        </Text>
                    ))}
                </Flex>
            </Flex>
        </Box>
    );
};

export default AboutMe;
