import React from "react"
import { Flex, Heading, Text } from "@chakra-ui/react"
import SEO from "../components/SEO"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

// TODO: Add button that redirects to homepage

export default function Page404() {
    return (
        <Flex backgroundColor="gray.100" overflow="hidden" direction="column" minH="100vh">
            <SEO title="MYAC | Home" />
            <Navbar />

            <Flex alignSelf="center" justifyContent="center" alignItems="center" direction="column" gridGap="2" mt="20px" flexGrow="1">
                <Heading color="gray.700" size="3xl" lineHeight="1em">
                    404
                </Heading>

                <Heading color="gray.600" size="lg" lineHeight="1em">
                    Page Not Found
                </Heading>

                <Text fontSize="md">
                    Sorry, we can't find the page you're looking for. You can either return to the previous page, or visit the pages in the top bar.
                </Text>
            </Flex>

            <Footer />
        </Flex>
    )
}
