"use client";

export default function ProfilePage() {
  return (
    <main className="flex justify-center mt-8">
      <div className="w-full max-w-2xl bg-black text-white border border-gray-800 rounded-xl overflow-hidden">
        <div className="h-40 bg-gradient-to-r from-blue-500 to-indigo-500 relative">
          <div className="absolute -bottom-12 left-6">
            <div className="w-24 h-24 rounded-full border-4 border-black bg-gray-700 overflow-hidden">
            </div>
          </div>
        </div>

        <div className="pt-16 px-6 pb-6">
          <h1 className="text-xl font-bold">John Doe</h1>
          <p className="text-gray-400">@johndoe</p>

          <div className="mt-4 flex gap-6 text-sm text-gray-400">
            <p><span className="text-white font-semibold">120</span> Following</p>
            <p><span className="text-white font-semibold">340</span> Followers</p>
          </div>
        </div>
      </div>
    </main>
  );
}
