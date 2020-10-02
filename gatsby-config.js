const path = require(`path`)

module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `assets`,
                path: path.join(__dirname, `src`, `assets`),
            },
        },
        `gatsby-plugin-chakra-ui`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
    ],
}
