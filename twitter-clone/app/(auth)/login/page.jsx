"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";


export default function LoginPage() {
  const router = useRouter();
  const { setUser } = useAuth();

  function handleLogin() {
    setUser({ username: "johndoe" });
    localStorage.setItem("user", JSON.stringify({ username: "johndoe" }));
    router.push("/home");
  }


  return (
    <div className="h-screen flex items-center justify-center text-white flex-col gap-4">
      <h1 className="text-3xl">Login Page</h1>
      <button 
        onClick={handleLogin}
        className="px-4 py-2 bg-blue-500 rounded"
      >
        Dummy Login (johndoe)
      </button>
    </div>
  );
}