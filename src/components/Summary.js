import React from "react"
import { Box, Text, Button } from "@chakra-ui/core"
import Title from "./Title"
import { Link } from "gatsby"
import summary from "../assets/summary.svg"

const Summary = () => {
    return (
        <Box
            px="10vw"
            py="150px"
            backgroundColor="gray.50"
            display="flex"
            flexDirection={["column", "column", "column", "row"]}
            justifyContent="space-between"
            alignItems="center"
        >
            <Box
                width={["100%", "100%", "700px", "900px"]}
                pr={["0", "0", "0", "75px"]}
            >
                <Title
                    title="Empowering Youth"
                    subtitle="We are the Mississauga Youth Action Committee"
                    align="left"
                    subColor="blue.400"
                    color="black.800"
                />
                <Text
                    color="gray.400"
                    mt="30px"
                    fontSize="xl"
                    lineHeight="1.65em"
                >
                    They strive to represent the 145,000 youth in the city of
                    Mississauga and works to voice their opinions and better
                    engage youth in their community. MYAC promotes the
                    well-being of youth (aged 14-24) in the city of Mississauga.
                </Text>
                <Box mt="20px">
                    <Link to="/about">
                        <Button
                            variantColor="blue"
                            variant="link"
                            rightIcon="arrow-forward"
                            fontSize="18px"
                        >
                            Meet The Team
                        </Button>
                    </Link>
                </Box>
            </Box>
            <Box
                width={["200px", "300px", "400px", "500px"]}
                mt={["50px", "50px", "50px", null]}
                borderRadius="20px"
                overflow="hidden"
            >
                <img src={summary} alt="team" />
            </Box>
        </Box>
    )
}

export default Summary
