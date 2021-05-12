import React from 'react'
import ActionContainer from "./ActionContainer/ActionContainer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import InfoUi from "./InfoUI/InfoUi";

function Password({ passwordArray }) {
    return (
        <>
            <ActionContainer />
            <div className="md:container-lg md:mx-auto p-3 w-3/4 min-h-table rounded-lg mt-52  ">
                <div style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }} className="w-full h-16  flex items-center">
                    <div className="w-full h-2/4 font-bold uppercase opacity-60 text-sm pl-8 flex items-center cursor-pointer">Name<FontAwesomeIcon className="ml-1 text-lg" icon={faCaretDown} /></div>
                </div>
                {
                    passwordArray.length === 0 ? <h1 className="opacity-30 ml-96 mt-8 font-black text-2xl uppercase">Start storing password🤗</h1> : passwordArray.map(password => {
                        return <InfoUi password={password} key={password.id} />
                    })
                }
            </div>
        </>
    )
}

export default Password
