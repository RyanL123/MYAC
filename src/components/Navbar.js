import React from "react"
import { Box, Text, Image } from "@chakra-ui/core"
import Logo from "../assets/logo.png"

const NavItem = ({ name, url }) => (
    <Text color="gray.200" fontWeight="500">
        {name}
    </Text>
)

export default () => (
    <Box
        display="flex"
        flexDirection="row"
        width="100%"
        py="24px"
        px="10vw"
        alignItems="center"
        justifyContent="space-between"
        backgroundColor="gray.700"
    >
        <Box>
            <Image src={Logo} height="30px" width="auto" />
        </Box>
        <Box
            display="flex"
            flexDirection="row"
            maxWidth="240px"
            width="100%"
            justifyContent="space-evenly"
        >
            <NavItem name="Home" />
            <NavItem name="About" />
            <NavItem name="Contact" />
        </Box>
    </Box>
)
