import React from "react"
import { Box } from "@chakra-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../../components/SEO"
import Navbar from "../../components/Navbar"
import About from "../../components/About"
import Footer from "../../components/Footer"

const Shirley = () => {
    const { avatar } = useStaticQuery(graphql`
        query {
            avatar: file(relativePath: { eq: "shirley.jpg" }) {
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
            <SEO title="About | Shirley" />
            <Navbar />
            <About
                img={avatar}
                name="Shirley Mu"
                position="Chairperson"
                bio="Shirley Mu currently serves as the Chairperson of MYAC. She is a grade 12 student attending John Fraser Secondary School. Shirley has been involved with MYAC since she was in grade 9, and from this understands the interest and wishes of students involved with the council. Alongside from MYAC, Shirley is passionately involved with other youth councils, most notably serving as her school’s SAC President. MYAC has had a big impact on Shirley’s life and gave her amazing leadership opportunities. She hopes to use her experiences to make sure that all MYAC participants have a memorable year (while following social distancing regulations)! Feel free to message Shirley anytime with questions or suggestions :)"
                email="shirley.mu@themyac.ca"
                ig="https://www.instagram.com/shirleymu/"
            />
            <Footer />
        </Box>
    )
}

export default Shirley
