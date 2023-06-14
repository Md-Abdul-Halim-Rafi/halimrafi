import React from "react";
import Head from "next/head";

import { basicInfo } from "@/common/constants";

interface Props {
    title: string;
    description?: string;
    image?: string;
    url?: string;
    type: "article" | "website";
    schemaMarkup?: object;
}

const SEO = (props: Props) => {

    const { title, description, image, url, type = "website", schemaMarkup } = props;

    const rootURL = "https://www.halimrafi.com";

    const metaDescription = type === "article" ? description : basicInfo.description;
    const metaImage = image ? decodeURIComponent(image) : "https://assets.farmjo.xyz/social_logo.png";
    const metaUrl = url ? rootURL + url : rootURL;  

    return (
        <Head>
            <title>{title}</title>

            <meta name="description" content={metaDescription} />
            <meta name="image" content={metaImage} />

            <meta property="og:site_name" content="Farmjo" />
            <meta property="og:title" content={title} />

            <meta property="og:image" content={metaImage} />
            <meta property="og:image:secure_url" content={metaImage} />
            <meta property="og:image:alt" content={title} />
            <meta property="og:image:width" content="600px" />
            <meta property="og:image:height" content="315px" />

            <meta property="og:url" content={metaUrl} />
            <meta property="og:type" content={type} />
            <meta property="og:description" content={metaDescription} />
            <meta property="fb:app_id" content={process.env.NEXT_PUBLIC_FB_APP_ID} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:site" content={basicInfo.twitterHandle} />
            <meta property="twitter:creator" content={basicInfo.twitterHandle} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:url" content={metaUrl} />
            <meta property="twitter:image" content={metaImage} />
            <meta property="twitter:image:alt" content={title} />
            <meta property="twitter:description" content={metaDescription} />

            <link rel="alternate" hrefLang="bn" href={rootURL} />
            <link rel="canonical" href={rootURL} />

            {schemaMarkup && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
                />
            )}
        </Head>
    );
}

export default SEO;
