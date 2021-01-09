import React from "react"
import { Box } from "@chakra-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../../components/SEO"
import Navbar from "../../components/Navbar"
import About from "../../components/About"
import Footer from "../../components/Footer"

const Daniel = () => {
    const { avatar } = useStaticQuery(graphql`
        query {
            avatar: file(relativePath: { eq: "daniel.jpg" }) {
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
            <SEO title="About | Daniel" />
            <Navbar />
            <About
                img={avatar}
                name="Daniel Ojeda"
                position="Vice Chairperson"
                bio="Daniel Ojeda currently serves as the Vice-Chair of Board for MYAC. Prior to his involvement within the organization, he worked as an advisor to the Minister of Education (2016), and also served as student senate representative for his school to the Dufferin-Peel CDSB (2020). Within his former advisory roles, Daniel understood the unique challenges thousands of fellow youth in Ontario face, the process that is needed to fix them; and advocated on their behalves. As a member of the Canadian Army reserve, Daniel also continues to foster leadership skills that can, and are implemented in his role as Vice-Chair. Daniel is very interested in the sciences, medicine, political discourse, and hockey. Fun fact: Daniel co-piloted an airplane for the first time at 12 years old."
                email="daniel.ojeda@themyac.ca"
                ig="https://www.instagram.com/danielojeda02/"
            />
            <Footer />
        </Box>
    )
}

export default Daniel
