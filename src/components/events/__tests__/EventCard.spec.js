import React from "react"
import { render } from "@testing-library/react"

import EventCard from "../EventCard"

const data = {
    title: "Testing",
    desc: "Testing Description",
    status: "Upcoming",
    img: null,
    link: "https://my-cool-website.notreal",
    date: "contact@contact.com"
}

describe("Event Card", () => {
    test("Displays the corrent title", () => {
        const { getByTestId } = render(
            <EventCard {...data} />
        )

        expect(getByTestId("eventcard-title")).toHaveTextContent(data.title);
    })

    test("Displays the corrent description", () => {
        const { getByTestId } = render(
            <EventCard {...data} />
        )

        expect(getByTestId("eventcard-desc")).toHaveTextContent(data.desc);
    })

    test("Has the correct href", () => {
        const { getByTestId } = render(
            <EventCard {...data} />
        )

        expect(getByTestId("eventcard-learnmore").getAttribute("href")).toBe(data.link);
    })
})