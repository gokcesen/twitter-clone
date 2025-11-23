"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import TopTweetsPanel from "@/components/TopTweetsPanel";
import Sidebar from "@/components/Sidebar";
import { useState, useEffect } from "react";
import Providers from "../providers";
import LoadingScreen from "@/components/LoadingScreen";
import { usePathname } from "next/navigation";
import MessagePanel from "@/components/MessagePanel";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function MainLayout({ children }) {
  const [tweets, setTweets] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [routeLoading, setRouteLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    fetch("/api/tweets")
      .then((res) => res.json())
      .then((data) => setTweets(data))
      .catch((e) => console.error(e))
      .finally(() => setDataLoading(false));
  }, []);

  useEffect(() => {
    if (!dataLoading) {
      setRouteLoading(true);

      requestAnimationFrame(() => {
        setTimeout(() => {
          setRouteLoading(false);
        }, 300);
      });
    }
  }, [pathname, dataLoading]);

  const loading = dataLoading || routeLoading;

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} antialiased ${
        loading ? "overflow-hidden" : ""
      } flex`}
    >
      <Providers>
        <Sidebar />

        <main className="pt-14 flex-1">
          {children}
          <MessagePanel />
        </main>

        <TopTweetsPanel
          className="w-[600px] border-l border-zinc-800 p-6 ml-10"
          tweets={tweets}
        />

        {loading && <LoadingScreen />}
      </Providers>
    </div>
  );
}

