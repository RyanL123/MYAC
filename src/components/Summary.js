import React from "react"
import { Box, Text, Button } from "@chakra-ui/core"
import Title from "./Title"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Summary = () => {
    const { summary } = useStaticQuery(graphql`
        query {
            summary: file(relativePath: { eq: "summary.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1920, maxHeight: 1280, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)
    return (
        <Box
            px="10vw"
            py="150px"
            backgroundColor="gray.50"
            display="flex"
            flexDirection={["column", "column", "column", "row"]}
            justifyContent="center"
            alignItems="center"
            id="about"
        >
            <Box
                width={["100%", "100%", "500px", "500px"]}
                mr={["0", "0", "125px", "125px"]}
            >
                <Title
                    title="Empowering Youth"
                    subtitle="We are the Mississauga Youth Action Committee"
                    align="left"
                    subColor="blue.500"
                    color="black.900"
                />
                <Text
                    color="gray.500"
                    mt="20px"
                    fontSize="xl"
                    lineHeight="1.5em"
                >
                    As a youth extension of the City of Mississauga, we
                    represent the 145 000+ youths in the city. We help, engage,
                    and empower.
                </Text>
                <Box mt="30px">
                    <a
                        href="/constitution.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            variantColor="blue"
                            fontSize="18px"
                            variant="outline"
                            height="50px"
                        >
                            Our Constitution
                        </Button>
                    </a>
                </Box>
            </Box>
            <Box
                width={["200px", "300px", "600px", null]}
                height="auto"
                mt={["50px", "50px", "50px", "0px"]}
                borderRadius="10px"
                overflow="hidden"
            >
                <Img fluid={summary.childImageSharp.fluid} alt="team" />
            </Box>
        </Box>
    )
}

export default Summary
