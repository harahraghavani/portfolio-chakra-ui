import { Card, CardBody, CardHeader, Heading, List, ListItem, useColorMode } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

const CommonCard = ({ category, skills }) => {
    const { colorMode } = useColorMode();
    return (
        <AnimatePresence initial={false}>
            <motion.div
                style={{
                    display: "inline-block",
                    height: "100%",
                    widows: "100%",
                    minWidth: "100%",
                }}
                initial={{ y: 0 }}
                animate={{ y: 7 }}
                whileHover={{ y: 0, scale: 1.03 }}
                transition={{ duration: 0.4 }}
            >
                <Card
                    w={{
                        sm: 320,
                        md: 320,
                        lg: 320,
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
                    <CardHeader>
                        <Heading size="md">{category}</Heading>
                    </CardHeader>
                    <CardBody py={0}>
                        <List>
                            {skills.map((desc) => {
                                return (
                                    <ListItem mb={2} key={desc}>
                                        {desc}
                                    </ListItem>
                                );
                            })}
                        </List>
                    </CardBody>
                </Card>
            </motion.div>
        </AnimatePresence>
    );
};

export default CommonCard;
