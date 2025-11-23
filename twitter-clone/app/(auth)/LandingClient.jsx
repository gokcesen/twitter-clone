"use client";
import Link from "next/link";

const LandingClient = () => {
	return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img
        src="/images/x-logo.png"
        alt="Logo"
        width={90}
        height={90}
      />

      <h1 className="text-3xl font-bold">Welcome to Twitter Clone</h1>

      <p className="text-zinc-400 text-center w-80">
        Connect with the world. Share your thoughts. Join the conversation.
      </p>

      <div className="flex gap-4">
        <Link href="/login">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Login
          </button>
        </Link>

        <Link href="/signup">
          <button className="px-4 py-2 bg-green-600 text-white rounded">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingClient;