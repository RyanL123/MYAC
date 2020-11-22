import React from "react"
import { Box, Heading, Button } from "@chakra-ui/core"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

const Hero = () => {
    const { hero, logo } = useStaticQuery(graphql`
        query {
            hero: file(relativePath: { eq: "hero.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1440, maxHeight: 900, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            logo: file(relativePath: { eq: "logo.png" }) {
                childImageSharp {
                    fluid(maxHeight: 100, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)
    return (
        <Box
            height="85vh"
            backgroundColor="white"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <BackgroundImage
                fluid={hero.childImageSharp.fluid}
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                alt="Hero Image"
            >
                <Box
                    display="flex"
                    flexDir="column"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    px="10px"
                >
                    <Box width={["100px", "200px"]}>
                        <Img fluid={logo.childImageSharp.fluid} />
                    </Box>
                    <Heading
                        color="blue.400"
                        size="2xl"
                        mt="20px"
                        lineHeight="1em"
                    >
                        Mississauga Youth Action Committee
                    </Heading>
                    <Heading
                        color="gray.700"
                        size="md"
                        my="20px"
                        fontWeight="500"
                    >
                        We represent the youth of Mississauga. We help, engage,
                        and empower
                    </Heading>
                    <Box my={["25px", "50px"]}>
                        <Link to="/constitution">
                            <Button
                                variantColor="blue"
                                fontSize="18px"
                                variant="outline"
                                height="50px"
                            >
                                Our Constitution
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </BackgroundImage>
        </Box>
    )
}

export default Hero
