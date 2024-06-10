import { Heading } from "@chakra-ui/react";
import React from "react";
import { useTheme } from "../../hooks/theme/useTheme";

const CommonHeading = ({ headingText = "" }) => {
    const { selectedColor } = useTheme();

    return (
        <Heading
            as={"h1"}
            size={"md"}
            borderBottom={selectedColor !== null ? `4px solid ${selectedColor}` : ""}
            borderBottomRadius={"5px"}
            transition={"all 0.3s ease-in-out"}
        >
            {headingText}
        </Heading>
    );
};

export default CommonHeading;
