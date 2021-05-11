import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faCopy, faCopyright } from '@fortawesome/free-solid-svg-icons'
import { ChevronDownIcon } from "@heroicons/react/solid";


export default function MenuDropdown({ openModal, password, login }) {
    return (
        <div className="w-56 text-right">
            <Menu as="div" className="relative inline-block text-left">
                {({ open }) => (
                    <>
                        <div>
                            <Menu.Button className="inline-flex border justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-10 hover:bg-opacity-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">

                                <ChevronDownIcon
                                    className="w-5 h-5 text-violet-200 hover:text-violet-100"
                                    aria-hidden="true"
                                />
                            </Menu.Button>
                        </div>
                        <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items
                                static
                                className="p-2  absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-888"
                            >
                                <div className="px-1 py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                onClick={openModal}
                                                className={`${active ? "bg-yellow-500 text-white" : "text-gray-600"
                                                    } transition duration-200  font-semibold group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                            >
                                                <FontAwesomeIcon className="ml-2 mr-2" icon={faEdit} />
                                                See Details
                                            </button>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                onClick={(e) => {
                                                    if (password === "•••••••••••••••") {
                                                        return alert("Please login first!");
                                                    }
                                                    navigator.clipboard.writeText(password);
                                                }}
                                                className={`${active ? "bg-yellow-500 text-white" : "text-gray-600"} transition duration-200  font-semibold group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                            >
                                                <FontAwesomeIcon className="ml-2 mr-2" icon={faCopy} />
                                                Copy Password
                                            </button>
                                        )}
                                    </Menu.Item>
                                </div>
                                <hr />
                                <div className="px-1 py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                onClick={(e) => {
                                                    if (!login) {
                                                        return alert("Nothing to copy login")
                                                    }
                                                    navigator.clipboard.writeText(login);
                                                }}
                                                className={`${active ? "bg-yellow-500 text-white" : "text-gray-600"
                                                    } transition duration-200 font-semibold  group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                            >
                                                <FontAwesomeIcon className="ml-2 mr-2" icon={faCopyright} />
                                                Copy Login
                                            </button>
                                        )}
                                    </Menu.Item>

                                </div>
                            </Menu.Items>
                        </Transition>
                    </>
                )}
            </Menu>
        </div>
    );
}

