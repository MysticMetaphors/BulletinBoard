import { Link, usePage } from "@inertiajs/react";
import ProfileDropdown from "./ProfileDropdown";
import { route } from "ziggy-js";

import logo from '../assets/SkillPowerInstituteLogo.png'

export default function DashboardHeader({ Head, children }) {
    const { auth } = usePage().props

    function openNav() {
        const nav = document.getElementById('logo-sidebar')
        nav.classList.toggle('-translate-x-full')
    }

    console.log(auth)

    return (
        <nav className="fixed top-0 left-0 z-50 w-full bg-green-primary border-b border-gray-200">
            {/* <Head title={`${Head ? Head : 'SPI - Dashboard'}`} /> */}

            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start rtl:justify-end">
                        <button onClick={openNav} type="button" className="inline-flex items-center p-2 text-sm text-white rounded-lg sm:hidden hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                            <span className="sr-only">Open sidebar</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                            </svg>
                        </button>
                        <Link href={route('home')} className="flex ms-2 md:me-24">
                            <img src={logo} className="h-8 w-8 me-3" alt="SPI Logo" />
                            <span className="self-center text-2xl whitespace-nowrap text-primaryYellow-1000 font-bold hidden md:block sm:hidden"></span>
                        </Link>
                    </div>
                    <div className="flex items-center">
                        {children}
                        <div className="flex items-center ms-3">
                            <ProfileDropdown auth={auth.user} />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
