import { Box, Flex, Grid } from "@chakra-ui/react";
import CommonHeading from "../common/CommonHeading";
import { MarginProvider } from "../../context/MarginContext";
import TerminalCard from "../common/TerminalCard";
import { useRef } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import TerminalCardMobile from "../common/TerminalCardMobile";
import { Skills } from "../../constant/Skills";

const Skill = () => {
    const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
    const terminalRef = useRef(null);

    return (
        <MarginProvider>
            <Flex justifyContent={"center"} flexDirection={"column"}>
                <Flex justifyContent={"center"} mb={10}>
                    <CommonHeading headingText="Creative Proficencies" />
                </Flex>
                {isLargerThan1024 ? (
                    <Box
                        mx={{
                            base: "50px",
                        }}
                        ref={terminalRef}
                        className="skills-terminal-block"
                        shadow="xl"
                    >
                        <TerminalCard />
                    </Box>
                ) : (
                    <Grid
                        templateColumns={{
                            base: "repeat(1, 1fr)",
                            md: "repeat(2, 1fr)",
                        }}
                        mx="auto"
                        gap={10}
                        justifyContent="center"
                        alignItems="center"
                    >
                        {Object.entries(Skills).map(([category, skills]) => {
                            return (
                                <Box
                                    width={{
                                        base: 300,
                                        sm: 350,
                                        md: 350,
                                    }}
                                    height="100%"
                                    minHeight="100%"
                                    key={category}
                                >
                                    <TerminalCardMobile title={category} data={skills} />
                                </Box>
                            );
                        })}
                    </Grid>
                )}
            </Flex>
        </MarginProvider>
    );
};

export default Skill;
