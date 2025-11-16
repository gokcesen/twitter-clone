import TweetActions from "./TweetActions";

const TweetCard = ({ tweet }) => {
  const user = tweet.user;

  return (
    <div className="p-6 w-[800px] mb-2">
      <div className="flex items-center space-x-3 mb-3">
        <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center overflow-hidden">
          {user?.image ? (
            <img
              src={user.image}
              alt={user.username}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-500" />
          )}
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-white">
            {user ? `${user.firstName} ${user.lastName}` : "Unknown"}
          </span>
          <span className="text-sm text-gray-400">
            {user ? `@${user.username}` : "@unknown"}
          </span>
        </div>
      </div>

      <p className="text-white mb-3 leading-relaxed">{tweet.body}</p>

      <TweetActions tweet={tweet} />

    </div>
  );
};

export default TweetCard;

