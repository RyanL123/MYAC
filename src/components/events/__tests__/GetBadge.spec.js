import renderer from "react-test-renderer"

import getBadge from "../GetBadge"

const badges = [
    "Upcoming",
    "Concluded",
    "Cancelled",
    "A badge not covered in the function"
]

describe("Badge function", () => {
    test("Returns the correct badge", () => {
        badges.forEach((badge) => {
            const tree = renderer
                .create(getBadge(badge))
                .toJSON()

            expect(tree).toMatchSnapshot()
        })
    })
})