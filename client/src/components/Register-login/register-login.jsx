import React,{useState} from 'react'
import client_http_req_functions from "../../client-http/users.http"

const initialReg = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const initialLog = {
    username_email: "",
    password: ""
}

function Register_Login() {

    const [flag, setFlag] = useState(false);
    const [InputReg, setInputReg] = useState(initialReg)
    const [InputLog, setInputLog] = useState(initialLog)

    const controlInputsReg = (e) => {
        setInputReg({...InputReg,[e.target.name]: e.target.value});
    }
    const controlInputsLog = (e) => {
        setInputLog({...InputLog,[e.target.name]: e.target.value});
    }
    const submitReg = () => {
        if(!InputReg.username || !InputReg.email || !InputReg.password) {
            return alert("Input field cannot be empty!");
        }
        if(InputReg.password !== InputReg.confirmPassword) {
            return alert("Confirm password doesn't match!");
        }
        client_http_req_functions.registerUser(InputReg)
        setInputReg(initialReg)
    }
    const submitLog = () => {
        if(!InputLog.username_email || !InputLog.password) {
            return alert("Input field cannot be empty!");
        }
        client_http_req_functions.loginUser(InputLog)
        setInputLog(initialLog)
    }

    return (
        <div className="w-full h-screen flex justify-center items-center">
            {
                flag ? <form className=" __border pl-8 pr-8 pb-8 pt-5 rounded-lg relative top-8 bg-white">
                    <h1 className="font-black text-3xl mb-3">Register</h1>
                <hr className="mb-3" />
                <label htmlFor="username">
                    <p className="text-sm font-semibold mb-1 ml-2">Username</p>
                    <input value={InputReg.username} onChange={(e) => {
                        controlInputsReg(e)
                    }} name="username" className="py-4 bg-input_bg w-80 px-7 rounded-lg text-sm font-semibold custom-hover-class mb-4 outline-none"  type="text" id="username" placeholder="username" />
                </label>
                <label htmlFor="email">
                    <p className="text-sm font-semibold mb-1 ml-2">Email</p>
                    <input value={InputReg.email} onChange={(e) => {
                        controlInputsReg(e)
                    }} name="email" className="py-4 bg-input_bg w-80 px-7 rounded-lg text-sm font-semibold custom-hover-class mb-4 outline-none" type="email" id="email" placeholder="email" />
                </label>
                <label htmlFor="password">
                    <p className="text-sm font-semibold mb-1 ml-2">Password</p>
                    <input value={InputReg.password} onChange={(e) => {
                        controlInputsReg(e)
                    }} name="password" className="py-4 bg-input_bg w-80 px-7 rounded-lg text-sm font-semibold custom-hover-class mb-4 outline-none" type="text" id="password" placeholder="password" />
                </label>
                <label htmlFor="confirm-password">
                    <p className="text-sm font-semibold mb-1 ml-2">Confirm Password</p>
                    <input value={InputReg.confirmPassword} onChange={(e) => {
                        controlInputsReg(e)
                    }} name="confirmPassword" className="py-4 bg-input_bg w-80 px-7 rounded-lg text-sm font-semibold custom-hover-class outline-none" type="text" id="confirm-password" placeholder="Confirm password" />
                </label>
                <div className="flex flex-col mt-8">
                    <button onClick={(e) => {
                        e.preventDefault();
                        submitReg();
                    }} className="w-full py-5 bg-accent text-white mb-3 rounded-lg text-sm font-semibold hover:bg-yellow-600 transition duration-200">Submit</button>
                    <button className="w-full py-5 bg-gray-200 rounded-lg text-sm font-semibold hover:bg-gray-300 transition duration-200" onClick={(e) => {
                        e.preventDefault();
                        setFlag(false);
                    }}>Login</button>
                </div>
            </form>
            :
            <form className="p-8 rounded-lg __border mt-12 bg-white">
                <h1 className="font-black text-3xl my-3">Login</h1>
                <hr className="mb-3" />
                <label htmlFor="username-email">
                    <p className="text-sm font-semibold mb-1 ml-2">Username / Email</p>
                    <input value={InputLog.username_email} onChange={(e) => {
                        controlInputsLog(e)
                    }} name="username_email" className="py-4 bg-input_bg w-80 px-7 rounded-lg text-sm font-semibold custom-hover-class mb-4 outline-none" type="text" id="username-email" placeholder="username / email" />
                </label>
                <label htmlFor="password">
                    <p className="text-sm font-semibold mb-1 ml-2">Password</p>
                    <input value={InputLog.password} onChange={(e) => {
                        controlInputsLog(e)
                    }} name="password" className="py-4 bg-input_bg w-80 px-7 rounded-lg text-sm font-semibold custom-hover-class outline-none" type="text" id="password" placeholder="password" />
                </label>
                <div className="flex flex-col mt-8">
                    <button onClick={(e) => {
                        e.preventDefault();
                        submitLog();
                    }} className="w-full py-5 bg-accent text-white mb-3 rounded-lg text-sm font-semibold hover:bg-yellow-600 transition duration-200">Submit</button>
                    <button className="w-full py-5 bg-black rounded-lg text-sm font-semibold hover:bg-gray-800 transition duration-200 text-white  mb-3" >Guest Login</button>
                    <button className="w-full py-5 bg-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-400 transition duration-200" onClick={(e) => {
                        e.preventDefault();
                        setFlag(true);
                    }}>Register</button>
                </div>
            </form>
            }
            
        </div>
    )
}

export default Register_Login
