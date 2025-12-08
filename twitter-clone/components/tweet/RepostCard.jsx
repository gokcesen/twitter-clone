"use client";

import TweetCard from "@/components/tweet/TweetCard";
import TweetActions from "./TweetActions";

const RepostCard = ({ tweet, me, onQuote }) => {
	return (
		<>

<div className="flex items-center gap-3 ml-6 mb-2 mt-4">
				<div className="w-14 h-14 rounded-full overflow-hidden bg-gray-700 
             flex items-center justify-center ">
					<img
						src={me?.image || "/images/default-avatar.jpeg"}
						alt="me"
						className="w-full h-full object-cover"
					/>
				</div>

				<div className="flex flex-col">
					<span className="text-white font-semibold">
						{me?.firstName} {me?.lastName}
					</span>
					<span className="text-gray-400 text-sm">@{me?.username}</span>
				</div>
			</div>
			<div className="border border-gray-700 rounded-xl p-3 mb-3 ml-28 mr-4 bg-black/40 w-[650px]">
				<TweetCard tweet={tweet} small />
			</div>
            <div className="mt-4"> 
    <TweetActions tweet={tweet} onQuote={on}/>
  </div>
		</>
	);
};

export default RepostCard;
