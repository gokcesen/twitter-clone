import ProtectedRoute from "@/components/auth/ProtectedRoute";
import HomeClient from "./HomeClient";

export const metadata = {
  title: "Home – Twitter Clone",
  icons: {
    icon: "/images/x-logo.png", 
  },
};

export default function HomePage() {
  return (
    <ProtectedRoute>
       <HomeClient />
    </ProtectedRoute>
  );
}
