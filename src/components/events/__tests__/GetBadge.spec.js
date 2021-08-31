import renderer from "react-test-renderer"

import getBadge from "../GetBadge"

describe("Badge function", () => {
    test("Returns the correct badge", () => {
        const tree = renderer
            .create(getBadge("Concluded"))
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})