import React from "react";
import { Helmet } from "react-helmet";

const CommonMeta = ({
    title = "Harsh Raghavani",
    descriptionContent = "Harsh Raghavani Portfolio",
    keywordsContent = "Harsh Raghavani",
}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={descriptionContent} />
            <meta name="keywords" content={keywordsContent} />
        </Helmet>
    );
};

export default CommonMeta;
