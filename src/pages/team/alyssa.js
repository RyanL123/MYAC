import React from "react"
import { Box } from "@chakra-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../../components/SEO"
import Navbar from "../../components/Navbar"
import About from "../../components/About"
import Footer from "../../components/Footer"

const Alyssa = () => {
    const { avatar } = useStaticQuery(graphql`
        query {
            avatar: file(relativePath: { eq: "alyssa.jpg" }) {
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
            <SEO title="About | Alyssa" />
            <Navbar />
            <About
                img={avatar}
                name="Alyssa Guo"
                position="Director of External Communication"
                bio="Alyssa Guo is the current Director of External Communication of MYAC. Outside of MYAC, she is a volunteer with Trillium Health Partners and Fridays for Future Toronto. Her involvement in the local community has led her to understand the need and develop a passion for advocacy, which she hopes to pursue through her role at MYAC. As part of her school’s student council for the past 3 years, Alyssa continues to foster her interpersonal skills that will aid her in her role at MYAC. She is excited to meet more of the wonderful youth of Mississauga at future connects and MYAC events. Alyssa has a strong interest in medicine, computer science, and the sciences. Fun fact: she loves to dance and is a dance teacher!"
                email="alyssa.guo@themyac.ca"
                ig="https://www.instagram.com/alyssasuiyyi/"
            />
            <Footer />
        </Box>
    )
}

export default Alyssa
