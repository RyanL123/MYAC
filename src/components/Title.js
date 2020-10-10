import React from "react"
import { Box, Heading } from "@chakra-ui/core"

export default ({ title, subtitle, align, subColor, color }) => (
    <Box textAlign={align}>
        <Heading color={subColor} size="md" fontWeight="500">
            {subtitle}
        </Heading>
        <Heading color={color} mt="10px" size="2xl">
            {title}
        </Heading>
    </Box>
)
