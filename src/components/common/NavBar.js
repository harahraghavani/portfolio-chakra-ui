import React from "react";
import { Box, Flex, useColorMode } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { CiLight, CiDark } from "react-icons/ci";
import CommonButton from "./CommonButton";

const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} p={"20px"}>
            <Heading as="h1" size={"md"}>
                Harsh
            </Heading>
            <Flex gap={2} alignItems={"center"}>
                <Box onClick={toggleColorMode} cursor={"pointer"}>
                    {colorMode === "light" ? <CiDark size={38} /> : <CiLight size={38} />}
                </Box>
                <CommonButton btnText="Resume" variant={"outline"} />
            </Flex>
        </Flex>
    );
};

export default NavBar;
