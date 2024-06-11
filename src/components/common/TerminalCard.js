import { ReactTerminal } from 'react-terminal'
import { Skills } from "../../constant/Skills"
import { Box, Flex, Text } from '@chakra-ui/react';
import TerminalText from './TerminalText';

const TerminalCard = () => {
    const commands = {
        help: (
            <Box my={5}>
                <TerminalText text='Available commands:' fw={true} />
                <TerminalText text='technical_skills - Lists all technical skills' />
                <TerminalText text='non_technical_skills - Lists all non-technical skills' />
                <TerminalText text='software - Lists all software I use' />
                <TerminalText text='interests - Lists all interests and hobbies' />
                <TerminalText text='clear - Clears the terminal' />
            </Box>
        ),
        technical_skills: () => (
            <Flex alignItems="center" gap={4} flexWrap="wrap" mt={3}>
                {Skills["Technical Skills"].map((skill, index) => (
                    <p key={index}>{skill}</p>
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
        return <Text mb={3}>Type "help" for all available commands.<br /></Text>;
    }

    return (
        <div>
            <ReactTerminal commands={commands} welcomeMessage={welcomeMessageJsx()} />
        </div>
    )
}

export default TerminalCard