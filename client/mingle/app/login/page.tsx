export default function LoginPage(){
    return (
        <>
        <div className="flex items-centre justify-center min-h-screen bg-gray-100">
            <div className="bg-black p-8 rounded-xl shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>


                 <input
                     type="text"
                     placeholder="Enter your emaail"
                     className="w-full p-2 mb-4 border rounded-md"
                 />


                 <input
                     type="text" 
                     placeholder="ENter your password"
                     className="w-full p-2 mb-4 border rounded-md"
                 />


                  <button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Login</button>

            </div>

        </div>


        </>
            
    )
}