import { Text } from '@chakra-ui/react'
import React from 'react'

const TerminalText = ({ text = "", fw = false }) => {
    return (
        <Text mb={2} fontWeight={fw ? "bold" : ""}>{text}</Text>
    )
}

export default TerminalText