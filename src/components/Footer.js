import React from "react"
import { Box } from "@chakra-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Footer = () => {
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
                    fixed(height: 30, quality: 100) {
                        ...GatsbyImageSharpFixed_withWebp
                    }
                }
            }
            ig: file(relativePath: { eq: "ig.png" }) {
                childImageSharp {
                    fixed(height: 30, quality: 100) {
                        ...GatsbyImageSharpFixed_withWebp
                    }
                }
            }
            twitter: file(relativePath: { eq: "twitter.png" }) {
                childImageSharp {
                    fixed(height: 30, quality: 100) {
                        ...GatsbyImageSharpFixed_withWebp
                    }
                }
            }
        }
    `)
    return (
        <Box backgroundColor="gray.900" px="10vw" py="100px" textAlign="center">
            <Img fixed={logo.childImageSharp.fixed} />
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
                    >
                        <Img fixed={ig.childImageSharp.fixed} />
                    </a>
                </Box>
                <Box mx="20px">
                    <a
                        href="https://www.facebook.com/myacmississauga/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Img fixed={fb.childImageSharp.fixed} />
                    </a>
                </Box>
                <Box mx="20px">
                    <a
                        href="https://twitter.com/MYACMISSISSAUGA"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Img fixed={twitter.childImageSharp.fixed} />
                    </a>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer
