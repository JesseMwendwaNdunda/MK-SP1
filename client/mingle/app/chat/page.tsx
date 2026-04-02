"use client";


export default function Dashboard() {
  

  return (
    <div className="flex h-[calc(100vh-64px)]">

      {/* Sidebar */}
      <div className="w-80 bg-white dark:bg-[#111827] border-r dark:border-gray-700 p-5">

        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="font-bold dark:text-white">Alex Morgan</h2>
            <p className="text-sm text-gray-500">alex@example.com</p>
          </div>

          
        </div>

        <input
          placeholder="Search conversations..."
          className="w-full p-3 rounded-xl bg-gray-100 dark:bg-[#1f2937] dark:text-white mb-5"
        />

        <div className="space-y-3">
          <div className="p-3 rounded-xl bg-purple-600 text-white">
            Sarah Chen
          </div>
          <div className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
            Marcus Williams
          </div>
          <div className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
            Emma Rodriguez
          </div>
        </div>
      </div>

      {/* Chat Section */}
      <div className="flex-1 flex flex-col bg-gray-50 dark:bg-[#0f172a]">

        <div className="p-5 border-b dark:border-gray-700 dark:text-white">
          Sarah Chen <span className="text-green-500">● Online</span>
        </div>

        <div className="flex-1 p-6 overflow-y-auto space-y-4">

          <div className="bg-blue-200 dark:bg-blue-500/20 p-3 rounded-2xl w-fit dark:text-white">
            Hi Alex! It’s going really well.
          </div>

          <div className="ml-auto bg-gradient-to-r from-purple-600 to-pink-500 text-white p-3 rounded-2xl w-fit">
            That’s awesome! Can you share the mockups?
          </div>

        </div>

        <div className="p-4 border-t dark:border-gray-700 flex gap-3">
          <input
            placeholder="Type a message..."
            className="flex-1 p-3 rounded-xl bg-gray-100 dark:bg-[#1f2937] dark:text-white"
          />
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white">
            Send
          </button>
        </div>

      </div>
    </div>
  );
}