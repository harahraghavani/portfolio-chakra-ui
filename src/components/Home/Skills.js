import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import { Helmet } from "react-helmet";
import SkillsData from "../../constant/Skills.json"
import CommonCard from "../common/CommonCard";

const Skills = () => {
    return (
        <Box my={10}>
            <Helmet>
                <title>Harsh Raghavani</title>
                <meta name="description" content="Harsh Raghavani Portfolio" />
                <meta name="keywords" content="Harsh Raghavani" />
            </Helmet>
            <Flex justifyContent={"center"} flexDirection={"column"}>
                <Flex justifyContent={"center"} mb={10}>
                    <Heading as={"h1"} size={"md"}>
                        Creative Proficencies
                    </Heading>
                </Flex>
                <Grid
                    templateColumns={{
                        base: "repeat(1, 1fr)",
                        sm: "repeat(1, 1fr)",
                        md: "repeat(2, 1fr)",
                        lg: "repeat(4, 1fr)",
                    }}
                    m={"auto"}
                    gap={12}
                    justifyContent={"center"}
                >
                    {Object.entries(SkillsData).map(([category, skills]) => (
                        <Box key={category}>
                            <CommonCard category={category} skills={skills} />
                        </Box>
                    ))}

                </Grid>
            </Flex>
        </Box>
    );
};

export default Skills;
