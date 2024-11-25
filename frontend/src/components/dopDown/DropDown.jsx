import React from 'react'
import { IoReorderThree } from "react-icons/io5";
import StartChatButton from './startChatButton';
import ExploreFeatures from './ExploreFeatures';

const DropDown = () => {
    return (

        <div className="dropdown">
            <div tabIndex={0} role="button" className="bg-transparent "><IoReorderThree className='h-10 w-16' />
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-neutral-300 rounded-box mt-6 z-[1] w-52 p-2 ">
                <li><StartChatButton /></li>
                <li><ExploreFeatures /></li>
            </ul>
        </div>
    )
}

export default DropDown
