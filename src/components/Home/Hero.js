import React, { Fragment } from "react";
import NavBar from "../common/NavBar";
import { Helmet } from "react-helmet";
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

const Hero = () => {
    const { colorMode } = useColorMode();

    const animationKeyframes = keyframes`
  0% { transform: scale(1)}
  50% { transform: scale(1.3)}
  100% { transform: scale(1)}
`;

    const animation = `${animationKeyframes} 1s ease-in-out infinite`;

    return (
        <Fragment>
            <Helmet>
                <title>Harsh Raghavani</title>
                <meta name="description" content="Harsh Raghavani Portfolio" />
                <meta name="keywords" content="Harsh Raghavani" />
            </Helmet>
            <NavBar />
            <Flex
                justifyContent={"center"}
                alignItems={"center"}
                minHeight={"calc(100vh - 80px)"}
            >
                <Flex
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    flexDirection={"column"}
                >
                    <Flex justifyContent={"center"} alignItems={"center"}>
                        <Box>
                            <Heading
                                as="h1"
                                size="2xl"
                                bgClip={"text"}
                                mb={4}
                                bgGradient={
                                    colorMode === "light"
                                        ? "linear(to-r,#FC5C7D,#6A82FB)"
                                        : "linear(to-r, #667db6, #0082c8, #0082c8, #667db6)"
                                }
                                textTransform={"uppercase"}
                            >
                                Harsh Raghavani
                            </Heading>
                            <Box textAlign={"center"}>
                                <TypeAnimation
                                    sequence={[
                                        "Web Developer",
                                        1500,
                                        "Photographer",
                                        1500,
                                        "Graphic Designer",
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
