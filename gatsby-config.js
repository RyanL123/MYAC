const path = require(`path`)
require("dotenv").config({
    path: `.env`,
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
                apiKey: process.env.AIRTABLE_API_KEY,
                concurrency: 5,
                tables: [
                    {
                        baseId: `appJ80ZqYPRkpXMCk`,
                        tableName: `Content pipeline`,
                    },
                    {
                        baseId: `appJ80ZqYPRkpXMCk`,
                        tableName: `Councils`,
                    },
                ],
            },
        },
        `@chakra-ui/gatsby-plugin`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
    ],
}
