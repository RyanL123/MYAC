import React from "react"
import { Box, Skeleton } from "@chakra-ui/react"

export default function Placeholder() {
    return (
        <Box
            shadow="lg"
            p="24px"
            backgroundColor="white"
            borderRadius="lg"
            display="flex"
            flexDirection="column"
        >
            <Skeleton height="200px" width="100%" />
            <Box mt="20px">
                <Skeleton height="28px" />
                <Skeleton height="20px" />
            </Box>
        </Box>
    )
}