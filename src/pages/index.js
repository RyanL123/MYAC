import React from "react"
import { Box } from "@chakra-ui/core"
import SEO from "../components/SEO"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Objectives from "../components/Objectives"
import Summary from "../components/Summary"

export default function Home() {
    return (
        <Box backgroundColor="gray.800">
            <SEO />
            <Navbar />
            <Hero />
            <Objectives />
            <Summary />
        </Box>
    )
}
