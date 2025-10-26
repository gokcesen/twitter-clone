export default function TopTweetsPanel() {
    return (
        <aside className="fixed top-0 right-36 h-screen w-[320px] bg-[#0a0a0a] border-l border-zinc-800 text-white flex flex-col items-start p-6 space-y-4 shadow-lg">

        <div className="border rounded-lg border-zinc-800 w-[340px]">
        <h2 className="text-lg font-semibold mb-4 mt-4 ml-8">What's happening?</h2>
  
        <div className="space-y-4">
          <div className="bg-[#111] p-4 rounded-md">
            <p className="text-sm text-gray-400">Dummy box 1</p>
          </div>
          <div className="bg-[#111] p-4 rounded-md">
            <p className="text-sm text-gray-400">Dummy box 2</p>
          </div>
          </div>
        </div>
      </aside>
    );
  }
  