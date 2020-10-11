import React from "react"
import { Box, Text, Button } from "@chakra-ui/core"
import Title from "./Title"
import { Link } from "gatsby"
import summary from "../assets/summary.svg"

const Summary = () => {
    return (
        <Box
            px="10vw"
            py="100px"
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
                    title="Lorem ipsum dolor"
                    subtitle="Lorem ipsum dolor sit amet"
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nos trud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
                <Box mt="20px">
                    <Link to="/constitution">
                        <Button
                            variantColor="blue"
                            variant="link"
                            rightIcon="arrow-forward"
                            fontSize="18px"
                        >
                            Our Constitution
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
                <img src={summary} />
            </Box>
        </Box>
    )
}

export default Summary
