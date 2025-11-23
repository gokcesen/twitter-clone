import TweetDetailsClient from "./TweetDetailsClient";

export const metadata = {
  title: "Tweet – Twitter Clone",
  icons: {
    icon: "/images/x-logo.png", 
  },
};

const TweetDetails = ({ params }) => {
  return <TweetDetailsClient params={params}/>
};

export default TweetDetails;
