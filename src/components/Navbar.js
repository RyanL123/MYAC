import React from "react"
import {
    Box,
    PseudoBox,
    Text,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
} from "@chakra-ui/core"
import { HamburgerIcon } from "@chakra-ui/icons"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import Headroom from "react-headroom"
import { Mobile, Desktop, isMobile } from "./MediaQueries"
import "../styles.css"

const NavItem = ({ name, url }) => (
    <Link to={url} activeClassName="active">
        <PseudoBox
            color="gray.200"
            mx="20px"
            my={isMobile() ? "10px" : "0px"}
            transition="all .25s ease-in-out"
            _hover={{ color: "gray.50" }}
        >
            <Text fontWeight="500">{name}</Text>
        </PseudoBox>
    </Link>
)

const Navbar = ({ children }) => {
    const { logo, fb, ig, twitter } = useStaticQuery(graphql`
        query {
            logo: file(relativePath: { eq: "logo.png" }) {
                childImageSharp {
                    fixed(height: 30, quality: 100) {
                        ...GatsbyImageSharpFixed_withWebp
                    }
                }
            }
            fb: file(relativePath: { eq: "fb.png" }) {
                childImageSharp {
                    fixed(height: 28, quality: 100) {
                        ...GatsbyImageSharpFixed_withWebp
                    }
                }
            }
            ig: file(relativePath: { eq: "ig.png" }) {
                childImageSharp {
                    fixed(height: 28, quality: 100) {
                        ...GatsbyImageSharpFixed_withWebp
                    }
                }
            }
            twitter: file(relativePath: { eq: "twitter.png" }) {
                childImageSharp {
                    fixed(height: 28, quality: 100) {
                        ...GatsbyImageSharpFixed_withWebp
                    }
                }
            }
        }
    `)
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Desktop>
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
                        <Link to="/">
                            <Img fixed={logo.childImageSharp.fixed} />
                        </Link>
                        <Box
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-evenly"
                        >
                            <NavItem name="Home" url="/" />
                            {children}
                            <NavItem name="Team" url="/team" />
                            <NavItem name="Events" url="/events" />
                        </Box>
                        <Box
                            display="flex"
                            flexDirection="row"
                            justifyContent="center"
                        >
                            <a
                                href="https://www.instagram.com/myac_mississauga/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <Box
                                    mx="10px"
                                    display="flex"
                                    alignContent="center"
                                >
                                    <Img fixed={ig.childImageSharp.fixed} />
                                </Box>
                            </a>
                            <a
                                href="https://www.facebook.com/myacmississauga/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                            >
                                <Box
                                    mx="10px"
                                    display="flex"
                                    alignContent="center"
                                >
                                    <Img fixed={fb.childImageSharp.fixed} />
                                </Box>
                            </a>
                            <a
                                href="https://twitter.com/MYACMISSISSAUGA"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                            >
                                <Box
                                    mx="10px"
                                    display="flex"
                                    alignContent="center"
                                >
                                    <Img
                                        fixed={twitter.childImageSharp.fixed}
                                    />
                                </Box>
                            </a>
                        </Box>
                    </Box>
                </Headroom>
            </Desktop>
            <Mobile>
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
                    >
                        <Link to="/">
                            <Img fixed={logo.childImageSharp.fixed} />
                        </Link>
                        <HamburgerIcon
                            w={6}
                            h={6}
                            color="gray.200"
                            onClick={onOpen}
                        />
                        <Drawer isOpen={isOpen} onClose={onClose}>
                            <DrawerOverlay>
                                <DrawerContent backgroundColor="gray.900">
                                    <DrawerCloseButton />
                                    <DrawerHeader>
                                        <Link to="/">
                                            <Img
                                                fixed={
                                                    logo.childImageSharp.fixed
                                                }
                                            />
                                        </Link>
                                    </DrawerHeader>
                                    <DrawerBody>
                                        <Box
                                            display="flex"
                                            flexDirection="column"
                                            justifyContent="space-evenly"
                                        >
                                            <NavItem name="Home" url="/" />
                                            {children}
                                            <NavItem name="Team" url="/team" />
                                            <NavItem
                                                name="Events"
                                                url="/events"
                                            />
                                        </Box>
                                    </DrawerBody>
                                    <DrawerFooter>
                                        <Box
                                            display="flex"
                                            flexDirection="row"
                                            justifyContent="center"
                                            width="100%"
                                            mb="10px"
                                        >
                                            <a
                                                href="https://www.instagram.com/myac_mississauga/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Instagram"
                                            >
                                                <Box
                                                    mx="10px"
                                                    display="flex"
                                                    alignContent="center"
                                                >
                                                    <Img
                                                        fixed={
                                                            ig.childImageSharp
                                                                .fixed
                                                        }
                                                    />
                                                </Box>
                                            </a>
                                            <a
                                                href="https://www.facebook.com/myacmississauga/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Facebook"
                                            >
                                                <Box
                                                    mx="10px"
                                                    display="flex"
                                                    alignContent="center"
                                                >
                                                    <Img
                                                        fixed={
                                                            fb.childImageSharp
                                                                .fixed
                                                        }
                                                    />
                                                </Box>
                                            </a>
                                            <a
                                                href="https://twitter.com/MYACMISSISSAUGA"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Twitter"
                                            >
                                                <Box
                                                    mx="10px"
                                                    display="flex"
                                                    alignContent="center"
                                                >
                                                    <Img
                                                        fixed={
                                                            twitter
                                                                .childImageSharp
                                                                .fixed
                                                        }
                                                    />
                                                </Box>
                                            </a>
                                        </Box>
                                    </DrawerFooter>
                                </DrawerContent>
                            </DrawerOverlay>
                        </Drawer>
                    </Box>
                </Headroom>
            </Mobile>
        </>
    )
}

export default Navbar
