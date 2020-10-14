import React from "react"
import { Box } from "@chakra-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../../components/SEO"
import Navbar from "../../components/Navbar"
import About from "../../components/About"
import Footer from "../../components/Footer"

const Hannah = () => {
    const { avatar } = useStaticQuery(graphql`
        query {
            avatar: file(relativePath: { eq: "hannah.jpg" }) {
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
            <SEO title="About | Hannah" />
            <Navbar />
            <About
                img={avatar}
                name="Hannah Mahr"
                position="Director of Finance"
                bio="Hannah Mahr is the acting director of finance for MYAC. She has always been involved in her school community and wanted to make a more significant impact. Hannah has always been interested in playing a financial role, as she believes that responsible and transparent finance is the hidden superpower to an organization!  Working on MYAC means Hannah can better implement her peers' concerns and wants, whether from school, dance, or any other council. Hannah's interests include dance, animal medicine and cooking. She is excited to see what she can do to make Mississauga the best it can be!   Fun fact: Hannah is a competitive dancer!"
                email="hannah.mahr.guo@themyac.ca"
            />
            <Footer />
        </Box>
    )
}

export default Hannah
