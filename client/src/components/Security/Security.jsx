import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import client_http_req_functions from "../../client-http/password.http"

function Security({ passwordArray }) {
    const [duplicate, setDuplicate] = useState([])

    const decryptAllPasswords = async () => {
        try {
            const passwords = [];
            let encryption = {};
            if (passwordArray.length > 0) {
                for (let i = 0; i < passwordArray.length; i++) {
                    encryption = { password: passwordArray[i].password, iv: passwordArray[i].iv }
                    const password = await client_http_req_functions.decryptPassword(encryption);
                    passwords.push({ id: passwordArray[i].id, name: passwordArray[i].name, password });
                }
            }
            return passwords;
        }
        catch (e) {
            console.error(e);
        }
    }

    const getDuplicatePasswords = (passwords) => {
        let counter = {}
        let only_passwords = passwords.map(i => i.password);
        only_passwords.forEach((obj) => {
            var key = JSON.stringify(obj)
            counter[key] = (counter[key] || 0) + 1
        })
        let res = passwords.map(i => {
            let obj = { name: i.name, count: counter[i.password] }
            return obj.count > 1 ? obj : null
        })
        return res;
    }

    // eslint-disable-next-line
    const getduplicate = async () => {
            try {
                const passwords = await decryptAllPasswords();
                if (passwords.length > 0) {
                    const duplicatePasswords = getDuplicatePasswords(passwords).filter(i => i !== null);
                    setDuplicate(duplicatePasswords);
                }
            }
            catch (e) {
                console.error(e);
            }
    }
    // eslint-disable-next-line
    useEffect(getduplicate, [passwordArray])

    return (
        <div style={{ border: "1px solid rgba(0,0,0,0.2)" }} className="w-4/5 mx-auto mt-32 mb-20 rounded-lg">
            <div style={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }} className="w-full flex justify-between items-center rounded-tl-lg rounded-tr-lg px-4 h-16 header ">
                <h1 className="text-black font-black text-xl ">AT-RISK PASSWORDS</h1>
                <div className="w-48 flex justify-around">
                    <p className="text-sm font-semibold rounded-lg px-4 py-2 transition duration-200 outline-none" >Reused</p>
                </div>
            </div>
            <div>
                {
                    duplicate.length > 0 ? duplicate.map((item, index) => {
                        return item !== null && <div key={index}>
                            <div style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }} className="w-full h-16 grid grid-cols-2">
                                {/* logo and name */}
                                <div className=" flex justify-start items-center pl-6">
                                    <img className="h-8
                             w-12 object-cover mr-3 
                             rounded-lg"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="logo" />
                                    <div className="h-2/4 flex flex-col items-start">
                                        <h3 className="font-semibold text-base" >{item.name}</h3>
                                    </div>
                                </div>
                                <div className="flex items-center justify-start">
                                    <FontAwesomeIcon className="text-red-500 mr-1" icon={faExclamationCircle} /> <span className="text-red-500">Reused {item.count} times</span>
                                </div>
                            </div>
                        </div>
                    }) : <h1 className="my-4 text-center font-black text-2xl opacity-30">Nothing to show here!</h1>
                }

            </div>
        </div>
    )
}

export default Security
