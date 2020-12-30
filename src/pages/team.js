import React from "react"
import { Box, Heading, PseudoBox } from "@chakra-ui/core"
import { graphql, useStaticQuery, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import Title from "../components/Title"
import SEO from "../components/SEO"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Team = () => {
    const {
        team,
        alyssa,
        ben,
        claire,
        daniel,
        hannah,
        nidhi,
        shirley,
    } = useStaticQuery(graphql`
        query {
            team: file(relativePath: { eq: "hero.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1920, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
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
            name: "Shirley Mu",
            position: "Chairperson",
            img: shirley,
            route: "shirley",
        },
        {
            name: "Daniel Ojeda",
            position: "Vice Chairperson",
            img: daniel,
            route: "daniel",
        },
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
    ]
    return (
        <Box backgroundColor="white">
            <SEO title="MYAC | Team" />
            <Navbar />
            <BackgroundImage
                fluid={team.childImageSharp.fluid}
                style={{
                    height: "100%",
                    width: "100%",
                    backgroundPosition: "center top",
                }}
                alt="Team Image"
            >
                <Box
                    px="10vw"
                    py="100px"
                    height={["100px", null, "350px", null]}
                    width="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Title
                        title="MYAC Board Of Directors"
                        subtitle="The people who make it happen"
                        align="center"
                        subColor="blue.300"
                        color="white"
                    />
                </Box>
            </BackgroundImage>
            <Box px="10vw" py="100px">
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
                >
                    {people.map(person => (
                        <Box
                            display="flex"
                            flexDirection="column"
                            justifySelf="center"
                            alignItems="center"
                            width="100%"
                        >
                            <Link to={person.route}>
                                <PseudoBox
                                    width={["80vw", "80vw", "400px", "400px"]}
                                    height={["80vw", "80vw", "400px", "400px"]}
                                    overflow="hidden"
                                    transition="transform 0.5s, opacity 0.5s"
                                    _hover={{
                                        opacity: "0.85",
                                    }}
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
                                </PseudoBox>
                                <Heading
                                    color="black.900"
                                    size="lg"
                                    textAlign="left"
                                    width="100%"
                                    mt="20px"
                                >
                                    {person.position}
                                </Heading>
                                <Heading
                                    color="gray.500"
                                    size="md"
                                    textAlign="left"
                                    width="100%"
                                    mt="5px"
                                >
                                    {person.name}
                                </Heading>
                            </Link>
                        </Box>
                    ))}
                </Box>
            </Box>
            <Footer />
        </Box>
    )
}

export default Team
