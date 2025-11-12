export default function TopTweetsPanel({ tweets }) {
	const topTweets =
		tweets && tweets.posts
			? tweets.posts
					.map((t) => ({
						...t,
						_likes:
							t.reactions && typeof t.reactions.likes === "number"
								? t.reactions.likes
								: 0,
					}))
					.sort((a, b) => b._likes - a._likes)
					.slice(0, 3)
			: [];

	const tagCounts = {};
	if (tweets && tweets.posts) {
		tweets.posts.forEach((t) => {
			if (Array.isArray(t.tags)) {
				t.tags.forEach((tag) => {
					const key = String(tag).trim();
					if (!key) return;
					tagCounts[key] = (tagCounts[key] || 0) + 1;
				});
			}
		});
	}
	const topTags = Object.entries(tagCounts)
		.sort((a, b) => b[1] - a[1])
		.slice(0, 5);

	return (
		<aside className="fixed top-0 right-36 h-screen w-[320px] bg-[#0a0a0a] border-l border-zinc-800 text-white flex flex-col items-start p-6 space-y-4 shadow-lg hidden lg:block">
			<div className="border rounded-lg border-zinc-800 w-[340px] p-4">
				<h2 className="text-lg font-semibold mb-4">Today's News</h2>

				<div className="space-y-4">
					{topTweets.length > 0 ? (
						topTweets.map((tweet) => (
							<div
								key={tweet.id}
								className="bg-[#111] p-4 rounded-md hover:bg-[#1a1a1a] transition-colors"
							>
								<p className="font-semibold text-white mb-1">{tweet.title}</p>
								<p className="text-sm text-gray-200 line-clamp-2">
									{tweet.body}
								</p>
								<p className="text-xs text-gray-200 mt-2">
									{tweet.reactions.likes} likes
								</p>
							</div>
						))
					) : (
						<p className="text-sm text-gray-400">Loading top tweets...</p>
					)}
				</div>
			</div>

      <div className="border rounded-lg border-zinc-800 w-[340px] p-4">
        <h2 className="text-lg font-semibold mb-4">What's Happening</h2>

        <div className="space-y-2">
          {topTags.length > 0 ? (
            topTags.map(([tag, count]) => (
              <div
                key={tag}
                className="bg-[#111] p-3 rounded-md flex items-center justify-between hover:bg-[#1a1a1a] transition-colors"
              >
                <span className="text-sm text-gray-200">#{tag}</span>
                <span className="text-xs text-gray-400">{count}</span>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-400">No tags yet…</p>
          )}
        </div>
      </div>
		</aside>
	);
}
