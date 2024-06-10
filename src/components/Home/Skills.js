import { Box, Flex, Grid } from "@chakra-ui/react";
import CommonHeading from "../common/CommonHeading";
import { MarginProvider } from "../../context/MarginContext";
import CommonSkills from "../common/CommonSkills";

const Skills = () => {
    return (
        <MarginProvider>
            <Flex justifyContent={"center"} flexDirection={"column"}>
                <Flex justifyContent={"center"} mb={10}>
                    <CommonHeading headingText="Creative Proficencies" />
                </Flex>
                <Box mx={{
                    base: "50px",
                    md: "150px",
                    lg: "400px",
                    xl: "600px",
                    "2xl": "600px",
                }}>
                    <CommonSkills />
                </Box>
            </Flex>
        </MarginProvider >
    );
};

export default Skills;
