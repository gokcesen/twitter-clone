"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupClient() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        username,
        password
      })
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Signup failed");
      return;
    }

    router.push("/login");
  }

  return (
    <div className="h-screen w-full flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md flex flex-col gap-6 p-8">

        <h1 className="text-4xl font-bold">Create your account</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="First name"
            className="px-4 py-3 bg-neutral-900 rounded border border-neutral-700"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Last name"
            className="px-4 py-3 bg-neutral-900 rounded border border-neutral-700"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Username"
            className="px-4 py-3 bg-neutral-900 rounded border border-neutral-700"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 bg-neutral-900 rounded border border-neutral-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="px-4 py-3 bg-neutral-900 rounded border border-neutral-700"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            className="py-3 bg-blue-500 rounded font-medium"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
