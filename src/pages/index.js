import React from "react"
import { Box } from "@chakra-ui/core"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Objectives from "../components/Objectives"

export default function Home() {
    return (
        <Box backgroundColor="gray.800">
            <Navbar />
            <Hero />
            <Objectives />
        </Box>
    )
}
