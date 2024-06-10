import { Box, Flex, Heading, Text, useColorMode } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";

const CommonSkills = () => {
    const { colorMode } = useColorMode();
    return (
        <Box width={"100%"}>
            <Flex justifyContent={"center"} flexDirection={"column"}>
                <Box
                    border={
                        colorMode === "light"
                            ? "0.5px solid rgba(0, 0, 0, 0.5)"
                            : "0.5px solid rgba(255, 255, 255, 0.5)"
                    }
                    py={2}
                    px={6}
                    borderRadius={50}
                >
                    <Flex alignItems="center" gap={3}>
                        <FaGoogle size={25} />
                        <Text fontSize="lg" fontWeight="semibold">Technical Skills</Text>
                    </Flex>

                </Box>
                <Box>Harsh</Box>
            </Flex>
        </Box>
    );
};

export default CommonSkills;
