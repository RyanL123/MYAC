import React, { useState, useEffect } from "react"
import {
    Box,
    Heading,
    Text,
    Badge,
    Image,
    Button,
    Skeleton,
} from "@chakra-ui/core"
import SEO from "../components/SEO"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const fetch = require("node-fetch")

function getAirtable() {
    const url =
        "https://api.airtable.com/v0/appvXxGyx3prUgKd3/Content%20pipeline?api_key=" +
        process.env.GATSBY_AIRTABLE_API
    return fetch(url).then(res => res.json())
}

const getBadge = status => {
    let color = ""
    switch (status) {
        case "Upcoming":
            color = "blue"
            break
        case "Concluded":
            color = "green"
            break
        case "Cancelled":
            color = "red"
            break
        default:
            break
    }
    return <Badge variantColor={color}>{status}</Badge>
}

const parseDate = date => {
    let year = date.slice(0, 4)
    let month = date.slice(5, 7)
    let day = date.slice(8)
    switch (month) {
        case "01":
            month = "Jan"
            break
        case "02":
            month = "Feb"
            break
        case "03":
            month = "Mar"
            break
        case "04":
            month = "Apr"
            break
        case "05":
            month = "May"
            break
        case "06":
            month = "Jun"
            break
        case "07":
            month = "Jul"
            break
        case "08":
            month = "Aug"
            break
        case "09":
            month = "Sep"
            break
        case "10":
            month = "Oct"
            break
        case "11":
            month = "Nov"
            break
        case "12":
            month = "Dec"
            break
        default:
            break
    }
    return year + " " + month + " " + day
}

const Event = ({ title, desc, status, img, link, date }) => (
    <Box
        shadow="lg"
        p="24px"
        backgroundColor="gray.700"
        borderRadius="lg"
        display={
            status === "Planning" || status === undefined ? "none" : "flex"
        }
        flexDirection="column"
    >
        <Image
            src={img}
            height="auto"
            width="100%"
            borderRadius="md"
            alt={title}
        />
        <Box
            mt="20px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height="100%"
        >
            <Box>
                <Heading color="white" size="lg">
                    {title}
                </Heading>
                <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    mt="10px"
                >
                    {getBadge(status)}
                    <Text
                        color="gray.100"
                        fontSize="md"
                        fontWeight="500"
                        ml="10px"
                    >
                        {parseDate(date)}
                    </Text>
                </Box>
                <Text color="gray.300" fontSize="lg" fontWeight="500" mt="10px">
                    {desc}
                </Text>
            </Box>
            <Box>
                <Button
                    variant="link"
                    variantColor="blue"
                    rightIcon="external-link"
                    mt="10px"
                >
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        Learn More
                    </a>
                </Button>
            </Box>
        </Box>
    </Box>
)

const Placeholder = () => (
    <Box
        shadow="lg"
        p="24px"
        backgroundColor="gray.700"
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
                        status={event.fields.Status}
                        img={
                            event.fields.hasOwnProperty("Thumbnail")
                                ? event.fields.Thumbnail[0].url
                                : null
                        }
                        link={event.fields.URL}
                        date={
                            event.fields.Date == undefined
                                ? "00-00-00"
                                : event.fields.Date
                        }
                    />
                ),
                date:
                    event.fields.Date == undefined
                        ? "00-00-00"
                        : event.fields.Date,
            }))
            // Sort lexicographically based on date
            events.sort((a, b) => b.date.localeCompare(a.date))
            // Retrieve component from object
            events = events.map(event => event.component)
            setEvents(events)
            setLoading(false)
        })
    })
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
                        "repeat(auto-fit, minmax(300px, 1fr))",
                        "repeat(auto-fit, minmax(300px, 1fr))",
                    ]}
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
