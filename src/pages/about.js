import React from "react"
import { Box, Heading, PseudoBox } from "@chakra-ui/core"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import Title from "../components/Title"
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
                    fluid(maxHeight: 700, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            ben: file(relativePath: { eq: "ben.jpg" }) {
                childImageSharp {
                    fluid(maxHeight: 700, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            claire: file(relativePath: { eq: "claire.jpg" }) {
                childImageSharp {
                    fluid(maxHeight: 700, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            daniel: file(relativePath: { eq: "daniel.jpg" }) {
                childImageSharp {
                    fluid(maxHeight: 700, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            hannah: file(relativePath: { eq: "hannah.jpg" }) {
                childImageSharp {
                    fluid(maxHeight: 700, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            nidhi: file(relativePath: { eq: "nidhi.jpg" }) {
                childImageSharp {
                    fluid(maxHeight: 700, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            shirley: file(relativePath: { eq: "shirley.jpg" }) {
                childImageSharp {
                    fluid(maxHeight: 700, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)
    const people = [
        {
            name: "Alyssa Guo",
            position: "Director of External Communication",
            img: alyssa,
            route: "alyssa",
        },
        {
            name: "Benjamin Zhang",
            position: "Director of Administrations",
            img: ben,
            route: "benjamin",
        },
        {
            name: "Claire Shen",
            position: "Director of Membership Affairs",
            img: claire,
            route: "claire",
        },
        {
            name: "Daniel Ojeda",
            position: "Vice Chairperson",
            img: daniel,
            route: "daniel",
        },
        {
            name: "Hannah Mahr",
            position: "Director of Finance",
            img: hannah,
            route: "hannah",
        },
        {
            name: "Nidhi Vasani",
            position: "Director of Promotions",
            img: nidhi,
            route: "nidhi",
        },
        {
            name: "Shirley Mu",
            position: "Chairperson",
            img: shirley,
            route: "shirley",
        },
    ]
    return (
        <Box backgroundColor="gray.800">
            <SEO title="MYAC | About" />
            <Navbar />
            <Box px="10vw" py="100px">
                <Title
                    title="MYAC Board Of Directors"
                    subtitle="The people who make it happen"
                    align="left"
                    subColor="blue.300"
                    color="white"
                />
                <Box
                    display="grid"
                    gridTemplateColumns={[
                        "repeat(auto-fit, minmax(200px, 80vw))",
                        "repeat(auto-fit, minmax(200px, 80vw))",
                        "repeat(auto-fit, minmax(400px, 1fr))",
                        "repeat(auto-fit, minmax(400px, 1fr))",
                    ]}
                    gridAutoFlow="row"
                    gridColumnGap={5}
                    gridRowGap={10}
                    mt="100px"
                >
                    {people.map(person => (
                        <PseudoBox
                            display="flex"
                            flexDirection="column"
                            justifySelf="center"
                            alignItems="center"
                            transition="transform 0.5s, opacity 0.5s"
                            width="100%"
                            _hover={{
                                opacity: "0.7",
                            }}
                        >
                            <Link to={person.route}>
                                <Box
                                    width={["80vw", "80vw", "400px", "400px"]}
                                    height={["80vw", "80vw", "400px", "400px"]}
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
                                                person.img.childImageSharp.fluid
                                            }
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                            }}
                                            alt={person.name}
                                        />
                                    </button>
                                </Box>
                                <Heading
                                    color="white"
                                    size="lg"
                                    textAlign="left"
                                    width="100%"
                                    mt="20px"
                                >
                                    {person.position}
                                </Heading>
                                <Heading
                                    color="gray.400"
                                    size="md"
                                    textAlign="left"
                                    width="100%"
                                    mt="5px"
                                >
                                    {person.name}
                                </Heading>
                            </Link>
                        </PseudoBox>
                    ))}
                </Box>
            </Box>
            <Footer />
        </Box>
    )
}

export default About
