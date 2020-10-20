import React from "react"
import { Box, Text, Button } from "@chakra-ui/core"
import { Link } from "gatsby"
import Title from "./Title"
import connects from "../assets/connects.svg"

const Connects = () => {
    return (
        <Box
            px="10vw"
            py="150px"
            display="flex"
            flexDirection={[
                "column-reverse",
                "column-reverse",
                "column-reverse",
                "row",
            ]}
            justifyContent="space-between"
            alignItems="center"
        >
            <Box
                width={["200px", "300px", "600px", "700px"]}
                mt={["50px", "50px", "50px", null]}
                borderRadius="20px"
                overflow="hidden"
            >
                <img src={connects} alt="connects" />
            </Box>
            <Box
                width={["100%", "100%", "700px", "900px"]}
                pl={["0", "0", "0", "75px"]}
            >
                <Title
                    title="MYAC Connects"
                    subtitle="Always Up To Something"
                    align="left"
                    subColor="blue.300"
                    color="white"
                />
                <Text color="gray.300" fontSize="xl" fontWeight="400" mt="30px">
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
