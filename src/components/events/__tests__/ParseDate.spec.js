import parseDate from "../ParseDate"

const dates = [
    {
        input: "2020/02/01",
        output: "2020 Feb 01"
    },
    {
        input: "2021/05/20",
        output: "2021 May 20"
    },
    {
        input: "2019/07/01",
        output: "2019 Jul 01"
    }
]
describe("Date parsing function", () => {
    test("Returns the correct data", () => {
        dates.forEach(({ input, output }) => {
            expect(parseDate(input)).toBe(output)
        })
    })
})