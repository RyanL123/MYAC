import React, { useState, useEffect } from "react"
import {
    Box,
    Heading,
    Text,
    Badge,
    Image,
    Button,
    Skeleton,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
} from "@chakra-ui/core"
import SEO from "../components/SEO"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const fetch = require("node-fetch")

function getAirtable() {
    const url =
        "https://api.airtable.com/v0/appvXxGyx3prUgKd3/Councils?api_key=" +
        process.env.GATSBY_AIRTABLE_API
    return fetch(url).then(res => res.json())
}

const Event = ({ title, desc, img, link, contact }) => (
    <Box
        shadow="xl"
        p="24px"
        backgroundColor="gray.50"
        border="1px rgb(0, 0, 0, 0.1) solid"
        borderRadius="lg"
        display="flex"
        flexDirection="row"
        alignItems="center"
    >
        <Image
            src={img}
            height="200px"
            width="200px"
            objectFit="cover"
            borderRadius="md"
            alt={title}
        />
        <Box
            ml="20px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height="100%"
        >
            <Box>
                <Heading color="black.900" size="lg">
                    {title}
                </Heading>
                <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    mt="10px"
                ></Box>
                <Text color="gray.500" fontSize="lg" fontWeight="500" mt="10px">
                    {desc}
                </Text>
            </Box>
            <Box mt="10px">
                <Button
                    variant="link"
                    variantColor="blue"
                    rightIcon="external-link"
                >
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Learn More"
                    >
                        Learn More
                    </a>
                </Button>
                <Popover>
                    <PopoverTrigger>
                        <Button ml="20px">Contact</Button>
                    </PopoverTrigger>
                    <PopoverContent zIndex={4} width="500px">
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Contact Us</PopoverHeader>
                        <PopoverBody>{contact}</PopoverBody>
                    </PopoverContent>
                </Popover>
            </Box>
        </Box>
    </Box>
)

const Placeholder = () => (
    <Box
        shadow="lg"
        p="24px"
        backgroundColor="white"
        borderRadius="lg"
        display="flex"
        flexDirection="column"
    >
        <Skeleton height="200px" width="100%" />
        <Box mt="20px">
            <Skeleton height="28px" />
            <Skeleton height="20px" />
        </Box>
    </Box>
)

const placeholders = Array(8).fill(<Placeholder />)

const Events = () => {
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        // Gets airtable data then sorts based on date
        getAirtable().then(data => {
            var events = data["records"].map(event => ({
                component: (
                    <Event
                        title={event.fields.Name}
                        desc={event.fields.Description}
                        img={
                            event.fields.hasOwnProperty("Thumbnail")
                                ? event.fields.Thumbnail[0].url
                                : null
                        }
                        link={event.fields.URL}
                        contact={event.fields.Email}
                    />
                ),
                name: event.fields.Name,
            }))
            // Sort lexicographically based on date
            events.sort((a, b) => a.name.localeCompare(b.name))
            // Retrieve component from object
            events = events.map(event => event.component)
            setEvents(events)
            setLoading(false)
        })
    })
    return (
        <Box backgroundColor="white">
            <SEO title="MYAC | Events" />
            <Navbar />
            <Box px="10vw" py="100px">
                <Box
                    display="grid"
                    gridTemplateColumns="repeat(auto-fit, minmax(700px, 1fr))"
                    gridAutoFlow="row"
                    gridColumnGap={5}
                    gridRowGap={5}
                >
                    {loading ? placeholders : events}
                </Box>
            </Box>
            <Footer />
        </Box>
    )
}

export default Events
