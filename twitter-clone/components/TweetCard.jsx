
const TweetCard = ({ tweet }) => {
    return(
        <>
        <div
               key={tweet.id}
               className="border border-gray-300 rounded-lg p-4 w-[400px]"
              >
                <h2 className="font-bold text-lg mb-2">{tweet.title}</h2>
                <p className="text-gray-700">{tweet.body}</p>
              </div>
        </>
    );
}

export default TweetCard;
