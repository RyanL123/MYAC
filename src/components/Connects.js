import React from "react"
import { Box, Text, Button } from "@chakra-ui/core"
import { Link } from "gatsby"
import Title from "./Title"
import connects from "../assets/connects.svg"

const Connects = () => {
    return (
        <Box
            px="10vw"
            py="100px"
            display="flex"
            flexDirection={[
                "column-reverse",
                "column-reverse",
                "column-reverse",
                "row",
            ]}
            justifyContent="center"
            alignItems="center"
        >
            <Box
                width={["200px", "300px", "600px", "600px"]}
                mt={["50px", "50px", "50px", null]}
                borderRadius="20px"
                overflow="hidden"
            >
                <img src={connects} alt="connects" />
            </Box>
            <Box
                width={["100%", "100%", "500px", "500px"]}
                ml={["0", "0", "125px", "125px"]}
            >
                <Title
                    title="MYAC Connects"
                    subtitle="Always Up To Something"
                    align="left"
                    subColor="blue.300"
                    color="white"
                />
                <Text
                    color="gray.300"
                    fontSize="xl"
                    fontWeight="400"
                    mt="30px"
                    lineHeight="1.5em"
                >
                    MYAC Connects are a great way to meet new people and get
                    involved in your community. Come out on the second wednesday
                    of every month to meet new, network, and find new
                    opportunities.
                </Text>
                <Box mt="30px">
                    <Link to="/events">
                        <Button
                            variantColor="blue"
                            rightIcon="arrow-forward"
                            fontSize="18px"
                        >
                            View Our Events
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}
export default Connects
