import React from "react"

import {
    Box,
    Heading,
    Text,
    Image,
    Button,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
} from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"

export default function Council({ title, desc, img, link, contact }) {
    return (
        <Box
            shadow="xl"
            p="24px"
            backgroundColor="gray.50"
            border="1px rgb(0, 0, 0, 0.1) solid"
            borderRadius="lg"
            display="flex"
            flexDirection="row"
            alignItems="center"
        >
            <Image
                src={img}
                height="200px"
                width="200px"
                objectFit="cover"
                borderRadius="md"
                alt={title}
            />
            <Box
                ml="20px"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                height="100%"
            >
                <Box>
                    <Heading color="black.900" size="lg" data-testid="councilcard-title">
                        {title}
                    </Heading>
                    <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        mt="10px"
                    ></Box>
                    <Text color="gray.500" fontSize="lg" fontWeight="500" mt="10px" data-testid="councilcard-desc">
                        {desc}
                    </Text>
                </Box>
                <Box mt="10px">
                    <Button
                        variant="link"
                        colorScheme="blue"
                        rightIcon={<ExternalLinkIcon />}
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
                    <Popover>
                        <PopoverTrigger>
                            <Button ml="20px" backgroundColor="blue.400" color="white" _hover={{
                                background: "blue.600",
                                color: "white"
                            }}>Contact</Button>
                        </PopoverTrigger>
                        <PopoverContent zIndex={4} width="500px">
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverHeader>Contact Us</PopoverHeader>
                            <PopoverBody>{contact}</PopoverBody>
                        </PopoverContent>
                    </Popover>
                </Box>
            </Box>
        </Box>
    )
}