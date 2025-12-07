"use client";

import { BookmarkProvider } from "../contexts/BookmarkContext";
import { RepostProvider } from "../contexts/RepostContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { UserProvider } from "@/contexts/UserContext";
import { LikeProvider } from "@/contexts/LikeContext";

export default function Providers({ children }) {
	return (
		<AuthProvider>
			<UserProvider>
				<LikeProvider>
					<BookmarkProvider>
						<RepostProvider>{children}</RepostProvider>
					</BookmarkProvider>
				</LikeProvider>
			</UserProvider>
		</AuthProvider>
	);
}
