"use client";
import TweetCard from "@/components/tweet/TweetCard";
import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import CreateTweetBox from "@/components/tweet/CreateTweetBox";

const HomeClient = () => {
    const [tweets, setTweets] = useState([]);
    const [userMap, setUserMap] = useState({});
  
    useEffect(() => {
      const fetchAll = async () => {
        try {
          const res = await fetch("/api/tweets");
          const data = await res.json();
          const posts = data.posts || [];
          const userIds = data.userIds || [];
  
          let users = [];
          if (userIds.length > 0) {
            const usersRes = await fetch(`/api/users?ids=${userIds.join(",")}`);
            const usersData = await usersRes.json();
            users = usersData.users || [];
          }
  
          const map = {};
          users.forEach((u) => {
            map[u.id] = u;
          });
  
          setUserMap(map);
          setTweets(posts);
        } catch (err) {
          console.error(err);
        }
      };
  
      fetchAll();
    }, []);
    
	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<Sidebar />
			<main className="flex flex-row row-start-2 items-start justify-center">
				<div className="flex flex-col gap-y-0 row-start-2 items-center sm:items-start ml-60">
					<div className="w-[800px] mx-auto">
						<Header />
					</div>
          <CreateTweetBox />
          {tweets.map((tweet) => {
            const user = userMap[tweet.userId];
            return (
              <Link key={tweet.id} href={`/tweet/${tweet.id}`}>
                <TweetCard tweet={{ ...tweet, user }} />
                <div className="border-b border-zinc-800 w-[1060px]"></div>
              </Link>
            );
          })}
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default HomeClient;
