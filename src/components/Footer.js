import React from "react"
import { Box } from "@chakra-ui/react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
    return (
        <Box backgroundColor="blue.800" px="10vw" py="50px" textAlign="center">
            <Link to="/" aria-label="Logo">
                <StaticImage src="../assets/logo.png" height={30} quality={100} placeholder="blurred" />
            </Link>
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="center"
                mt="15px"
                borderTop="1px solid hsla(0,0%,100%,0.2)"
                pt="15px"
            >
                <Box mx="20px">
                    <a
                        href="https://www.instagram.com/myac_mississauga/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <StaticImage src="../assets/ig.png" height={30} quality={100} placeholder="blurred" />
                    </a>
                </Box>
                <Box mx="20px">
                    <a
                        href="https://www.facebook.com/myacmississauga/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                    >
                        <StaticImage src="../assets/fb.png" height={30} quality={100} placeholder="blurred" />
                    </a>
                </Box>
                <Box mx="20px">
                    <a
                        href="https://twitter.com/MYACMISSISSAUGA"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                    >
                        <StaticImage src="../assets/twitter.png" height={30} quality={100} placeholder="blurred" />
                    </a>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer
