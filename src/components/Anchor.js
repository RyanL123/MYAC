import React from "react"
import { PseudoBox, Text } from "@chakra-ui/core"
import { IsMobile } from "./MediaQueries"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Anchor = ({ name, url }) => (
    <AnchorLink href={url}>
        <PseudoBox
            color="black.900"
            mx={IsMobile() ? "30px" : "20px"}
            my={IsMobile() ? "10px" : "0px"}
            transition="all .25s ease-in-out"
            _hover={{ color: "blue.300" }}
        >
            <Text fontWeight="500">{name}</Text>
        </PseudoBox>
    </AnchorLink>
)

export default Anchor
