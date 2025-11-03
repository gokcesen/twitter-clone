"use client";

export default function Header() {
  return (
    <header className="fixed top-0 left-[444px] right-0 z-10 border-b border-neutral-800 bg-[#0a0a0a] backdrop-blur w-[800px]">
      <nav className="mx-auto max-w-[400px] h-14 flex items-center justify-center gap-60">
        <div className="relative pb-3 text-sm font-bold text-white">
          For you
          <span className="absolute left-1/2 -bottom-[12px] h-[3px] w-9 -translate-x-1/2 rounded-full bg-sky-500" />
        </div>
        <div className="relative pb-3 text-sm font-bold text-neutral-500 hover:text-white">
          Following
        </div>
      </nav>
    </header>
  );
}
