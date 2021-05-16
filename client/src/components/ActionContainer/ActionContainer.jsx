import React, { Fragment, useRef, useState } from 'react'
import { PlusIcon, ShareIcon } from '@heroicons/react/outline'
import { Dialog, Transition } from "@headlessui/react";
import client_http_req_functions from "../../client-http/password.http";
// console.log("obj: ", client_http_req_functions.addNewPassword())

const initialState = {
    email: "",
    websiteURL: "",
    login: "",
    password: "",
    name: "",
    notes: ""
}

function ActionContainer() {
    const [open, setOpen] = useState(false);
    const [inputState, setInputState] = useState(initialState);
    const cancelButtonRef = useRef();

    function closeModal() {
        setOpen(false);
        setInputState(initialState);
    }

    function openModal() {
        setOpen(true);
    }

    function controlInputs(e) {
        setInputState({ ...inputState, [e.target.name]: e.target.value });
    }

    function submitInfo(e) {
        e.preventDefault();
        if (!inputState.password || !inputState.websiteURL) {
            setOpen(false);
            return alert("Password or websiteURL cannot be empty!")
        }
        console.log("inputState: ", inputState)
        client_http_req_functions.addNewPassword(inputState);
        setInputState(initialState);
        setOpen(false);
        window.location.reload();
    }


    return (
        <>
            {/* Action container */}
            <div className="md:container-lg p-3 w-3/4 h-36 rounded-b-lg bg-gray-100 fixed top-16 left-1/2 transform -translate-x-2/4 grid place-items-center z-2">
                <div className="flex relative z-999">
                    <button onClick={openModal} className="mr-4 w-40 rounded-md h-14 bg-black text-white font-semibold text-lg flex justify-center items-center outline-none shadow hover:opacity-60 transition duration-200"><PlusIcon className="w-8 h-8 mr-1" />Add New</button>
                    <button className="ml-4 w-40 rounded-md h-14 bg-accent text-white font-semibold text-lg flex justify-center items-center outline-none border hover:opacity-60 transition duration-200 opacity-30 pointer-events-none cursor-not-allowed"><ShareIcon className="w-6 h-6 mr-2" />Share</button>
                </div>
                <Transition show={open} as={Fragment}>
                    <Dialog
                        as="div"
                        // style={{ background: "rgba(0,0,0,0.3)" }}
                        className="fixed inset-0 z-10 bg-yellow-200 overflow-y-auto"
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
                                <div className="inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl mt-20">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-2xl opacity-60 my-3 font-black leading-6 text-gray-900"
                                    >
                                        Register New Password
                </Dialog.Title>
                                    <hr />
                                    <div className="mt-2 w-full flex justify-center">
                                        <form className="w-full" onSubmit={submitInfo}>
                                            <label className="block mt-2 w-full" htmlFor="websiteURL">
                                                <p className="mb-1 font-medium text-sm">Email</p>
                                                <input value={inputState.email} name="email" onChange={controlInputs} className="w-full font-semibold text-sm rounded-lg py-3 px-5 bg-input_bg outline-none custom-hover-class" type="text" placeholder="Add email" id="email" />
                                            </label>
                                            <label className="block mt-2 w-full" htmlFor="websiteURL">
                                                <p className="mb-1 font-medium text-sm">Website URL</p>
                                                <input value={inputState.websiteURL} name="websiteURL" onChange={controlInputs} className="w-full font-semibold text-sm rounded-lg py-3 px-5 bg-input_bg outline-none custom-hover-class" type="text" placeholder="Add website URL" id="websiteURL" />
                                            </label>
                                            <label className="block mt-2 w-full" htmlFor="login">
                                                <p className="mb-1 font-medium text-sm">Login</p>
                                                <input value={inputState.login} name="login" onChange={controlInputs} className="w-full font-semibold text-sm rounded-lg py-3 px-5 bg-input_bg outline-none custom-hover-class" type="text" placeholder="Add Login details" id="login" />
                                            </label>
                                            <label className="block mt-2 w-full" htmlFor="password">
                                                <p className="mb-1 font-medium text-sm">Password</p>
                                                <input value={inputState.password} name="password" onChange={controlInputs} className="w-full font-semibold text-sm rounded-lg py-3 px-5 bg-input_bg outline-none custom-hover-class" type="text" placeholder="Add Password" id="password" />
                                            </label>
                                            <br />
                                            <br />
                                            <label className="block mt-2 w-full" htmlFor="name">
                                                <p className="mb-1 font-medium text-sm">Name</p>
                                                <input value={inputState.name} name="name" onChange={controlInputs} className="w-full font-semibold text-sm rounded-lg py-3 px-5 bg-input_bg outline-none custom-hover-class" type="text" placeholder="Add name" id="name" />
                                            </label>
                                            <label className="block mt-2 w-full" htmlFor="notes">
                                                <p className="mb-1 font-medium text-sm">Note</p>
                                                <textarea value={inputState.notes} name="notes" onChange={controlInputs} className="w-full font-semibold text-sm rounded-lg py-3 px-5 bg-input_bg outline-none custom-hover-class" type="text" placeholder="Add note" id="notes"></textarea>
                                            </label>
                                            <div className="mt-4 w-full flex justify-between">
                                                <button
                                                    type="button"
                                                    className="inline-flex justify-center px-12 py-3 text-sm font-semibold text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                                                    onClick={closeModal}
                                                >
                                                    cancel
                  </button>
                                                <button
                                                    type="submit"
                                                    className="inline-flex justify-center px-12 py-3 text-sm font-semibold text-white bg-accent rounded-md hover:bg-yellow-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-500"

                                                >
                                                    Submit
                  </button>
                                            </div>
                                        </form>
                                    </div>


                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition>
            </div>
        </>
    )
}

export default ActionContainer
