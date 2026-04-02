
import Link from "next/link"

export default function ForgotPassword(){
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 dark:from-[#0f172a] dark:to-[#1e293b]">

                <div className="bg-white dark:bg-[#111827] p-10 rounded-3xl shadow-xl w-105">
                    <h2 className="text-2xl font-bold mb-4 dark:text-white">Reset your Passsword</h2>


                    <input 
                    type="email"
                    placeholder="Enter your full email"
                    className="w-full p-3 rounded-xl bg-gray-100 dark:bg-[#1f2937] dark:text-white mb-4" 
                    />

                    <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white">
                        Send Reset Link
                    </button>

                    <p className="text-center text-sm mt-6 dark:text-gray-300">
                        {" "}
                        <Link href="/login" className="text-purple-500">
                             Back to Log In
                        </Link>
                    </p>


                    



                </div>

            </div>
        
        
        </>
    )
}