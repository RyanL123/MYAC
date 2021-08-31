import React from "react"
import { Box, Heading } from "@chakra-ui/react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Title from "../components/Title"

import MySEO from "../components/SEO"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

const Team = () => {
    const {
        team,
        peopleData
    } = useStaticQuery(graphql`
        query {
            team: file(relativePath: { eq: "landscape.jpg" }) {
                childImageSharp {
                    gatsbyImageData(
                        width: 1920,
                        placeholder: BLURRED,
                        quality: 100
                    )
                }
            }

            peopleData: allAirtable(filter: {table: {eq: "Team"}}) {
                nodes {
                  data {
                    Name
                    Position
                    Avatar {
                        id
                        localFiles {
                          childImageSharp {
                            gatsbyImageData(height: 700, quality: 100, placeholder: BLURRED)
                          }
                        }
                      }
                    Rank
                    Route
                  }
                }
              }
        }
    `)

    // Parse data to fit previous model and sort to ranking
    const people = peopleData.nodes.map(
        (node) => ({
            name: node.data.Name,
            position: node.data.Position,
            img: node.data.Avatar.localFiles[0].childImageSharp.gatsbyImageData,
            route: node.data.Route,
            rank: node.data.Rank
        })
    ).sort(
        (data1, data2) => data1.rank - data2.rank
    );

    return (
        <Box backgroundColor="white">
            <MySEO title="MYAC | Team" />
            <Navbar />
            <Box
                height={["100px", null, "350px", null]}
                width="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <BgImage
                    image={getImage(team)}
                    style={{
                        height: "100%",
                        width: "100%",
                        backgroundPosition: "center top",
                    }}
                    alt="Hero Image"
                ></BgImage>
            </Box>
            <Box px="10vw" py="100px">
                <Title
                    title="MYAC Board Of Directors"
                    subtitle="The people who make it happen"
                    align="center"
                    subColor="blue.500"
                    color="black.900"
                />
                <Box
                    pt="100px"
                    display="grid"
                    gridTemplateColumns={[
                        "1fr",
                        null,
                        "repeat(auto-fit, minmax(300px, 1fr))",
                        null,
                    ]}
                    gridAutoFlow="row"
                    gridColumnGap={5}
                    gridRowGap={10}
                >
                    {people.map(person => (
                        <Box>
                            <Link to={person.route}>
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    width="100%"
                                >
                                    <Box
                                        width={["80vw", null, "300px", null]}
                                        height={["80vw", null, "300px", null]}
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
                                            {/*
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
                                            

                                            <StaticImage
                                                src={person.img}
                                                alt={person.name}
                                                style={{
                                                    width: "100%",
                                                    height: "100%"
                                                }}
                                                placeholder="blurred"
                                                layout="fixed"
                                                height={700}
                                                width={500}
                                            />
                                            */}

                                            <GatsbyImage
                                                image={person.img}
                                                alt={person.name}
                                                style={{
                                                    width: "100%",
                                                    height: "100%"
                                                }}
                                            />
                                        </button>
                                    </Box>
                                    <Heading
                                        color="black.900"
                                        size="lg"
                                        textAlign="left"
                                        width={["80vw", "80vw", "300px", null]}
                                        mt="20px"
                                    >
                                        {person.position}
                                    </Heading>
                                    <Heading
                                        color="gray.500"
                                        size="md"
                                        textAlign="left"
                                        width={["80vw", "80vw", "300px", null]}
                                        mt="5px"
                                    >
                                        {person.name}
                                    </Heading>
                                </Box>
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
