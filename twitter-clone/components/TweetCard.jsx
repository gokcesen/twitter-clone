import LikeButton from "./LikeButton";
import DislikeButton from "./DislikeButton";

const TweetCard = ({ tweet }) => {
    return(
        <>
        <div
               key={tweet.id}
               className="p-6 w-[700px] mb-4"
              >
                <h2 className="font-bold text-xl mb-3 text-gray-200">{tweet.title}</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">{tweet.body}</p>
                <div className="flex items-center gap-4 mb-3">
                    <LikeButton initialLikes={tweet.reactions.likes} />
                    <DislikeButton initialDislikes={tweet.reactions.dislikes} />
                </div>
                <p className="text-sm text-blue-400">Tags: #{tweet.tags.join(', #')}</p>
               </div>
        </>
    );
}

export default TweetCard;
