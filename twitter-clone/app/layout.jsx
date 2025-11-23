import "./globals.css";
import Providers from "./providers";

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

