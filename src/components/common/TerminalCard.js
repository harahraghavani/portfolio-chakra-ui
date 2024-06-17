import { ReactTerminal } from "react-terminal";
import { Skills } from "../../constant/Skills";
import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import TerminalText from "./TerminalText";
import TerminalSkillBadge from "./TerminalSkillBadge";

const TerminalCard = () => {
    const { colorMode } = useColorMode();
    const commands = {
        help: (
            <Box my={5}>
                <TerminalText text="Available Commands:" fw={true} />

                <TerminalText
                    command="technical_skills"
                    text="() => Lists of all technical skills"
                />
                <TerminalText
                    command="non_technical_skills"
                    text="() => Lists of all non-technical skills"
                />
                <TerminalText
                    command="software"
                    text="() => Lists of all softwares I'm using"
                />
                <TerminalText
                    command="interests"
                    text="() => Lists all of interests and hobbies"
                />
                <TerminalText command="clear" text="() => Clears the terminal" />
            </Box>
        ),
        technical_skills: () => (
            <Flex alignItems="center" gap={4} flexWrap="wrap" mt={5}>
                {Skills["Technical Skills"].map((skill) => (
                    <Box key={skill}>
                        <TerminalSkillBadge data={skill} />
                    </Box>
                ))}
            </Flex>
        ),
        non_technical_skills: () => (
            <Flex alignItems="center" gap={4} flexWrap="wrap" mt={3}>
                {Skills["Non Technical Skills"].map((skill) => (
                    <Box key={skill}>
                        <TerminalSkillBadge data={skill} />
                    </Box>
                ))}
            </Flex>
        ),
        software: () => (
            <Flex alignItems="center" gap={4} flexWrap="wrap" mt={3}>
                {Skills["Software I use"].map((software) => (
                    <Box key={software}>
                        <TerminalSkillBadge data={software} />
                    </Box>
                ))}
            </Flex>
        ),
        interests: () => (
            <Flex alignItems="center" gap={4} flexWrap="wrap" mt={3}>
                {Skills["Interests / Hobbies"].map((interest) => (
                    <Box key={interest}>
                        <TerminalSkillBadge data={interest} />
                    </Box>
                ))}
            </Flex>
        ),
        clear: () => {
            window.location.reload();
        },
    };

    const welcomeMessageJsx = () => {
        return (
            <Text mb={3}>
                Type "help" for all available commands.
                <br />
            </Text>
        );
    };


    return (
        <div>
            <ReactTerminal
                commands={commands}
                welcomeMessage={welcomeMessageJsx()}
                theme={colorMode === "dark" ? "dark" : "light"}
                prompt='harsh_raghavani ~'
            />
        </div>
    );
};

export default TerminalCard;
