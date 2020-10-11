import React, { useState } from "react"
import { Box, Heading, PseudoBox, Text } from "@chakra-ui/core"
import { graphql, useStaticQuery } from "gatsby"
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
        avatar,
    } = useStaticQuery(graphql`
        query {
            avatar: file(relativePath: { eq: "avatar.png" }) {
                childImageSharp {
                    fluid(maxHeight: 200, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            alyssa: file(relativePath: { eq: "alyssa.jpg" }) {
                childImageSharp {
                    fluid(maxHeight: 200, quality: 100) {
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
                    fluid(maxHeight: 200, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)
    const [name, setName] = useState("Alyssa Guo")
    const [desc, setDesc] = useState("p1")
    const [img, setImg] = useState(alyssa)
    const people = [
        {
            name: "Alyssa Guo",
            img: alyssa,
            desc: "p1",
        },
        {
            name: "Benjamin Zhang",
            img: ben,
            desc: "p2",
        },
        {
            name: "Claire Shen",
            img: claire,
            desc: "p3",
        },
        {
            name: "Daniel Ojeda",
            img: daniel,
            desc: "p4",
        },
        {
            name: "Hannah Mahr",
            img: hannah,
            desc: "p5",
        },
        {
            name: "Nidhi Vasani",
            img: nidhi,
            desc: "p6",
        },
        {
            name: "Shirley Mu",
            img: shirley,
            desc: "p6",
        },
    ]
    return (
        <Box backgroundColor="gray.800">
            <SEO title="MYAC | About" />
            <Navbar />
            <Box px="10vw" py="100px">
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Box
                        width="200px"
                        height="200px"
                        borderRadius="50%"
                        overflow="hidden"
                    >
                        <Img
                            fluid={img.childImageSharp.fluid}
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    </Box>
                    <Heading color="white" mt="25px">
                        {name}
                    </Heading>
                    <Text
                        color="gray.500"
                        fontSize="xl"
                        fontWeight="500"
                        mt="25px"
                        maxWidth="800px"
                        textAlign="justify"
                    >
                        {desc}
                    </Text>
                </Box>
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
                    mt="100px"
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
                                <Box
                                    width={["100px", "100px", "200px", "200px"]}
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
                                        onClick={() => {
                                            setDesc(person.desc)
                                            setName(person.name)
                                            setImg(person.img)
                                        }}
                                        style={{
                                            outline: "none",
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    >
                                        <Img
                                            fluid={
                                                person.img.childImageSharp.fluid
                                            }
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                            }}
                                        />
                                    </button>
                                </Box>
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
