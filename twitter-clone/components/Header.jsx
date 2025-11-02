"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header({
	tabs = [
		{ label: "For you", href: "/" },
		{ label: "Following", href: "/following" },
	],
	maxWidth = 800,
}) {
	const pathname = usePathname() || "/";

	const activeIndex = React.useMemo(() => {
		const exact = tabs.findIndex((t) => t.href === pathname);
		if (exact !== -1) return exact;
		const starts = tabs.findIndex((t) => pathname.startsWith(t.href));
		return starts === -1 ? 0 : starts;
	}, [pathname, tabs]);

	return (
		<header className="sticky top-0 z-40 flex justify-center pointer-events-none">
			<div
				className="w-full pointer-events-auto ml-[-20px]"
				style={{ maxWidth: `${maxWidth}px` }}
			>
				<nav
					role="tablist"
					aria-label="Timeline tabs"
					className="relative grid h-12 grid-cols-2 border-b border-neutral-800 bg-[#0a0a0a]/90 backdrop-blur"
				>
					{tabs.map((tab, i) => {
						const isActive = i === activeIndex;
						return (
							<Link
								key={tab.href}
								href={tab.href}
								role="tab"
								aria-selected={isActive}
								className={[
									"flex items-center justify-center px-3 text-sm font-bold transition-colors",
									isActive ? "text-white" : "text-neutral-500 hover:text-white",
								].join(" ")}
							>
								<span className="truncate">{tab.label}</span>
							</Link>
						);
					})}

					<span
						aria-hidden
						className="pointer-events-none absolute bottom-0 block h-1 w-[80px] rounded-full bg-sky-500 transition-transform duration-300 ease-out"
						style={{
							left: `${activeIndex === 0 ? "25%" : "75%"}`,
							transform: "translateX(-50%)",
						}}
					/>
				</nav>
			</div>
		</header>
	);
}
