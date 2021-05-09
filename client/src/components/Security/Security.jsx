import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

function Security() {
    return (
        <div style={{ border: "1px solid rgba(0,0,0,0.2)" }} className="w-4/5 min-h-sm-table mx-auto mt-32 mb-20 rounded-lg">
            <div style={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }} className="w-full flex justify-between items-center rounded-tl-lg rounded-tr-lg px-4 h-16 header ">
                <h1 className="text-black font-black text-xl ">AT-RISK PASSWORDS</h1>
                <div className="w-3/12 flex justify-around">
                    <button className="text-sm font-semibold rounded-lg px-4 py-2 bg-yellow-500 text-white transition duration-200" >ALL</button>
                    <button className="text-sm font-semibold  rounded-lg px-4 py-2 transition duration-200" >Weak</button>
                    <button className="text-sm font-semibold  rounded-lg px-4 py-2 transition duration-200" >Reused</button>
                </div>
            </div>
            <div>
                <div className="cursor-pointer">
                    <div style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }} className="w-full h-16 grid grid-cols-2">
                        {/* logo and name */}
                        <div className=" flex justify-start items-center pl-6">
                            <img className="h-8
                         w-12 object-cover mr-3 
                         rounded-lg"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                            <div className="h-2/4 flex flex-col items-start">
                                <h3 className="font-semibold text-base -mt-1" >Github.com</h3>

                                <small className="font-normal text-gray-600 text-xxs -mt-1">priyanshuSharma709@gmail.com</small>

                            </div>
                        </div>
                        <div className="flex items-center justify-start">
                            <FontAwesomeIcon className="text-red-500 mr-1" icon={faExclamationCircle} /> <span className="text-red-500">Reused 7 times</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Security
