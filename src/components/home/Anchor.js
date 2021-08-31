import React from "react"
import { Box, Text } from "@chakra-ui/react"
import { IsMobile } from "../MediaQueries"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Anchor = ({ name, url }) => (
    <AnchorLink href={url}>
        <Box
            color="black.900"
            mx={IsMobile() ? "30px" : "20px"}
            my={IsMobile() ? "10px" : "0px"}
            transition="all .25s ease-in-out"
            _hover={{ color: "blue.300" }}
        >
            <Text fontWeight="500">{name}</Text>
        </Box>
    </AnchorLink>
)

export default Anchor
