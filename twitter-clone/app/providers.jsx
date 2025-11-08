"use client";

import { BookmarkProvider } from "../contexts/BookmarkContext";
import { RepostProvider } from "../contexts/RepostContext";

export default function Providers({ children }) {
  return (
    <BookmarkProvider>
      <RepostProvider>
        {children}
      </RepostProvider>
    </BookmarkProvider>
  );
}
