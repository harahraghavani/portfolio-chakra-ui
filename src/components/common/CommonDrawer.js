import { Drawer, DrawerBody, DrawerContent, DrawerOverlay, Flex, Box, Heading } from "@chakra-ui/react";
import { IoClose } from "react-icons/io5";
import DisplayColor from "./DisplayColor";
import { Colors } from "../../constant/Colors";
import CommonButton from "./CommonButton";
import { useTheme } from "../../hooks/theme/useTheme";

const CommonDrawer = ({ isOpen, onClose }) => {
    const { resetToDefault } = useTheme();
    return (
        <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            size={{
                base: "xs",
                sm: "sm",
            }}
        >
            <DrawerOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <DrawerContent>
                <Flex justifyContent={"space-between"} alignItems={"center"} p={"20px"}>
                    <Box>
                        <Heading
                            size={{
                                base: "sm",
                                sm: "md",
                            }}
                            textTransform={"capitalize"}
                        >
                            Choose your favourite color
                        </Heading>
                    </Box>
                    <IoClose cursor={"pointer"} size={25} onClick={onClose} />
                </Flex>
                <DrawerBody>
                    <Flex flexWrap="wrap" gap={5}>
                        {Colors.map((item) => {
                            return (
                                <Box key={item.id}>
                                    <DisplayColor data={item} onClose={onClose} />
                                </Box>
                            );
                        })}
                    </Flex>
                    <Box mt={4}>
                        <CommonButton
                            btnText="Reset to default"
                            variant="outline"
                            rounded="md"
                            bgColor="blackAplha.700"
                            onClick={() => {
                                resetToDefault()
                                onClose();
                            }}
                        />
                    </Box>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
};

export default CommonDrawer;
