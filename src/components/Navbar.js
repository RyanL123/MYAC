import React from "react"
import { Box, Text, Image } from "@chakra-ui/core"
import Logo from "../assets/logo.png"

export default () => (
    <Box
        display="flex"
        flexDirection="row"
        width="100%"
        py="20px"
        px="10vw"
        alignItems="center"
        justifyContent="space-between"
    >
        <Box>
            <Image src={Logo} height="30px" width="auto" />
        </Box>
        <Box
            display="flex"
            flexDirection="row"
            maxWidth="200px"
            width="100%"
            justifyContent="space-evenly"
        >
            <Text>Home</Text>
            <Text>About</Text>
            <Text>Contact</Text>
        </Box>
    </Box>
)
