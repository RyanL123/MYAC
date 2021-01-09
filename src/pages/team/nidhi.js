import React from "react"
import { Box } from "@chakra-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../../components/SEO"
import Navbar from "../../components/Navbar"
import About from "../../components/About"
import Footer from "../../components/Footer"

const Nidhi = () => {
    const { avatar } = useStaticQuery(graphql`
        query {
            avatar: file(relativePath: { eq: "nidhi.jpg" }) {
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
            <SEO title="About | Nidhi" />
            <Navbar />
            <About
                img={avatar}
                name="Nidhi Vasani"
                position="Director of Promotions"
                bio="Prior to her involvement with MYAC, Nidhi Vasani served as high executive positions on many other councils around the GTA. Through these experiences, Nidhi has developed a passion for youth empowerment and volunteerism. As the Director of Promotions this year, she strives to reach out to as vast an expanse of Mississauga youth as possible, and ensure that their voices are heard within the community! Apart from this, Nidhi’s interests include reading, computer programming, dance, physics, graphic design, and finance. Fun fact: Nidhi is trained and certified to speed cycle competitively at a velodrome."
                email="nidhi.vasani@themyac.ca"
                ig="https://www.instagram.com/nid.hi_279/"
            />
            <Footer />
        </Box>
    )
}

export default Nidhi
