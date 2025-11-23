"use client";
import Link from "next/link";

const LandingClient = () => {
	return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Left Side - X Logo */}
      <div className="flex-1 flex items-center justify-center p-8">
        <img
          src="/images/x-logo.png"
          alt="X Logo"
          className="w-64 h-64 max-w-full"
        />
      </div>

      {/* Right Side - Content */}
      <div className="flex-1 flex flex-col justify-center px-8 py-12 max-w-[600px]">
        <div className="mb-12">
          <h1 className="text-6xl font-bold mb-8">Happening now</h1>
          <h2 className="text-3xl font-bold mb-12">Join today.</h2>
        </div>

        <div className="flex flex-col gap-4 mb-8">
          <Link href="/signup">
            <button className="w-full py-3 px-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
              Create account
            </button>
          </Link>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-black text-gray-500">Already have an account?</span>
            </div>
          </div>

          <Link href="/login">
            <button className="w-full py-3 px-4 border border-gray-700 text-white font-bold rounded-full hover:bg-gray-900 transition-colors">
              Sign in
            </button>
          </Link>
        </div>

        {/* Footer */}
        <footer className="mt-auto pt-8">
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <Link href="#" className="hover:underline">About</Link>
            <Link href="#" className="hover:underline">Download the X app</Link>
            <Link href="#" className="hover:underline">Help Center</Link>
            <Link href="#" className="hover:underline">Terms of Service</Link>
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            <Link href="#" className="hover:underline">Cookie Policy</Link>
            <Link href="#" className="hover:underline">Accessibility</Link>
            <Link href="#" className="hover:underline">Ads info</Link>
            <Link href="#" className="hover:underline">Blog</Link>
            <Link href="#" className="hover:underline">Careers</Link>
            <Link href="#" className="hover:underline">Brand Resources</Link>
            <Link href="#" className="hover:underline">Advertising</Link>
            <Link href="#" className="hover:underline">Marketing</Link>
            <Link href="#" className="hover:underline">X for Business</Link>
            <Link href="#" className="hover:underline">Developers</Link>
            <Link href="#" className="hover:underline">Directory</Link>
            <Link href="#" className="hover:underline">Settings</Link>
            <span className="text-gray-600">© 2025 X Corp.</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingClient;