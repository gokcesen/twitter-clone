import React from "react";

const TweetDetails = async ({ params }) => {
    const { id } = await params;
    return(
        <>
            <h1>Tweet id: {id} </h1>
        </>
    );

} 

export default TweetDetails;