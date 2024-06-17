import { Badge } from '@chakra-ui/react'
import React from 'react'
import { useTheme } from '../../hooks/theme/useTheme'

const TerminalSkillBadge = ({ data }) => {
    const { selectedColor } = useTheme()
    return (
        <Badge
            colorScheme={selectedColor !== null ? selectedColor : "blue"}
            p={2}
            px={3}
            rounded="full"
            letterSpacing={"1px"}
        >
            {data}
        </Badge>
    )
}

export default TerminalSkillBadge