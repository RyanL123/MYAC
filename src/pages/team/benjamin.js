import React from "react"
import { Box } from "@chakra-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../../components/SEO"
import Navbar from "../../components/Navbar"
import About from "../../components/About"
import Footer from "../../components/Footer"

const Benjamin = () => {
    const { avatar } = useStaticQuery(graphql`
        query {
            avatar: file(relativePath: { eq: "ben.jpg" }) {
                childImageSharp {
                    fluid(maxHeight: 500, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)
    return (
        <Box>
            <SEO title="About | Benjamin" />
            <Navbar />
            <About
                img={avatar}
                name="Benjamin Zhang"
                position="Director of Administrations"
                bio="Benjamin Zhang currently serves as the Director of Administrations of MYAC. He is a grade 12 student attending John Fraser Secondary School. In addition to his involvement with MYAC, Ben is actively involved in his school community by being a part of SAC, Peer Mentors, and Athletic Council. He has seen a variety of events happen- whether that be online or in person and he hopes to use his experiences to help plan fun events for everyone this year. Ben is interested in pursuing a career in the Health field, and has been competitively playing volleyball with the Pakmen Volleyball Club since grade 7. Fun fact: Ben loves hiking and his favourite trail is the Tunnel Bluffs Trail in Vancouver!"
                email="benjamin.zhang@themyac.ca"
                ig="https://www.instagram.com/benji.zhang/"
            />
            <Footer />
        </Box>
    )
}

export default Benjamin
