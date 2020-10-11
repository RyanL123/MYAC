import React from "react"
import { Box, Heading, Text, Badge, Image, Button } from "@chakra-ui/core"
import SEO from "../components/SEO"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Event = ({ title, desc, tag, img, link }) => (
    <Box
        shadow="lg"
        p="24px"
        backgroundColor="gray.700"
        borderRadius="lg"
        display="flex"
        flexDirection="column"
    >
        <Image src={img} height="auto" width="100%" borderRadius="md" />
        <Box mt="20px">
            <Heading color="white">{title}</Heading>
            <Text color="gray.300" fontSize="lg" fontWeight="500" mt="10px">
                {desc}
            </Text>
            <Button variant="link" variantColor="blue">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    Learn More
                </a>
            </Button>
        </Box>
    </Box>
)

const Events = () => {
    return (
        <Box backgroundColor="gray.800">
            <SEO title="MYAC | Events" />
            <Navbar />
            <Box px="10vw" py="100px">
                <Box
                    display="grid"
                    gridTemplateColumns={[
                        "repeat(auto-fit, minmax(200px, 1fr))",
                        "repeat(auto-fit, minmax(300px, 1fr))",
                        "repeat(auto-fit, minmax(500px, 1fr))",
                        "repeat(auto-fit, minmax(500px, 1fr))",
                    ]}
                    gridAutoFlow="row"
                    gridColumnGap={5}
                    gridRowGap={5}
                >
                    <Event
                        title="Event 1"
                        img="https://resizing.flixster.com/5m9T35LHxon3y_Ozi432_rX-mpo=/740x380/v1.bjsxNTc1NTkwO2o7MTg2MDM7MTIwMDs5NjA7NTQw"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        link="https://www.google.com/"
                    />
                    <Event
                        title="Event 2"
                        img="https://resizing.flixster.com/5m9T35LHxon3y_Ozi432_rX-mpo=/740x380/v1.bjsxNTc1NTkwO2o7MTg2MDM7MTIwMDs5NjA7NTQw"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        link="https://www.google.com/"
                    />
                    <Event
                        title="Event 3"
                        img="https://resizing.flixster.com/5m9T35LHxon3y_Ozi432_rX-mpo=/740x380/v1.bjsxNTc1NTkwO2o7MTg2MDM7MTIwMDs5NjA7NTQw"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        link="https://www.google.com/"
                    />
                </Box>
            </Box>
            <Footer />
        </Box>
    )
}

export default Events
