import React, { useState } from "react"
import { Box, Heading, PseudoBox, Text } from "@chakra-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/SEO"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const About = () => {
    const { avatar } = useStaticQuery(graphql`
        query {
            avatar: file(relativePath: { eq: "avatar.png" }) {
                childImageSharp {
                    fluid(maxHeight: 200, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)
    const [name, setName] = useState("P1")
    const [desc, setDesc] = useState("p1")
    const [img, setImg] = useState(avatar)
    const people = [
        {
            name: "P1",
            img: avatar,
            desc: "p1",
        },
        {
            name: "P2",
            img: avatar,
            desc: "p2",
        },
        {
            name: "P3",
            img: avatar,
            desc: "p3",
        },
        {
            name: "P4",
            img: avatar,
            desc: "p4",
        },
        {
            name: "P5",
            img: avatar,
            desc: "p5",
        },
        {
            name: "P6",
            img: avatar,
            desc: "p6",
        },
    ]
    return (
        <Box backgroundColor="gray.800">
            <SEO title="MYAC | About" />
            <Navbar />
            <Box px="10vw" py="100px">
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Box width="200px">
                        <Img fluid={img.childImageSharp.fluid} />
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
                        "repeat(auto-fit, minmax(100px, 1fr))",
                        "repeat(auto-fit, minmax(200px, 1fr))",
                        "repeat(auto-fit, minmax(200px, 1fr))",
                    ]}
                    gridAutoFlow="row"
                    gridColumnGap={5}
                    gridRowGap={5}
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
                                        }}
                                    >
                                        <Img
                                            fluid={
                                                person.img.childImageSharp.fluid
                                            }
                                        />
                                    </button>
                                </Box>
                                <Heading
                                    color="white"
                                    size="xl"
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
