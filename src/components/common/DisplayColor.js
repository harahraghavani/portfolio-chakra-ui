import { Box, Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react';
import { IoMdAdd } from 'react-icons/io';

const DisplayColor = ({ data }) => {
    const { name } = data
    return (
        <Box w={150}>
            <Tag size={"lg"} variant='outline' colorScheme={name} mb={3} w={"100%"}>
                <TagLeftIcon boxSize='12px' as={IoMdAdd} />
                <TagLabel textTransform={'capitalize'}>{name}</TagLabel>
            </Tag>
        </Box>
    )
}

export default DisplayColor