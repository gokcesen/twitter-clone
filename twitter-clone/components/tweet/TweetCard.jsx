import TweetActions from "./TweetActions";
import { FiUser } from "react-icons/fi";

const TweetCard = ({ tweet }) => {
	return (
		<>
			<div key={tweet.id} className="p-6 w-[700px] mb-2">
				{/* Avatar + Username */}
				<div className="flex items-center space-x-3 mb-3">
					<div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center">
						<FiUser size={32} className="text-white" />
					</div>
					<div className="flex flex-col">
						<span className="font-semibold text-white">John Doe</span>
						<span className="text-sm text-gray-400">@johndoe</span>
					</div>
				</div>

				<p className="text-white mb-3 leading-relaxed">{tweet.body}</p>

				<TweetActions tweet={tweet} />
			</div>
		</>
	);
};

export default TweetCard;
