import React from "react"
import { Box, PseudoBox, Text } from "@chakra-ui/core"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import Headroom from "react-headroom"

const NavItem = ({ name, url }) => (
    <Link to={url}>
        <PseudoBox
            color="gray.200"
            transition="all .25s ease-in-out"
            _hover={{ color: "gray.50" }}
        >
            <Text fontWeight="500">{name}</Text>
        </PseudoBox>
    </Link>
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
        <Headroom
            style={{
                webkitTransition: "all .6s ease-in-out",
                mozTransition: "all .6s ease-in-out",
                oTransition: "all .6s ease-in-out",
                transition: "all .6s ease-in-out",
            }}
        >
            <Box
                display="flex"
                flexDirection="row"
                width="100%"
                py="24px"
                px="10vw"
                alignItems="center"
                justifyContent="space-between"
                backgroundColor="gray.900"
                borderBottom="1px solid hsla(0,0%,100%,0.2)"
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
                    <NavItem name="Home" url="/" />
                    <NavItem name="About" url="/about" />
                    <NavItem name="Events" url="/events" />
                </Box>
            </Box>
        </Headroom>
    )
}

export default Navbar
