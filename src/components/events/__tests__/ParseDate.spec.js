import parseDate from "../ParseDate"

const dates = [
    {
        input: "2020/01/01",
        output: "2020 Jan 01"
    },
    {
        input: "2020/02/02",
        output: "2020 Feb 02"
    },
    {
        input: "2020/03/03",
        output: "2020 Mar 03"
    },
    {
        input: "2020/04/04",
        output: "2020 Apr 04"
    },
    {
        input: "2020/05/05",
        output: "2020 May 05"
    },
    {
        input: "2020/06/23",
        output: "2020 Jun 23"
    },
    {
        input: "2020/07/12",
        output: "2020 Jul 12"
    },
    {
        input: "2020/08/17",
        output: "2020 Aug 17"
    },
    {
        input: "2020/09/28",
        output: "2020 Sep 28"
    },
    {
        input: "2020/10/22",
        output: "2020 Oct 22"
    },
    {
        input: "2020/11/01",
        output: "2020 Nov 01"
    },
    {
        input: "2020/12/23",
        output: "2020 Dec 23"
    },
    {
        input: "2019/13/01",
        output: "2019 13 01"
    },
]
describe("Date parsing function", () => {
    test("Returns the correct data", () => {
        dates.forEach(({ input, output }) => {
            expect(parseDate(input)).toBe(output)
        })
    })
})