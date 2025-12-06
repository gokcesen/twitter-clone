"use client";

import { BookmarkProvider } from "../contexts/BookmarkContext";
import { RepostProvider } from "../contexts/RepostContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { UserProvider } from "@/contexts/UserContext";

export default function Providers({ children }) {
  return (
    <AuthProvider>
      <UserProvider>
        <BookmarkProvider>
          <RepostProvider>
            {children}
          </RepostProvider>
        </BookmarkProvider>
      </UserProvider>
    </AuthProvider>
  );
}
