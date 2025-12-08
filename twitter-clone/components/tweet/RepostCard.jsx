"use client";

import TweetCard from "@/components/tweet/TweetCard";
import TweetActions from "./TweetActions";
import { timeAgo } from "@/lib/utils/time";

const RepostCard = ({ tweet, me }) => {
  const quoteComment = tweet.quoteComment || "";
  const timeText = timeAgo(tweet.createdAt);

  return (
    <>
      <div className="flex items-start gap-3 ml-6 mb-2 mt-4">
        {/* Avatar */}
        <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center flex-shrink-0">
          <img
            src={me?.image || "/images/default-avatar.jpeg"}
            alt="me"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1">
          {/* Name + time */}
          <div className="flex flex-col mb-3">
            <div className="flex items-center text-white">
              <span className="font-semibold">
                {me?.firstName} {me?.lastName}
              </span>

              <span className="mx-2 text-gray-400">·</span>

              <span className="text-gray-400 text-sm">
                {timeText}
              </span>
            </div>

            {/* QUOTE COMMENT (user's text) */}
            {quoteComment && (
              <p className="text-white leading-relaxed text-base mb-3">
                {quoteComment}
              </p>
            )}

            {/* Quoted Tweet */}
            <div className="border border-gray-700 rounded-xl p-3 mb-3 bg-black/40">
              <TweetCard tweet={tweet} small />
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-4">
        <TweetActions tweet={tweet} />
      </div>
    </>
  );
};

export default RepostCard;
