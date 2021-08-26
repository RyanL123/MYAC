import React from "react"
import { Box } from "@chakra-ui/react"

export default ({ c1, c2, c3, bg }) => (
    <Box backgroundColor={bg}>
        <Box
            background={c1}
            height="50px"
            width="100%"
            zIndex="-999"
            mt="-20px"
        ></Box>
        <Box
            background={c2}
            height="50px"
            width="100%"
            transform="matrix(1.00,0.02,-0.02,1.00,0,0)"
            zIndex="-999"
            mt="-20px"
        ></Box>
        <Box
            background={c3}
            height="50px"
            width="100%"
            transform="matrix(1.00,0.04,-0.04,1.00,0,0)"
            zIndex="-999"
            mt="-20px"
        ></Box>
    </Box>
)
