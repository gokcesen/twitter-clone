import TweetDetailsClient from "./TweetDetailsClient";

export const metadata = {
  title: "Tweet – Twitter Clone",
  icons: {
    icon: "/images/x-logo.png", 
  },
};

const TweetDetails = async ({ params }) => {
  const resolvedParams = await params;
  return <TweetDetailsClient params={resolvedParams}/>
};

export default TweetDetails;
