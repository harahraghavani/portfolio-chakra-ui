import { Fragment } from "react";
import NavBar from "../common/NavBar";
import {
    Box,
    Flex,
    Heading,
    Text,
    useColorMode,
    keyframes,
} from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import { BiMouse } from "react-icons/bi";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/theme/useTheme";
import CommonMeta from "../common/CommonMeta";

const Hero = () => {
    const { colorMode } = useColorMode();
    const { selectedColor } = useTheme();

    const animationKeyframes = keyframes`
  0% { transform: scale(1)}
  50% { transform: scale(1.3)}
  100% { transform: scale(1)}
`;

    const animation = `${animationKeyframes} 1s ease-in-out infinite`;

    return (
        <Fragment>
            <CommonMeta />
            <NavBar />
            <Flex
                justifyContent={"center"}
                alignItems={"center"}
                minHeight={"100svh"}
                position={"relative"}
            >
                <Flex
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    flexDirection={"column"}
                >
                    <Flex justifyContent={"center"} alignItems={"center"}>
                        <Box>
                            {selectedColor !== null ? (
                                <Heading
                                    as="h1"
                                    fontSize={{
                                        base: "28px",
                                        sm: "40px",
                                        md: "40px",
                                        lg: "48px",
                                    }}
                                    mb={4}
                                    transition={"all 0.3s ease-in-out"}
                                    textTransform={"uppercase"}
                                    color={`${selectedColor}.400`}
                                >
                                    Harsh Raghavani
                                </Heading>
                            ) : (
                                <Heading
                                    as="h1"
                                    fontSize={{
                                        base: "28px",
                                        sm: "40px",
                                        md: "40px",
                                        lg: "48px",
                                    }}
                                    bgClip={"text"}
                                    mb={4}
                                    transition={"all 0.3s ease-in-out"}
                                    bgGradient={
                                        colorMode === "light"
                                            ? "linear(to-r,#FC5C7D,#6A82FB)"
                                            : "linear(to-r, #667db6, #0082c8, #0082c8, #667db6)"
                                    }
                                    textTransform={"uppercase"}
                                >
                                    Harsh Raghavani
                                </Heading>
                            )}

                            <Box textAlign={"center"}>
                                <TypeAnimation
                                    sequence={[
                                        "Web Developer",
                                        1500,
                                        "Artist",
                                        1500,
                                        "Photographer",
                                        1500,
                                        "Editor",
                                        1500,
                                        () => { },
                                    ]}
                                    wrapper="span"
                                    cursor={true}
                                    repeat={Infinity}
                                    className="animation-text"
                                />
                            </Box>
                        </Box>
                    </Flex>
                    <Box position={"absolute"} bottom={"15px"}>
                        <Flex
                            justifyContent={"center"}
                            alignItems={"center"}
                            flexDirection={"column"}
                            gap={2}
                        >
                            <Text>Scroll down to see more!</Text>
                            <Box as={motion.div} animation={animation}>
                                <BiMouse size={20} />
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
        </Fragment>
    );
};

export default Hero;
