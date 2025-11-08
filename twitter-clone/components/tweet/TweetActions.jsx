import LikeButton from "../buttons/LikeButton";
import CommentButton from "../buttons/CommentButton";
import RepostButton from "../buttons/RepostButton";
import ShowStatsButton from "../buttons/ShowStatsButton";
import BookmarksButton from "../buttons/BookmarksButton";
import { BsShare } from "react-icons/bs";

  const TweetActions = ({ tweet }) => {       
    return(
        <>
         <div className="flex items-center gap-20 mb-3 ml-12 text-gray-400">
            <CommentButton initialComments={tweet.totalComments} />
            <RepostButton tweet={tweet}/>
            <LikeButton initialLikes={tweet.reactions.likes} />
            <ShowStatsButton initialStats={tweet.views} />
            <div className="flex gap-4 ml-12">
            <BookmarksButton tweet={tweet}/>
            <BsShare size={16}/>
            </div>
        </div>
        </>
    );

  }

  export default TweetActions;

  