import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
    Box,
    Heading,
    Text,
    Badge,
    Image,
    Button,
    Skeleton,
} from "@chakra-ui/react"
import SEO from "../components/SEO"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { ExternalLinkIcon } from "@chakra-ui/icons"

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
    return <Badge colorScheme={color}>{status}</Badge>
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
        shadow="xl"
        p="24px"
        backgroundColor="gray.50"
        border="1px rgb(0, 0, 0, 0.1) solid"
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
                <Heading color="black.900" size="lg">
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
                        color="gray.500"
                        fontSize="md"
                        fontWeight="500"
                        ml="10px"
                    >
                        {parseDate(date)}
                    </Text>
                </Box>
                <Text color="gray.500" fontSize="lg" fontWeight="500" mt="10px">
                    {desc}
                </Text>
            </Box>
            <Box>
                <Button
                    variant="link"
                    colorScheme="blue"
                    rightIcon={<ExternalLinkIcon />}
                    mt="10px"
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
    const data = useStaticQuery(graphql`
        query {
            allAirtable(filter: { table: { eq: "Content pipeline" } }) {
                edges {
                    node {
                        data {
                            Date
                            Description
                            Name
                            Email
                            Status
                            URL
                            Thumbnail {
                                url
                            }
                        }
                    }
                }
            }
        }
    `)
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)
    // Gets airtable data then sorts based on date
    if (loading) {
        var qldata = data["allAirtable"]["edges"].map(event => ({
            component: (
                <Event
                    title={event.node.data.Name}
                    desc={event.node.data.Description}
                    status={event.node.data.Status}
                    img={
                        event.node.data.hasOwnProperty("Thumbnail")
                            ? event.node.data.Thumbnail[0].url
                            : null
                    }
                    link={event.node.data.URL}
                    date={
                        event.node.data.Date === undefined
                            ? "00-00-00"
                            : event.node.data.Date
                    }
                />
            ),
            date:
                event.node.data.Date === undefined
                    ? "00-00-00"
                    : event.node.data.Date,
        }))
        // Sort lexicographically based on date
        qldata.sort((a, b) => b.date.localeCompare(a.date))
        // Retrieve component from object
        qldata = qldata.map(event => event.component)
        setEvents(qldata)
        setLoading(false)
    }
    return (
        <Box backgroundColor="white">
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
