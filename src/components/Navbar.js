import React from "react"
import { Box, Text } from "@chakra-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const NavItem = ({ name, url }) => (
    <Text color="gray.200" fontWeight="500">
        {name}
    </Text>
)

const Navbar = () => {
    const { logo } = useStaticQuery(graphql`
        query {
            logo: file(relativePath: { eq: "logo.png" }) {
                childImageSharp {
                    fixed(height: 30, quality: 100) {
                        ...GatsbyImageSharpFixed_withWebp
                    }
                }
            }
        }
    `)
    return (
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
                <Img fixed={logo.childImageSharp.fixed} />
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
}

export default Navbar
