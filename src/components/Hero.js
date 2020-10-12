import React from "react"
import { Box, Heading } from "@chakra-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Hero = () => {
    const { hero } = useStaticQuery(graphql`
        query {
            hero: file(relativePath: { eq: "hero.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1440, maxHeight: 900, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)
    return (
        <Box height="700px">
            <BackgroundImage
                fluid={hero.childImageSharp.fluid}
                style={{
                    height: "100%",
                    padding: "50px 10vw",
                    display: "flex",
                    alignItems: "center",
                }}
                alt="Group Photo"
            >
                <Box maxWidth="1200px">
                    <Heading color="white" size="2xl">
                        Mississauga Youth Action Committee
                    </Heading>
                    <Heading color="white" mt="50px" size="lg">
                        We represent the youth of Mississauga. We help, engage,
                        and empower.
                    </Heading>
                </Box>
            </BackgroundImage>
        </Box>
    )
}

export default Hero
