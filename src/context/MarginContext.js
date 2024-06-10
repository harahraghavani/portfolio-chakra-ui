import { Box } from "@chakra-ui/react";
import { createContext } from "react";
import CommonMeta from "../components/common/CommonMeta";

const MarginContext = createContext();

const MarginProvider = ({ children }) => {
    return (
        <MarginContext.Provider value={{}}>
            <CommonMeta />
            <Box my={10}>
                {children}
            </Box>
        </MarginContext.Provider>
    )
}

export { MarginContext, MarginProvider }