import TweetActions from "./TweetActions";
import { timeAgo } from "@/lib/utils/time";

const TweetCard = ({ tweet, small = false }) => {
  const user = tweet.user;
  const timeText = timeAgo(tweet.createdAt);

  return (
    <div
      className={`
        ${small ? "p-3" : "p-6"} 
        max-w-[800px] 
        mb-2
      `}
    >
      <div className={`flex items-center space-x-3 mb-3`}>
        <div
          className={`
            rounded-full bg-gray-600 flex items-center justify-center overflow-hidden
            ${small ? "w-10 h-10" : "w-14 h-14"}
          `}
        >
          {user?.image ? (
            <img src={user.image} alt={user.username} className="w-full h-full object-cover" />
          ) : (
            <img src="/images/default-avatar.jpeg" alt="avatar" className="w-full h-full object-cover" />
          )}
        </div>

        <div className="flex flex-col">
          <div className="flex items-center text-white">
            <span className={`${small ? "text-sm" : "text-base"} font-semibold`}>
              {user ? `${user.firstName} ${user.lastName}` : "John Doe"}
            </span>

            <span className="mx-2 text-gray-400">·</span>

            <span className={`${small ? "text-xs" : "text-sm"} text-gray-400`}>
              {timeText}
            </span>
          </div>

          <span className={`${small ? "text-xs" : "text-sm"} text-gray-400`}>
            {user ? `@${user.username}` : "@johndoe"}
          </span>
        </div>
      </div>

      <p
        className={`
          text-white leading-relaxed 
          ${small ? "ml-12 text-[14px]" : "ml-[70px] text-base"}
        `}
      >
        {tweet.body}
      </p>

      {!small && (
  <div className="mt-4"> 
    <TweetActions tweet={tweet} />
  </div>
)}
    </div>
  );
};

export default TweetCard;
