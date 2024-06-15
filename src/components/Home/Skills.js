import { Box, Flex } from "@chakra-ui/react";
import CommonHeading from "../common/CommonHeading";
import { MarginProvider } from "../../context/MarginContext";
import TerminalCard from "../common/TerminalCard";
import { useRef, useState } from "react";
import { useBreakpointValue } from '@chakra-ui/react'

const Skills = () => {
    const [isMobileScreen, setIsMobileScreen] = useState(false)
    const terminalRef = useRef(null);

    return (
        <MarginProvider>
            <Flex justifyContent={"center"} flexDirection={"column"}>
                <Flex justifyContent={"center"} mb={10}>
                    <CommonHeading headingText="Creative Proficencies" />
                </Flex>
                <Box mx={{
                    base: "50px",
                }} ref={terminalRef} className="skills-terminal-block" shadow="xl">
                    <TerminalCard />
                </Box>
            </Flex>
        </MarginProvider >
    );
};

export default Skills;
