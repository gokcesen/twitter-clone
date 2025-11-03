"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopTweetsPanel from "@/components/TopTweetsPanel";
import Sidebar from "@/components/Sidebar";
import { useState, useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Sidebar />
        <main className="pt-14">
          {children}
        </main>
        <TopTweetsPanel className="w-[600px] border-l border-zinc-800 p-6 ml-10" tweets={tweets}/>
      </body>
    </html>
  );
}
