'use client';

import TweetCard from "@/components/TweetCard";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import TopTweetsPanel from "@/components/TopTweetsPanel";
import Sidebar from "@/components/Sidebar";

  const Home =  () => {
  const [tweets, setTweets] = useState([]);

  const fetchTweets = async () => {
    fetch('/api/tweets')
      .then((res) => res.json())
      .then((data) => setTweets(data));
  };
  useEffect(() => {
    fetchTweets();
  }, []);

  return ( 
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Header />
      <main className="flex flex-row row-start-2 items-start justify-center">
        <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start ml-60">
        {tweets &&
          tweets.posts &&
            tweets.posts.map((tweet) => (
              <Link key={tweet.id} href={`/tweet/${tweet.id}`}>
                <TweetCard key={tweet.id} tweet={tweet}/>
                <div className="border-b border-zinc-800 w-[1060px]"></div>
              </Link>
            ))
        }   
        </div> 
        <TopTweetsPanel className="w-[600px] border-l border-zinc-800 p-6 ml-10" tweets={tweets}/>
      </main>
      

      <Footer />
  
    </div>
  );
}

export default Home;
