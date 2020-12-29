import React from "react"
import { Box } from "@chakra-ui/core"
// import Slant from "../components/Slant"
import Anchor from "../components/Anchor"
import SEO from "../components/SEO"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Objectives from "../components/Objectives"
import Summary from "../components/Summary"
import Connects from "../components/Connects"
import Footer from "../components/Footer"

export default function Home() {
    return (
        <Box backgroundColor="gray.800" overflow="hidden">
            <SEO title="MYAC | Home" />
            <Navbar>
                <Anchor name="Objectives" url="#objectives" />
                <Anchor name="About" url="#about" />
                <Anchor name="Connects" url="#connects" />
            </Navbar>
            <Hero />
            <Objectives />
            <Summary />
            {/* <Slant
                bg="gray.800"
                c1="linear-gradient(90deg, rgba(28,35,48,1) 0%, rgba(88,105,139,1) 35%, rgba(28,35,48,1) 100%)"
                c2="linear-gradient(90deg, rgba(28,35,48,1) 0%, rgba(68,82,109,1) 35%, rgba(28,35,48,1) 100%)"
                c3="linear-gradient(90deg, rgba(28,35,48,1) 0%, rgba(48,58,78,1) 35%, rgba(28,35,48,1) 100%)"
            /> */}
            <Connects />
            <Footer />
        </Box>
    )
}
