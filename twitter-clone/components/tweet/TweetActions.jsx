import LikeButton from "../buttons/LikeButton";
import CommentButton from "../buttons/CommentButton";
import RepostButton from "../buttons/RepostButton";
import ShowStatsButton from "../buttons/ShowStatsButton";
import BookmarksButton from "../buttons/BookmarksButton";
import { BsShare } from "react-icons/bs";
import { LuShare } from "react-icons/lu";


  const TweetActions = ({ tweet }) => {       
    const stop = (e) => {
      e.stopPropagation();
      e.preventDefault(); 
    };

    return(
        <>
         <div 
         className="flex items-center gap-20 mb-3 ml-12 text-gray-400"
          onClick={stop}
          >
            <CommentButton initialComments={tweet.totalComments} />
            <RepostButton tweet={tweet}/>
            <LikeButton initialLikes={tweet.likes} />
            <ShowStatsButton initialStats={tweet.views} />
            <div className="flex gap-4 ml-12">
            <BookmarksButton tweet={tweet}/>
            <LuShare size={16}/>
            </div>
        </div>
        </>
    );

  }

  export default TweetActions;

  