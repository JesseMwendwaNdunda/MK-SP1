"use client";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 dark:from-[#0f172a] dark:to-[#1e293b]">

      <div className="bg-white dark:bg-[#111827] p-10 rounded-3xl shadow-xl w-105">

        <div className="flex flex-col items-center mb-6">
          <div className="bg-purple-600 text-white p-4 rounded-xl mb-4">
            💬
          </div>
          <h2 className="text-2xl font-bold dark:text-white">
            Welcome to Mingle-App
          </h2>
          <p className="text-gray-500 text-sm">
            Sign up to continue to your account
          </p>
        </div>

        <div className="space-y-4">



          <div>
            <label className="text-sm font-medium dark:text-white">
              Name
            </label>
            <input
              type="name"
              placeholder="John Doe"
              className="w-full mt-1 p-3 rounded-xl bg-gray-100 dark:bg-[#1f2937] dark:text-white"
            />
          </div>

          <div>
            <label className="text-sm font-medium dark:text-white">
              Email
            </label>
            <input
              type="email"
              placeholder="johndoe@example.com"
              className="w-full mt-1 p-3 rounded-xl bg-gray-100 dark:bg-[#1f2937] dark:text-white"
            />
          </div>

          <div>
            <div className="flex justify-between">
              <label className="text-sm font-medium dark:text-white">
                Password
              </label>
              
            </div>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 p-3 rounded-xl bg-gray-100 dark:bg-[#1f2937] dark:text-white"
            />
          </div>

          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold">
            Sign in
          </button>

        </div>

        <p className="text-center text-sm mt-6 dark:text-gray-300">
          Have an account?{" "}
          <Link href="/login" className="text-purple-500">
            Log In
          </Link>
        </p>

      </div>
    </div>
  );
}