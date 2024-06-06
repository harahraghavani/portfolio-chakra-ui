import { Card, CardBody, CardHeader, Heading, List, ListItem, Stack, Text, UnorderedList, useColorMode } from "@chakra-ui/react";
import React from "react";

const CommonCard = ({ category, skills }) => {
    const { colorMode } = useColorMode();
    return (
        <Card
            w={{
                sm: 320,
                md: 320,
                lg: 320
            }}
            h={"100%"}
            p={5}
            shadow={"md"}
            border={
                colorMode === "light"
                    ? "0.1px solid rgba(0, 0, 0, 0.2)"
                    : "0.1px solid rgba(255, 255, 255, 0.2)"
            }
            boxShadow={"base"}
            _hover={{
                scale: "2",
                boxShadow: "lg",
                border: "transparent"
            }}
        >
            <CardHeader>
                <Heading size='md'>{category}</Heading>
            </CardHeader>
            <CardBody py={0}>
                <List>
                    {
                        skills.map((desc) => {
                            return <ListItem mb={2} key={desc}>{desc}</ListItem>;
                        })
                    }
                </List >
            </CardBody>
        </Card>
    );
};

export default CommonCard;
