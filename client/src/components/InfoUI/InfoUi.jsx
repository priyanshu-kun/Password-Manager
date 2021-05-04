import React, { Fragment, useRef, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faClock, faEye, faEllipsisH, faExternalLinkAlt, faCopy, faTrash } from '@fortawesome/free-solid-svg-icons'
import client_http_req_functions from "../../client-http/password.http"
import { Dialog, Transition } from "@headlessui/react";

function InfoUi({ password: { email, login, name, notes, password, webpage, iv } }) {
    // console.log("passwordArray: ", password)
    const [open, setOpen] = useState(false);
    const [_password, set_Password] = useState("");
    const [showPassword, setShowPassword] = useState(true);
    const cancelButtonRef = useRef();

    function closeModal() {
        setOpen(false);
    }

    function openModal() {
        setOpen(true);
        encryptPassword({ password, iv })
    }

    const encryptPassword = (encryption) => {
        client_http_req_functions.decryptPassword(encryption).then(res => {
            set_Password(res);
        })
    }

    return (
        <>
            <div className="cursor-pointer" onClick={openModal}>
                <div style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }} className="w-full h-16 grid grid-cols-3">
                    {/* logo and name */}
                    <div className=" flex justify-start items-center pl-6">
                        <img className="h-8
                         w-12 object-cover mr-3 
                         rounded-lg"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                        <div className="h-2/4 flex flex-col items-start">
                            <h3 className={`font-semibold text-base ${(email || login) && "-mt-1.5"}`}>{name}</h3>
                            {
                                (email || login) && <small className="font-normal text-gray-600 text-xxs -mt-0.5">{login ? login : email}</small>
                            }
                        </div>
                    </div>
                    {/* last use */}
                    <div className=" flex items-center pl-8 text-base opacity-80">
                        <h1>2 months ago</h1>
                    </div>
                    {/* other options */}
                    <div className="flex items-center justify-around">
                        <a
                            onClick={e => e.stopPropagation()} href={webpage} className="
                            py-1 
                        text-sm rounded-lg
                         px-5 text-gray-600 
                        font-medium custom-hover 
                        flex justify-around 
                        items-center
                         hover:underline
                         "
                        >
                            <FontAwesomeIcon className="w-8 h-8 mr-1" icon={faExternalLinkAlt} /> Go to website
                            </a>
                        <span onClick={e => e.stopPropagation()} className="
                        hover-ele 
                        flex justify-center 
                        items-center">
                            <FontAwesomeIcon className="text-lg opacity-60 cursor-pointer relative custom-style"
                                icon={faEllipsisH} />
                        </span>
                    </div>
                </div>
            </div>





















            <Transition show={open} as={Fragment}>
                <Dialog
                    as="div"
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
                            <div className="
                            inline-block w-full
                             max-w-lg p-6 my-8 overflow-hidden
                              text-left align-middle transition-all 
                              transform bg-white shadow-xl rounded-2xl 
                              mt-20">
                                <Dialog.Title
                                    as="h3"
                                    className="text-xl opacity-60 font-black leading-6 text-gray-900"
                                >
                                    {name}
                                </Dialog.Title>
                                <div className="mt-2">
                                    <form className="w-full">
                                        <label className="block mt-2 w-full" htmlFor="email">
                                            <p className="mb-1 font-medium text-sm">Email</p>
                                            <input value={email} onChange={e => console.log(e.target.value)} name="email" className="w-full
                                             font-semibold text-sm rounded-lg py-3
                                              px-5 bg-input_bg outline-none 
                                              custom-hover-class" type="text" placeholder="Add email" id="email" />
                                        </label>
                                        <label className="block mt-2 w-full" htmlFor="websiteURL">
                                            <p className="mb-1 font-medium text-sm">Website URL</p>
                                            <input value={webpage} onChange={e => console.log(e.target.value)} name="websiteURL" className="w-full 
                                            font-semibold text-sm
                                             rounded-lg py-3 px-5 
                                             bg-input_bg outline-none 
                                             custom-hover-class" type="text" placeholder="Add website URL" id="websiteURL" />
                                        </label>
                                        <label className="block mt-2 w-full" htmlFor="login">
                                            <p className="mb-1 font-medium text-sm">Login</p>
                                            <input value={login} onChange={e => console.log(e.target.value)} name="login" className="w-full
                                             font-semibold text-sm rounded-lg
                                              py-3 px-5 bg-input_bg outline-none
                                               custom-hover-class" type="text" placeholder="Add Login details" id="login" />
                                        </label>
                                        <label className="block mt-2 w-full" htmlFor="password">
                                            <p className="mb-1 font-medium text-sm">Password</p>
                                            <div className="flex">
                                                <input name="password" value={_password !== "" && _password} className="w-4/5 
                                                font-semibold 
                                                text-sm rounded-lg 
                                                py-3 px-5 bg-input_bg 
                                                outline-none 
                                                custom-hover-class" type={showPassword ? "password" : "text"} placeholder="Add Password" id="password" readonly />
                                                <button onClick={(e) => {
                                                    e.preventDefault();
                                                    setShowPassword(!showPassword);
                                                }} style={{ outline: 'none' }} className="text-lg -ml-10 opacity-80"><FontAwesomeIcon icon={faEye} /></button>
                                                <button
                                                    className="
                                                    ml-8 
                                                    border-2 rounded-lg 
                                                    font-semibold text-sm
                                                    px-6 hover:bg-yellow-300
                                                    hover:border-transparent 
                                                    hover:text-white transition duration-20 
                                                    flex justify-around items-center "
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        navigator.clipboard.writeText(_password);
                                                    }}
                                                >
                                                    <FontAwesomeIcon className="mr-1 text-base text-gray-500" icon={faCopy} />Copy</button>
                                            </div>
                                        </label>
                                        <br />
                                        <br />
                                        <label className="block mt-2 w-full" htmlFor="name">
                                            <p className="mb-1 font-medium text-sm">Name</p>
                                            <input value={name} onChange={e => console.log(e.target.value)} name="name" className="w-full 
                                            font-semibold text-sm 
                                            rounded-lg py-3 px-5 
                                            bg-input_bg outline-none 
                                            custom-hover-class" type="text" placeholder="Add name" id="name" />
                                        </label>
                                        <label className="block mt-2 w-full" htmlFor="notes">
                                            <p className="mb-1 font-medium text-sm">Note</p>
                                            <textarea value={notes} onChange={e => console.log(e.target.value)} name="notes" className="w-full 
                                            font-semibold text-sm 
                                            rounded-lg py-3 px-5 
                                            bg-input_bg outline-none
                                             custom-hover-class" type="text" placeholder="Add note" id="notes"></textarea>
                                        </label>
                                        <div className="mt-4 w-full flex justify-between">
                                            <button
                                                type="button"
                                                className="inline-flex 
                                                justify-center px-10 py-2
                                                 text-sm font-semibold 
                                                 text-red-900 bg-red-100 
                                                 border border-transparent 
                                                 rounded-md hover:bg-red-200 
                                                 focus:outline-none focus-visible:ring-2 
                                                 focus-visible:ring-offset-2 
                                                 focus-visible:ring-yellow-500"
                                                onClick={closeModal}
                                            >
                                                cancel
                  </button>
                                            <button
                                                type="button"
                                                className="inline-flex
                                                 justify-center px-10 
                                                 py-2 text-sm font-semibold 
                                                 text-white bg-green-400 border
                                                  border-transparent
                                                   rounded-md hover:bg-green-500
                                                    focus:outline-none 
                                                    focus-visible:ring-2 
                                                    focus-visible:ring-offset-2 
                                                    focus-visible:ring-green-500"
                                                onClick={closeModal}
                                            >
                                                save
                  </button>
                                            <button
                                                type="submit"
                                                className="inline-flex 
                                                justify-center
                                                 px-10 py-2 text-sm
                                                 font-semibold text-white 
                                                bg-red-600 rounded-md 
                                                hover:bg-red-800 
                                                focus:outline-none 
                                                focus-visible:ring-2 
                                                focus-visible:ring-offset-2 
                                                focus-visible:ring-red-500
                                                 flex justify-around items-center"

                                            >
                                                <FontAwesomeIcon className="text-white mr-1" icon={faTrash} /> Delete
                  </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>

        </>
    )
}

export default InfoUi
