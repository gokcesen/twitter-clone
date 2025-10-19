'use client';

import TweetCard from "@/components/TweetCard";
import { useEffect, useState } from "react";
import Link from "next/link";

  const Home =  () => {
  const [tweets, setTweets] = useState([]);

  const fetchTweets = async () => {
    fetch('https://dummyjson.com/posts')
      .then((res) => res.json())
      .then((data) => setTweets(data));
  };
  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {tweets &&
          tweets.posts &&
            tweets.posts.map((tweet) => (
              <Link key={tweet.id} href={`/tweet/${tweet.id}`}>
                <TweetCard key={tweet.id} tweet={tweet}/>
              </Link>
            ))
        }    
        <div className="flex gap-4 items-center flex-col sm:flex-row">
         
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
  
      </footer>
    </div>
  );
}

export default Home;
