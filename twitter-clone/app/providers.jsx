"use client";

import { BookmarkProvider } from "../contexts/BookmarkContext";

export default function Providers({ children }) {
  return <BookmarkProvider>{children}</BookmarkProvider>;
}
