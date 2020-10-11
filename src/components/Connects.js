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
                    subtitle="Lorem ipsum dolor sit amet"
                    align="left"
                    subColor="blue.300"
                    color="white"
                />
                <Text color="gray.400" fontSize="xl" fontWeight="400" mt="30px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </Text>
                <Box mt="20px">
                    <Link to="/events">
                        <Button
                            variantColor="blue"
                            variant="link"
                            rightIcon="arrow-forward"
                            fontSize="18px"
                        >
                            Events
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}
export default Connects
