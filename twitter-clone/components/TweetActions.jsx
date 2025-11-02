import {
    FiMessageCircle,
    FiRepeat,
    FiBarChart2,
    FiBookmark,
    FiShare
  } from "react-icons/fi";
import LikeButton from "./buttons/LikeButton";
import CommentButton from "./buttons/CommentButton";

  const TweetActions = ({ tweet }) => {
    return(
        <>
         <div className="flex items-center gap-4 mb-3">
            <CommentButton initialComments={tweet.totalComments} />
            <LikeButton initialLikes={tweet.reactions.likes} />
        </div>
        </>
    );

  }

  export default TweetActions;

  