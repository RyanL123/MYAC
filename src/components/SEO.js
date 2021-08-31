import React from "react"
import { Helmet } from "react-helmet"

const MySEO = ({ title }) => (
    <Helmet>
        <title>{title}</title>
        <meta
            name="description"
            content="The Mississauga Youth Action Committee works to voice the opinions of the 145,000 youth in Mississauga and better engage youth in their community."
        />
        {/* Open Graph Protocol */}
        <meta property="og:title" content="MYAC" />
        <meta
            property="og:description"
            content="The Mississauga Youth Action Committee works to voice the opinions of the 145,000 youth in Mississauga and better engage youth in their community."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.png" />
        {/* Twitter  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="MYAC" />
        <meta
            property="twitter:description"
            content="The Mississauga Youth Action Committee works to voice the opinions of the 145,000 youth in Mississauga and better engage youth in their community."
        />
        <meta property="twitter:image" content="/logo.png" />
        <html lang="en" />
    </Helmet>
)

export default MySEO