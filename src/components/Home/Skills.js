import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    Heading,
    useColorMode,
} from "@chakra-ui/react";
import CommonHeading from "../common/CommonHeading";
import { MarginProvider } from "../../context/MarginContext";
import { Skills } from "../../constant/Skills";
import SkillsTag from "../common/SkillsTag";

const Skill = () => {
    const { colorMode } = useColorMode();

    return (
        <MarginProvider>
            <Flex justifyContent={"center"} flexDirection={"column"}>
                <Flex justifyContent={"center"} mb={10}>
                    <CommonHeading headingText="Creative Proficencies" />
                </Flex>
                <Box
                    mx={{
                        base: "15px",
                        md: "50px",
                    }}
                >
                    {Object.keys(Skills).map((data) => {
                        return (
                            <Accordion allowToggle mb={7}>
                                <AccordionItem
                                    borderTopWidth="0px"
                                    borderBottomWidth="0px"
                                    borderBottom="none"
                                    p={1}
                                >
                                    {({ isExpanded }) => (
                                        <Box
                                            border={
                                                isExpanded
                                                    ? colorMode === "dark"
                                                        ? "1px solid rgba(255, 255, 255, 0.3)"
                                                        : "1px solid rgba(0, 0, 0, 0.3)"
                                                    : colorMode === "dark"
                                                        ? "1px solid rgba(255, 255, 255, 0.5)"
                                                        : "1px solid rgba(0, 0, 0, 0.5)"
                                            }
                                            rounded="lg"
                                            boxShadow={isExpanded ? "md" : "lg"}
                                            transition={"all 0.4s ease-in-out"}
                                        >
                                            <AccordionButton
                                                _hover={{ bg: "none" }}
                                                _focusVisible={{
                                                    border: "none",
                                                }}
                                            >
                                                <Heading
                                                    size="md"
                                                    flex="1"
                                                    textAlign="left"
                                                    py={isExpanded ? 4 : 1.5}
                                                    px={isExpanded ? 1.5 : ""}
                                                    transition={"all 0.4s ease-in-out"}
                                                >
                                                    {data}
                                                </Heading>
                                                <AccordionIcon />
                                            </AccordionButton>

                                            <AccordionPanel AccordionPanel pb={4}>
                                                <Flex gap={5} flexWrap="wrap">
                                                    {Object.keys(Skills[data]).map((ele) => {
                                                        const skillName = Skills[data][ele].name;
                                                        const skillIcon = Skills[data][ele].icon;
                                                        return (
                                                            <SkillsTag text={skillName} icon={skillIcon} />
                                                        );
                                                    })}
                                                </Flex>
                                            </AccordionPanel>
                                        </Box>
                                    )}
                                </AccordionItem>
                            </Accordion>
                        );
                    })}
                </Box>
            </Flex>
        </MarginProvider>
    );
};

export default Skill;
