import { Box, Flex, Tag, Text, useColorMode } from "@chakra-ui/react";

const TerminalText = ({ command = "", text = "", fw = false }) => {

    const { colorMode } = useColorMode();
    return (
        <Box mb={2.5}>
            <Flex alignItems="center" gap={2}>
                {command !== "" && (
                    <Tag
                        fontWeight="semibold"
                        colorScheme="green"
                        textColor={colorMode === "dark" ? "black" : "white"}
                        variant="solid"
                        borderRadius="inherit"
                    >
                        {command}
                    </Tag>
                )}
                <Text fontWeight={fw ? "bold" : ""}>{text}</Text>
            </Flex>
        </Box>
    );
};

export default TerminalText;
