import { Button } from "@chakra-ui/react";
import React from "react";
import Ripples from "react-ripples";

const CommonButton = ({
    duration,
    btnText,
    bgColor,
    btnSize,
    variant,
    gradientColor,
    hoverBgColor,
    textColor,
    rippleColor
}) => {
    return (
        <Ripples color={rippleColor} during={duration}>
            <Button
                colorScheme={bgColor}
                size={btnSize}
                variant={variant}
                bgGradient={gradientColor}
                _hover={hoverBgColor}
                color={textColor}
            >
                {btnText}
            </Button>
        </Ripples>
    );
};

export default CommonButton;
