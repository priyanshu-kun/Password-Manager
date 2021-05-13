import React from 'react'

function Profile() {
    return (
        <section className="w-full h-screen flex justify-between overflow-hidden">
            <div className="w-2/5 h-screen profile-side-bg"></div>
            <div className="w-2/4 h-screen pt-32">
                <h1 className="font-black text-4xl">Account Info</h1>
                <hr className="w-4/5" />
                <div className="my-4">
                    <div className="mb-3">
                        <span className="text-sm font-medium ml-3">Email</span>
                        <div className="flex">
                            <div className="py-3 mt-1 font-semibold text-gray-600 px-4 rounded-lg bg-input_bg text-base w-2/4">priyanshushrama709gmail.com</div>
                            <button className="ml-3 hover:bg-yellow-100 hover:border-yellow-100 transition duration-200 transform scale-75 rounded-lg border-gray-300 font-semibold border px-6">change</button>
                        </div>
                    </div>
                    <div className="mb-3">
                        <span className="text-sm font-medium ml-3">Username</span>
                        <div className="flex">
                            <div className="py-3 mt-1 font-semibold text-gray-600 px-4 rounded-lg bg-input_bg text-base w-2/4">priyanshuSharma.com</div>
                            <button className="ml-3 hover:bg-yellow-100 hover:border-yellow-100 transition duration-200 transform scale-75 rounded-lg border-gray-300 font-semibold border px-6">change</button>
                        </div>
                    </div>
                    <div className="mb-3">
                        <span className="text-sm font-medium ml-3">Password</span>
                        <div className="flex">
                            <div className="py-3 mt-1 font-semibold text-gray-600 px-4 rounded-lg bg-input_bg text-base w-2/4">•••••••••••••••</div>
                            <button className="ml-3 hover:bg-yellow-100 hover:border-yellow-100 transition duration-200 transform scale-75 rounded-lg border-gray-300 font-semibold border px-6">change</button>
                        </div>
                    </div>
                </div>
                <hr className="w-4/5" />
                <div className="mt-4">
                    <p className="font-bold text-red-500  text-base uppercase">Danger zone</p>
                    <button className="mt-2 opacity-80 rounded-lg border-2 border-red-600 text-red-600 py-4 px-6 font-bold hover:bg-red-600 hover:border-red-600 hover:text-white transition duration-200">Delete Account</button>
                    <button className="mt-2 ml-48 opacity-80 rounded-lg border-2 border-red-600 text-red-600 py-4 px-6 font-bold hover:bg-red-600 hover:border-red-600 hover:text-white transition duration-200">Log Out</button>
                </div>
            </div>
        </section>
    )
}

export default Profile
