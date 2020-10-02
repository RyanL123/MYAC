import React from "react"
import { Box, Heading } from "@chakra-ui/core"

export default ({ title, subtitle, align }) => (
    <Box textAlign={align}>
        <Heading color="blue.200" size="md" fontWeight="500">
            {subtitle}
        </Heading>
        <Heading color="white" mt="10px" size="xl">
            {title}
        </Heading>
    </Box>
)
