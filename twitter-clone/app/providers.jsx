"use client";

import { BookmarkProvider } from "../contexts/BookmarkContext";
import { RepostProvider } from "../contexts/RepostContext";
import { AuthProvider } from "@/contexts/AuthContext";

export default function Providers({ children }) {
  return (
    <AuthProvider>
      <BookmarkProvider>
        <RepostProvider>
          {children}
        </RepostProvider>
      </BookmarkProvider>
    </AuthProvider>
  );
}
