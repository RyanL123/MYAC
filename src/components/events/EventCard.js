import React from "react"
import { Link } from "gatsby"

import {
    Box,
    Heading,
    Text,
    Image,
    Button
} from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"

import getBadge from "./GetBadge"
import parseDate from "./ParseDate"

export default function Event({ title, desc, status, img, link, date }) {
    return (
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
                        {link[0] === "/" ? (
                            <Link
                                to={link}
                            >
                                Learn More
                            </Link>
                        )
                            : (
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Learn More"
                                >
                                    Learn More
                                </a>)
                        }
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}