import React from "react"
import { Box, Heading } from "@chakra-ui/react"

const Title = ({ title, subtitle, align, subColor, color }) => (
    <Box textAlign={align}>
        <Heading color={subColor} size="md" fontWeight="500">
            {subtitle}
        </Heading>
        <Heading color={color} mt="10px" size="2xl" lineHeight="1em">
            {title}
        </Heading>
    </Box>
)

export default Title