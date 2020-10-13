import React from "react"
import { Box } from "@chakra-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../../components/SEO"
import Navbar from "../../components/Navbar"
import About from "../../components/About"
import Footer from "../../components/Footer"

const Claire = () => {
    const { avatar } = useStaticQuery(graphql`
        query {
            avatar: file(relativePath: { eq: "claire.jpg" }) {
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
            <SEO title="About | Claire" />
            <Navbar />
            <About
                img={avatar}
                name="Claire Shen"
                position="Director of Membership Affairs"
                bio="Claire Shen is currently in grade 12 studying in the AP program at John Fraser. She first became an ambassador for MYAC in 2019 and is now the Director of Membership Affairs. She is immensely passionate about helping others which can be seen through her past experiences with clubs. She’s an executive for her school’s largest humanitarian club, is a peer mentor, is on the organizing team for FraserHacks, and began volunteering at a retirement home at the young age of 13. She has become a master at planning events and reaching out for sponsorships. She has developed time-management and leadership skills through competitive rep volleyball, being a level RCM level 10 piano graduate, and her role as finance minister for her debate team. Fun fact, she has a part-time job as a bubble tea barista!"
            />
            <Footer />
        </Box>
    )
}

export default Claire
