import React from "react"
import { Box, Heading, Text } from "@chakra-ui/core"
import Title from "./Title"

const Card = ({ title, content, icon }) => (
    <Box p="32px" maxWidth="450px" textAlign="left">
        <Box
            width="42px"
            height="42px"
            backgroundColor="gray.700"
            borderRadius="8px"
            p="6px"
        >
            {icon}
        </Box>
        <Heading color="white" size="lg" lineHeight="1em" mt="25px">
            {title}
        </Heading>
        <Text
            color="gray.300"
            fontSize="md"
            mt="25px"
            fontWeight="400"
            lineHeight="1.65em"
        >
            {content}
        </Text>
    </Box>
)

export default () => (
    <Box px="10vw" py="150px">
        <Title
            title="Our Objectives"
            subtitle="By the youth, for the youth"
            align="center"
            subColor="blue.300"
            color="white"
        />
        <Box
            mt="50px"
            display="flex"
            flexDirection={["column", "column", "column", "row"]}
            justifyContent="space-between"
            alignItems="flex-start"
        >
            <Card
                title="Consult all youth"
                content="MYAC actively consults youth and youth groups across the city to collectively determine the voice and vision of youth across Mississauga."
                icon={
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="#60a1ec"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                        />
                    </svg>
                }
            />
            <Card
                title="Resources and Development"
                content="MYAC provides resources and professional development to youth in Mississauga who are engaged in student leadership opportunities through the Youth Advisory Commitees, Teen Advisory Groups, and other youth groups."
                icon={
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="#60a1ec"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                        />
                    </svg>
                }
            />
            <Card
                title="Volunteer Opportunities"
                content="MYAC provides volunteer opportunities to youth, and encourages volunteerism and student leadership within Mississauga."
                icon={
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="#60a1ec"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                    </svg>
                }
            />
        </Box>
    </Box>
)
