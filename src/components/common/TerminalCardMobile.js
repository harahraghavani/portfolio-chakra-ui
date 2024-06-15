import {
    Box,
    Card,
    CardBody,
    CardHeader,
    Flex,
    useColorMode,
} from "@chakra-ui/react";
import TerminalSkillBadge from "./TerminalSkillBadge";
import { AnimatePresence, motion } from "framer-motion";

const TerminalCardMobile = ({ title, data }) => {
    const { colorMode } = useColorMode();
    const titleOfCard = () => {
        return (
            <Flex flexWrap="wrap" gap={3}>
                {data.map((ele) => {
                    return (
                        <Box key={ele}>
                            <TerminalSkillBadge data={ele} />
                        </Box>
                    );
                })}
            </Flex>
        );
    };

    return (
        <AnimatePresence initial={false}>
            <motion.div
                style={{
                    display: "inline-block",
                    height: "100%",
                    widows: "100%",
                    minWidth: "100%",
                }}
                whileHover={{ transform: "translateY(-7px)" }}
                transition={{ duration: 0.4 }}
            >
                <Card
                    w={{
                        base: 300,
                        sm: 320,
                        md: 350,
                    }}
                    h={"100%"}
                    p={5}
                    shadow={"md"}
                    border={
                        colorMode === "light"
                            ? "0.1px solid rgba(0, 0, 0, 0.5)"
                            : "0.1px solid rgba(255, 255, 255, 0.5)"
                    }
                    boxShadow={"inner"}
                    rounded={"md"}
                    sx={{
                        _hover: {
                            boxShadow: "xl",
                            border:
                                colorMode === "light"
                                    ? "0.1px solid rgba(0, 0, 0, 0.2)"
                                    : "0.1px solid rgba(255, 255, 255, 0.1)",
                        },
                    }}
                >
                    <CardHeader pb={2} fontSize="large" fontWeight="semibold">
                        {title}
                    </CardHeader>
                    <CardBody>{titleOfCard()}</CardBody>
                </Card>
            </motion.div>
        </AnimatePresence>
    );
};

export default TerminalCardMobile;
