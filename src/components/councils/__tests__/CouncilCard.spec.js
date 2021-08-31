import React from "react"
import { render } from "@testing-library/react"

import CouncilCard from "../CouncilCard"

const { title, desc, link, contact } = {
    title: "Testing",
    desc: "Testing Description",
    link: "#",
    contact: "contact@contact.com"
}

describe("Council Card", () => {
    test("Displays the corrent title", () => {
        const { getByTestId } = render(
            <CouncilCard title={title} desc={desc} link={link} contact={contact} />
        )

        expect(getByTestId("councilcard-title")).toHaveTextContent(title);
    })

    test("Displays the corrent description", () => {
        const { getByTestId } = render(
            <CouncilCard title={title} desc={desc} link={link} contact={contact} />
        )

        expect(getByTestId("councilcard-desc")).toHaveTextContent(desc);
    })
})