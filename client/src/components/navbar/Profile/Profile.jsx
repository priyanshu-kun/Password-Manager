import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faKey, faShieldAlt, faUserCircle, faUserSecret } from '@fortawesome/free-solid-svg-icons'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Profile() {
    return (
        <>
            <Menu as="div" className="ml-3 relative">
                {({ open }) => (
                    <>
                        <div>
                            <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span className="sr-only">Open user menu</span>
                                <img
                                    className="h-8 w-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
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
                                className="origin-top-right absolute right-0 mt-2 w-56 text-center rounded-md shadow-lg p-4  bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            >
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="http://blank"
                                            className={classNames(
                                                active ? 'bg-gray-100' : '',
                                                'block px-4 py-2 text-gray-700 py-3 rounded flex items-center justify-start box-borderr'
                                            )}
                                        >
                                            <FontAwesomeIcon className="text-xl mr-3 text-accent" icon={faUserCircle} /><span className="text-sm font-semibold  opacity-80 text-left">
                                                Your Profile
                                                                    </span>
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="http://blank"
                                            className={classNames(
                                                active ? 'bg-gray-100' : '',
                                                'block px-4 py-2 text-gray-700 py-3 rounded flex items-center justify-start box-border'
                                            )}
                                        >
                                            <FontAwesomeIcon className="text-xl mr-3 text-accent" icon={faKey} /><span className="text-sm font-semibold  opacity-80">Passwords</span>
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="http://blank"
                                            className={classNames(
                                                active ? 'bg-gray-100' : '',
                                                'block px-4 py-2 text-gray-700 py-3 rounded flex items-center justify-start box-border opacity-30 pointer-events-none'
                                            )}
                                        >
                                            <FontAwesomeIcon className="text-xl mr-3 text-accent" icon={faUserSecret} /><span className="text-sm font-semibold opacity-80">Secure Notes</span>
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="http://blank"
                                            className={classNames(
                                                active ? 'bg-gray-100' : '',
                                                'block px-4 py-2 text-gray-700 py-3 rounded flex items-center justify-start box-border opacity-30 cursor-not-allowed pointer-events-none'
                                            )}
                                        >
                                            <FontAwesomeIcon className="text-xl mr-3 text-accent" icon={faInfoCircle} /><span className="text-sm font-semibold  opacity-80">Personal Info</span>
                                        </a>
                                    )}
                                </Menu.Item>
                                <p className="text-sm font-medium opacity-40 text-left py-2 ml-5">Security Info</p>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="http://blank"
                                            className={classNames(
                                                active ? 'bg-gray-100' : '',
                                                'block px-4 py-2 text-gray-700 py-3 rounded flex items-center justify-start box-borde'
                                            )}
                                        >
                                            <FontAwesomeIcon className="text-xl mr-3 text-accent" icon={faShieldAlt} /><span className="text-sm font-semibold  opacity-80">Security Mesures</span>
                                        </a>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </>
                )}
            </Menu>
        </>
    )
}

export default Profile
