import { Box, Tag, TagLabel, TagRightIcon } from "@chakra-ui/react";
import { useTheme } from "../../hooks/theme/useTheme";

const SkillsTag = ({ text, icon }) => {
    const { selectedColor } = useTheme();
    return (
        <Box boxShadow="inner">
            <Tag
                size={"lg"}
                variant="solid"
                colorScheme={selectedColor !== null ? selectedColor : "blue"}
                rounded={"md"}
                p={2.5}
            >
                <TagLabel>{text}</TagLabel>
                <TagRightIcon as={icon} />
            </Tag>
        </Box>
    );
};

export default SkillsTag;
