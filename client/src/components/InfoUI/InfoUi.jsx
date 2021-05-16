import React, { Fragment, useRef, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye, faExternalLinkAlt, faCopy, faTrash } from '@fortawesome/free-solid-svg-icons'
import client_http_req_functions from "../../client-http/password.http"
import { Dialog, Transition } from "@headlessui/react";
import MenuDropdown from "./dropdown/dropDown"



function InfoUi({ password: { email, login, name, notes, password, webpage, iv, id } }) {
    const initialState = {
        websiteURL: webpage,
        name: name,
        notes: notes
    }
    // console.log("passwordArray: ", password)
    const [open, setOpen] = useState(false);
    const [_password, set_Password] = useState("•••••••••••••••");
    const [showPassword, setShowPassword] = useState(true);
    const [editPassword, setEditPassword] = useState(initialState)
    const [saveBtn, setSaveBtn] = useState(false)

    const cancelButtonRef = useRef();

    function closeModal() {
        setOpen(false);
    }

    function openModal() {
        setOpen(true);
    }

    const decryptPassword = (encryption) => {
        client_http_req_functions.decryptPassword(encryption).then(res => {
            set_Password(res);
        })
    }

    const deleteRecord = (id) => {
        client_http_req_functions.deleteRecord(id).then(res => {
            window.location.reload();
        })
    }

    function controlInputs(e) {
        // console.log(e.target.name)
        setEditPassword({ ...editPassword, [e.target.name]: e.target.value });
    }

    function editRecord(e) {
        e.preventDefault();
        let value = {};
        if (editPassword.websiteURL !== webpage) {
            // value.webpage = editPassword.websiteURL;
            value = { key: "webpage", data: editPassword.websiteURL }
        }
        else if (editPassword.name !== name) {
            value = { key: "name", data: editPassword.name }
        }
        else {
            value = { key: "notes", data: editPassword.notes }
        }
        client_http_req_functions.editRecord(value, id).then(res => {
            window.location.reload();
        })
    }

    useEffect(() => {
        if (editPassword.websiteURL !== webpage || editPassword.name !== name || editPassword.notes !== notes) {
            setSaveBtn(true)
        } else {
            setSaveBtn(false)
        }
    }, [editPassword.websiteURL,editPassword.name,editPassword.notes,name,webpage,notes])



    return (
        <>
            <div className="cursor-pointer" onClick={openModal}>
                <div style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }} className="w-full h-16 grid grid-cols-2">
                    {/* logo and name */}
                    <div className=" flex justify-start items-center pl-6">
                        <img className="h-8
                         w-12 object-cover mr-3 
                         rounded-lg"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="logo" />
                        <div className="h-2/4 flex flex-col items-start">
                            <h3 className={`font-semibold text-base ${(email || login) && "-mt-1.5"}`}>{name}</h3>
                            {
                                (email || login) && <small className="font-normal text-gray-600 text-xxs -mt-0.5">{login ? login : email}</small>
                            }
                        </div>
                    </div>
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
                        items-center 
                         ">
                            <MenuDropdown openModal={openModal} password={_password} login={login} />
                        </span>
                    </div>
                </div>
            </div>




            {/* 
    Popup for showing details of storing password
 */}


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
                                    as="h1"
                                    className="text-2xl my-4 opacity-60 font-black leading-6 text-gray-900"
                                >
                                    {name}
                                </Dialog.Title>
                                <hr />
                                <div className="mt-2">
                                    <form className="w-full">
                                        <label className="block mt-2 w-full" htmlFor="email">
                                            <p className="mb-1 font-medium text-sm">Email</p>
                                            <input value={email} readOnly name="email" className="w-full
                                             font-semibold text-sm rounded-lg py-3
                                              px-5 bg-input_bg outline-none 
                                              custom-hover-class" type="text" placeholder="Add email" id="email" />
                                        </label>
                                        <label className="block mt-2 w-full" htmlFor="websiteURL">
                                            <p className="mb-1 font-medium text-sm">Website URL</p>
                                            <input value={editPassword.websiteURL} onChange={controlInputs} name="websiteURL" className="w-full 
                                            font-semibold text-sm
                                             rounded-lg py-3 px-5 
                                             bg-input_bg outline-none 
                                             custom-hover-class" type="text" placeholder="Add website URL" id="websiteURL" />
                                        </label>
                                        <label className="block mt-2 w-full" htmlFor="login">
                                            <p className="mb-1 font-medium text-sm">Login</p>
                                            <input value={login} readOnly name="login" className="w-full
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
                                                custom-hover-class"
                                                    onContextMenu={(e) => {
                                                        if (e.type === 'contextmenu') {
                                                            e.preventDefault();
                                                        }
                                                    }}
                                                    type={showPassword ? "password" : "text"} placeholder="Add Password" id="password" readOnly />
                                                <button onClick={(e) => {
                                                    e.preventDefault();
                                                    decryptPassword({ password, iv })
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
                                                    flex justify-around items-center custom-copy"
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
                                            <input value={editPassword.name} onChange={controlInputs} name="name" className="w-full 
                                            font-semibold text-sm 
                                            rounded-lg py-3 px-5 
                                            bg-input_bg outline-none 
                                            custom-hover-class" type="text" placeholder="Add name" id="name" />
                                        </label>
                                        <label className="block mt-2 w-full" htmlFor="notes">
                                            <p className="mb-1 font-medium text-sm">Note</p>
                                            <textarea value={editPassword.notes} onChange={controlInputs} name="notes" className="w-full 
                                            font-semibold text-sm 
                                            rounded-lg py-3 px-5 
                                            bg-input_bg outline-none
                                             custom-hover-class" type="text" placeholder="Add note" id="notes"></textarea>
                                        </label>
                                        <div className="mt-4 w-full flex justify-between">
                                            <button
                                                type="button"
                                                className="inline-flex 
                                                justify-center px-10 py-3
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
                                            {
                                                saveBtn ? <button
                                                    type="button"
                                                    className="inline-flex
                                                 justify-center px-10 
                                                 py-3 text-sm font-semibold 
                                                 text-white bg-green-400 border
                                                  border-transparent
                                                   rounded-md hover:bg-green-500
                                                    focus:outline-none 
                                                    focus-visible:ring-2 
                                                    focus-visible:ring-offset-2 
                                                    focus-visible:ring-green-500"
                                                    onClick={editRecord}
                                                >
                                                    save
                  </button> : <button
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        deleteRecord(id)
                                                    }}
                                                    type="submit"
                                                    className="
                                                 px-10 py-3 text-sm
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
                                            }

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
