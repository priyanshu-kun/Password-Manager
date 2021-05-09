import React from 'react'
import { Disclosure } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon, PlusIcon } from '@heroicons/react/outline'
import Profile from "./Profile/Profile"


function Navbar() {
    return (
        <>
            <Disclosure as="nav" className="bg-dark fixed top-0 left-0 right-0 z-999">
                {({ open }) => (
                    <>
                        <div className="max-w-full mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-around h-16">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>


                                <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex-shrink-0 flex items-center">
                                        <img
                                            className="hidden lg:block h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                                            alt="Workflow"
                                        />
                                    </div>

                                </div>

                                <div style={{ width: "34rem" }}>
                                    <input className="block w-full py-2 rounded-md text-sm pl-5 font-semibold bg-white bg-opacity-20 text-white focus:bg-white outline-none focus:text-black transition duration-200 placeholder-gray-100 placeholder-opacity-30 focus:placeholder-gray-600" type="text" placeholder="Search e.g: instagram" />
                                </div>

                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    {/* <button className="w-30 h-10 mr-5 text-base font-medium px-4 rounded-md bg-accent text-white shadow flex justify-around items-center hover:bg-hover transition duration-200">
                                        <PlusIcon className="w-6 h-6" /> <span>Add Password</span>
                                    </button> */}
                                    <button className="bg-dark p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>

                                    {/* Profile dropdown */}
                                    <Profile />
                                </div>
                            </div>
                        </div>


                    </>
                )}
            </Disclosure>
        </>
    )
}

export default Navbar
