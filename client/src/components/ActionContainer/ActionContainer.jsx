import React from 'react'
import { PlusIcon, ShareIcon } from '@heroicons/react/outline'
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useEffect, useState } from "react";




function ActionContainer() {
    const [open, setOpen] = useState(false);
    const cancelButtonRef = useRef();

    function closeModal() {
        setOpen(false);
    }

    function openModal() {
        setOpen(true);
    }
    return (
        <>
            {/* Action container */}
            <div className="md:container-lg p-3 w-3/4 h-36 rounded-b-lg bg-gray-100 fixed top-16 left-1/2 transform -translate-x-2/4 grid place-items-center z-2">
                <div className="flex relative z-999">
                    <button onClick={openModal} className="mr-4 w-40 rounded-md h-14 bg-black text-white font-semibold text-lg flex justify-center items-center outline-none shadow hover:opacity-60 transition duration-200"><PlusIcon className="w-8 h-8 mr-1" />Add New</button>
                    <button className="ml-4 w-40 rounded-md h-14 bg-accent text-white font-semibold text-lg flex justify-center items-center outline-none border hover:opacity-60 transition duration-200"><ShareIcon className="w-6 h-6 mr-2" />Share</button>
                </div>
                <Transition show={open} as={Fragment}>
                    <Dialog
                        as="div"
                        style={{ background: "rgba(0,0,0,0.3)" }}
                        className="fixed inset-0 z-10 overflow-y-auto"
                        initialFocus={cancelButtonRef}
                        static
                        open={open}
                        onClose={closeModal}
                    >
                        <div className="min-h-screen px-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0" />
                            </Transition.Child>

                            {/* This element is to trick the browser into centering the modal contents. */}
                            <span
                                className="inline-block h-screen align-middle"
                                aria-hidden="true"
                            >
                                &#8203;
            </span>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Register Password
                </Dialog.Title>
                                    <div className="mt-2 w-full flex justify-center bg-red-500">
                                        <form>
                                            <input className="my-1" type="text" />
                                            <input className="my-1" type="text" />
                                            <input className="my-1" type="text" />
                                            <input className="my-1" type="text" />
                                            <input className="my-1" type="text" />
                                            <input className="my-1" type="text" />
                                        </form>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
                  </button>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition>
                {/* <h1 className="absolute font-black text-5xl text-white z-1">Keep your password secure here.</h1> */}
            </div>
        </>
    )
}

export default ActionContainer
