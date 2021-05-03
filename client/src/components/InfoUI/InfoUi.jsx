import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faClock, faEllipsisH, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

function InfoUi() {
    return (
        <>
            <div className="cursor-pointer">
                <div style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }} className="w-full h-16 grid grid-cols-3">
                    {/* logo and name */}
                    <div className=" flex justify-start items-center pl-6">
                        <img className="h-8 w-12 object-cover mr-3 rounded-lg" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                        <div className="h-2/4 flex flex-col items-start">
                            <h3 className="font-semibold text-base -mt-1.5">Name.com</h3>
                            <small className="font-normal text-gray-600 text-xxs -mt-0.5">login info</small>
                        </div>
                    </div>
                    {/* last use */}
                    <div className=" flex items-center pl-8 text-base opacity-80">
                        <h1>2 months ago</h1>
                    </div>
                    {/* other options */}
                    <div className="flex items-center justify-around">
                        <a href="http://blank" className="py-1 text-sm rounded-lg px-5 text-gray-600 font-medium custom-hover flex justify-around items-center hover:underline">
                            <FontAwesomeIcon className="w-8 h-8 mr-1" icon={faExternalLinkAlt} /> Go to website
                            </a>
                        <span className="hover-ele flex justify-center items-center"><FontAwesomeIcon className="text-lg opacity-60 cursor-pointer relative custom-style" icon={faEllipsisH} /></span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default InfoUi
