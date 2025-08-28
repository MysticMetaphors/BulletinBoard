import { useRef, useState } from "react"
import SPIButton from "../../Components/SPIComps/SPIButton"
import DashboardLayout from "../../Layouts/DashboardLayout"

export default function SSC() {
    const peopleRef = useRef()

    function handleClick() {
        const menu = peopleRef.current
        menu.classList.toggle('hidden')
    };

    return (
        <>
            <div className="text-black p-4 mt-12 h-fit flex flex-row flex-wrap gap-4 justify-center">
                {Array.from({ length: 8 }, (_, i) => (
                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm mb-1">
                        <div className="flex justify-end px-4 pt-4">
                            <button id="dropdownButton" onClick={handleClick} data-dropdown-toggle="dropdown" className="inline-block text-gray-500 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg text-sm p-1.5" type="button">
                                <span className="sr-only">Open dropdown</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                </svg>
                            </button>

                            <div ref={peopleRef} className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44">
                                <ul className="py-2" aria-labelledby="dropdownButton">
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Edit</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Export Data</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Delete</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col items-center pb-10">
                            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="SkillPowerInstituteLogo.png" alt="Bonnie image" />
                            <h5 className="mb-1 text-xl font-medium text-gray-900">John Doe</h5>
                            <span className="text-sm text-gray-500">President</span>
                            <div className="flex gap-1 mt-4 md:mt-6">
                                {/* <SPIButton text="Edit" /> */}
                                <SPIButton text="Appoint New SSC" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

SSC.layout = (page) => <DashboardLayout>{page}</DashboardLayout>
