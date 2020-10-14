import React, { useState } from "react"
import { Box, Heading, PseudoBox, Text } from "@chakra-ui/core"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/SEO"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const About = () => {
    const {
        alyssa,
        ben,
        claire,
        daniel,
        hannah,
        nidhi,
        shirley,
    } = useStaticQuery(graphql`
        query {
            alyssa: file(relativePath: { eq: "alyssa.jpg" }) {
                childImageSharp {
                    fluid(maxHeight: 500, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            ben: file(relativePath: { eq: "ben.jpg" }) {
                childImageSharp {
                    fluid(maxHeight: 200, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            claire: file(relativePath: { eq: "claire.jpg" }) {
                childImageSharp {
                    fluid(maxHeight: 200, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            daniel: file(relativePath: { eq: "daniel.jpg" }) {
                childImageSharp {
                    fluid(maxHeight: 200, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            hannah: file(relativePath: { eq: "hannah.jpg" }) {
                childImageSharp {
                    fluid(maxHeight: 200, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            nidhi: file(relativePath: { eq: "nidhi.jpg" }) {
                childImageSharp {
                    fluid(maxHeight: 200, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            shirley: file(relativePath: { eq: "shirley.jpg" }) {
                childImageSharp {
                    fluid(maxHeight: 500, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)
    const people = [
        {
            name: "Alyssa Guo",
            img: alyssa,
            route: "alyssa",
        },
        {
            name: "Benjamin Zhang",
            img: ben,
            route: "benjamin",
        },
        {
            name: "Claire Shen",
            img: claire,
            route: "claire",
        },
        {
            name: "Daniel Ojeda",
            img: daniel,
            route: "daniel",
        },
        {
            name: "Hannah Mahr",
            img: hannah,
            route: "hannah",
        },
        {
            name: "Nidhi Vasani",
            img: nidhi,
            route: "nidhi",
        },
        {
            name: "Shirley Mu",
            img: shirley,
            route: "shirley",
        },
    ]
    return (
        <Box backgroundColor="gray.800">
            <SEO title="MYAC | About" />
            <Navbar />
            <Box px="10vw" py="100px">
                <Box
                    display="grid"
                    gridTemplateColumns={[
                        "repeat(auto-fit, minmax(100px, 1fr))",
                        "repeat(auto-fit, minmax(150px, 1fr))",
                        "repeat(auto-fit, minmax(200px, 1fr))",
                        "repeat(auto-fit, minmax(200px, 1fr))",
                    ]}
                    gridAutoFlow="row"
                    gridColumnGap={10}
                    gridRowGap={10}
                >
                    {people.map(person => (
                        <Box>
                            <PseudoBox
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                transition="transform 0.5s, opacity 0.5s"
                                _hover={{
                                    transform: "scale(1.025)",
                                    opacity: "0.8",
                                }}
                            >
                                <Link to={person.route}>
                                    <Box
                                        width={[
                                            "100px",
                                            "100px",
                                            "200px",
                                            "200px",
                                        ]}
                                        height={[
                                            "100px",
                                            "100px",
                                            "200px",
                                            "200px",
                                        ]}
                                        borderRadius="50%"
                                        overflow="hidden"
                                    >
                                        <button
                                            style={{
                                                outline: "none",
                                                width: "100%",
                                                height: "100%",
                                            }}
                                        >
                                            <Img
                                                fluid={
                                                    person.img.childImageSharp
                                                        .fluid
                                                }
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                }}
                                                alt={person.name}
                                            />
                                        </button>
                                    </Box>
                                </Link>
                                <Heading
                                    color="white"
                                    size="lg"
                                    textAlign="center"
                                    width="200px"
                                    mt="20px"
                                >
                                    {person.name}
                                </Heading>
                            </PseudoBox>
                        </Box>
                    ))}
                </Box>
            </Box>
            <Footer />
        </Box>
    )
}

export default About
