import ProfileClient from "./ProfileClient";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export const metadata = {
  title: "Profile Page – Twitter Clone",
  icons: {
    icon: "/images/x-logo.png", 
  },
};

const ProfilePage = () => {
	return (
    <ProtectedRoute>
       <ProfileClient />
    </ProtectedRoute>
  );
}

export default ProfilePage;
