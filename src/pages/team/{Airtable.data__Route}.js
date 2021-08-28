import React from "react"
import { graphql } from "gatsby"

import { Box } from "@chakra-ui/react"

import SEO from "../../components/SEO"
import Navbar from "../../components/Navbar"
import About from "../../components/About"
import Footer from "../../components/Footer"

import Page404 from "../404"

const TeamMember = (props) => {
    console.log();

    if (props.data.airtable) {
        const data = props.data.airtable.data;

        return (
            <Box>
                <SEO title={`About | ${data.Name}`} />
                <Navbar />
                <About
                    img={data.Avatar.localFiles[0].childImageSharp.gatsbyImageData}
                    name={data.Name}
                    position={data.Position}
                    bio={data.Bio}
                    email={data.Email}
                    ig={data.Instagram_Link}
                />
                <Footer />
            </Box>
        )
    }

    return (
        <Page404 />
    );
}

export const query = graphql`
    query UsingID($id: String!) {
        airtable(table: {eq: "Team"}, id: {eq: $id}) {
            data {
                Bio
                Name
                Position
                Email
                Instagram_Link
                Avatar {
                    localFiles {
                        childImageSharp {
                            gatsbyImageData(height: 500, quality: 100, placeholder: BLURRED)
                        }
                    }
                }
                Route
            }
        }
    }
`

export default TeamMember