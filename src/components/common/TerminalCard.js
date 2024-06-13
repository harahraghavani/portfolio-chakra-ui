import { ReactTerminal } from "react-terminal";
import { Skills } from "../../constant/Skills";
import { Badge, Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import TerminalText from "./TerminalText";
import { useTheme } from "../../hooks/theme/useTheme";

const TerminalCard = () => {
    const { selectedColor } = useTheme();
    const { colorMode } = useColorMode();
    const commands = {
        help: (
            <Box my={5}>
                <TerminalText text="Available Commands:" fw={true} />
                <TerminalText
                    command="technical_skills"
                    text="() => Lists all technical skills"
                />
                <TerminalText
                    command="non_technical_skills"
                    text="() => Lists all non-technical skills"
                />
                <TerminalText
                    command="software"
                    text="() => Lists all softwares I use"
                />
                <TerminalText
                    command="interests"
                    text="() => Lists all interests and hobbies"
                />
                <TerminalText command="clear" text="() => Clears the terminal" />
            </Box>
        ),
        technical_skills: () => (
            <Flex alignItems="center" gap={4} flexWrap="wrap" mt={3}>
                {Skills["Technical Skills"].map((skill, index) => (
                    <Badge
                        colorScheme={selectedColor !== null ? selectedColor : "green"}
                        p={2}
                        px={3}
                        fontSize="sm"
                        rounded="full"
                        key={index}
                        letterSpacing={"1px"}
                    >
                        {skill}
                    </Badge>
                ))}
            </Flex>
        ),
        non_technical_skills: () => (
            <Box>
                {Skills["Non Technical Skills"].map((skill, index) => (
                    <p key={index}>{skill}</p>
                ))}
            </Box>
        ),
        software: () => (
            <Box>
                {Skills["Software I use"].map((software, index) => (
                    <p key={index}>{software}</p>
                ))}
            </Box>
        ),
        interests: () => (
            <Box>
                {Skills["Interests / Hobbies"].map((interest, index) => (
                    <p key={index}>{interest}</p>
                ))}
            </Box>
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
            />
        </div>
    );
};

export default TerminalCard;
