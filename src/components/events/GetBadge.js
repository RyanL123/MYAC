import React from "react"
import { Badge } from "@chakra-ui/react"

// Given the status of an event, returns the respective badge that it should have
export default function getBadge(status) {
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