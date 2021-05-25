const path = require(`path`)
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `assets`,
                path: path.join(__dirname, `src`, `assets`),
            },
        },
        {
            resolve: `gatsby-source-airtable`,
            options: {
                apiKey: process.env.GATSBY_AIRTABLE_API,
                concurrency: 5,
                tables: [
                    {
                        baseId: `appvXxGyx3prUgKd3`,
                        tableName: `Content pipeline`,
                    },
                    {
                        baseId: `appvXxGyx3prUgKd3`,
                        tableName: `Councils`,
                    },
                ],
            },
        },
        `gatsby-plugin-chakra-ui`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
    ],
}
