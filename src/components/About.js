import React from "react"
import { Box, Text, Heading, Button } from "@chakra-ui/core"
import Img from "gatsby-image"
import { Link } from "gatsby"

export default ({ name, position, bio, img }) => (
    <Box px="10vw" py="100px" backgroundColor="gray.800">
        <Box mb="50px">
            <Link to="/about">
                <Button
                    variantColor="blue"
                    variant="link"
                    leftIcon="arrow-back"
                    fontSize="18px"
                >
                    Back
                </Button>
            </Link>
        </Box>
        <Box
            display="flex"
            flexDirection={["column", null, "row"]}
            alignItems="center"
            justifyContent="space-evenly"
        >
            <Box>
                <Box
                    height="200px"
                    width="200px"
                    minW="200px"
                    minH="200px"
                    borderRadius="50%"
                    overflow="hidden"
                    boxShadow="lg"
                >
                    <Img
                        fluid={img.childImageSharp.fluid}
                        style={{ width: "100%", height: "100%" }}
                    />
                </Box>
                <Heading color="white" size="lg" textAlign="center" mt="25px">
                    {name}
                </Heading>
            </Box>
            <Box
                maxWidth="800px"
                mt={["25px", "25px", null]}
                ml={[null, "25px", "25px"]}
            >
                <Heading color="white" size="xl">
                    {position}
                </Heading>
                <Box my="25px">
                    <hr></hr>
                </Box>
                <Text
                    color="gray.400"
                    fontWeight="400"
                    fontSize="lg"
                    lineHeight="1.65em"
                >
                    {bio}
                </Text>
            </Box>
        </Box>
    </Box>
)
