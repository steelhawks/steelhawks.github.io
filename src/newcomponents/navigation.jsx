import React, {useEffect, useRef, useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import {pages} from '../routes/routes'

const NewNavigation = (props) => {
    const [toggleState, setToggleState] = useState(false)
    const [ourTeam, setOurTeam] = useState(false)

    const doNotDisplay = ['Home', 'Leadership', 'Mentors', 'Subteams', 'Boba']

    return (
        <div>
            {/*desktop nav*/}
            <ul className='py-2 px-4 mb-0 text-lg justify-between font-display uppercase items-center hidden md:flex align-middle h-auto'>
                <li><a href="/"><img alt='' className="h-10" src="media/2601Hawk.svg"/></a></li>
                <li className="m-0">
                    <button className="hover:text-gray-300" onClick={() => {setOurTeam(!ourTeam)}}>OUR TEAM</button>
                    <div className={` ${ourTeam ? "absolute" : "hidden"} w-fit h-fit`}><ul>
                        <li><a href="/mentors">Mentors</a></li>
                        <li><a href="/leadership">Leadership</a></li>
                        <li><a href="/subteams">Subteams</a></li>
                    </ul></div>
                </li>
                {pages.map(page => {if(doNotDisplay.indexOf(page.name) === -1) {return <li className="hover:text-gray-300"><a href={page.path}>{page.name}</a></li>}})}

            </ul>

            {/*mobile nav*/}
            <div className="md:hidden flex justify-center align-middle md:w-0">
                <h1 className="text-xl flex py-1.5">FRC 2601 STEEL HAWKS</h1>
                <button className="z-10 m-2 fixed right-[5%] top-0" onClick={() => {setToggleState(!toggleState)}}>
                    <FontAwesomeIcon className="bg-transparent" icon={solid('bars')} size="lg"/>
                </button>
                <ul className={` ease-in-out duration-[400ms] ${toggleState ? "top-0" : "top-[-100%]"} fixed w-screen h-screen`}>
                    <li className=""><a className="h-fit" href="/">
                        <img alt='' className="h-20 m-4" src="media/2601Hawk.svg"/>
                    </a></li>
                    {pages.map(page => <li className="relative hover:text-gray-300"><a href={page.path}>{page.name}</a></li>)}
                </ul>
            </div>
        </div>


)
}

export default NewNavigation;