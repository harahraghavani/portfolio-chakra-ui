import { Flex, Text } from "@chakra-ui/react";
import AboutMeData from "../../constant/AboutMe.json";
import CommonHeading from "../common/CommonHeading";
import { MarginProvider } from "../../context/MarginContext";

const AboutMe = () => {



    return (
        <MarginProvider>
            <Flex justifyContent={"center"} flexDirection={"column"}>
                <Flex justifyContent={"center"} mb={5}>
                    <CommonHeading headingText="About, Harsh!" />
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
        </MarginProvider>
    );
};

export default AboutMe;
