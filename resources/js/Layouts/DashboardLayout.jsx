import { Link } from "@inertiajs/react";
import { useState } from "react";
import SPIButton from "../Components/SPIComps/SPIButton";
import ProfileDropdown from "../Components/ProfileDropdown";
import { route } from "ziggy-js";

import logo from '../assets/SkillPowerInstituteLogo.png'

export default function DashboardLayout({ children }) {
    const [activePage, setActivePage] = useState(null);

    function openNav() {
        const nav = document.getElementById('logo-sidebar')
        nav.classList.toggle('-translate-x-full')
    }

    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-green-primary border-b border-gray-200">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <button onClick={openNav} type="button" className="inline-flex items-center p-2 text-sm text-white rounded-lg sm:hidden hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <Link href={route('home')} className="flex ms-2 md:me-24">
                                <img src={logo} className="h-8 w-8 me-3" alt="FlowBite Logo" />
                                <span className="self-center text-2xl whitespace-nowrap text-primaryYellow-1000 font-bold hidden md:block sm:hidden"></span>
                            </Link>
                        </div>
                        <div className="flex items-center">
                            {activePage == "announcement" ? <SPIButton text="New Announcement" link_to={'announcement.create'} theme={'secondary'} />
                            : activePage == "event" ? <SPIButton text="New Event" link_to={'event.create'} theme={'secondary'} /> :
                            activePage == "org" ? <SPIButton text="New Organization" link_to={'org.create'} theme={'secondary'} /> :
                            activePage == "user" ? <SPIButton text="New User" link_to={'event.create'} theme={'secondary'} /> : '' }
                            <div className="flex items-center ms-3">
                                <ProfileDropdown />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
                    <ul className="space-y-2 ">
                        <li>
                            {/* <Link href={route('dashboard')} onClick={() => setActivePage(null)} className="flex items-center p-2 text-primaryGrey-1000 rounded-lg">
                                <span className="material-symbols-rounded shrink-0 w-5 h-5 text-green-primary transition duration-75">
                                    dashboard
                                </span>
                                <span className="ms-3">Dashboard</span>
                            </Link> */}
                        </li>
                        <li>
                            <Link href={route('announcement.dashboard')} onClick={() => setActivePage("announcement")} className="flex items-center p-2 text-primaryGrey-1000 rounded-lg">
                                <span className="material-symbols-rounded shrink-0 w-5 h-5 text-green-primary transition duration-75">
                                    breaking_news
                                </span>
                                <span className="flex-1 ms-3 whitespace-nowrap">Announcement</span>
                            </Link>
                        </li>
                        <li>
                            <Link href={route('event.dashboard')} onClick={() => setActivePage("event")} className="flex items-center p-2 text-primaryGrey-1000 rounded-lg">
                                <span className="material-symbols-rounded shrink-0 w-5 h-5 text-green-primary transition duration-75">
                                    event
                                </span>
                                <span className="flex-1 ms-3 whitespace-nowrap">Event</span>
                            </Link>
                        </li>
                        <li>
                            <Link href={route('org.index')} onClick={() => setActivePage("org")} className="flex items-center p-2 text-primaryGrey-1000 rounded-lg">
                                <span className="material-symbols-rounded shrink-0 w-5 h-5 text-green-primary transition duration-75">
                                    group_work
                                </span>
                                <span className="flex-1 ms-3 whitespace-nowrap">Organization</span>
                            </Link>
                        </li>
                        <li>
                            <Link href={route('history')} onClick={() => setActivePage(null)} className="flex items-center p-2 text-primaryGrey-1000 rounded-lg">
                                <span className="material-symbols-rounded shrink-0 w-5 h-5 text-green-primary transition duration-75">
                                    history_2
                                </span>
                                <span className="flex-1 ms-3 whitespace-nowrap">History</span>
                            </Link>
                        </li>
                        <li>
                            <Link href={route('user.index')} onClick={() => setActivePage("user")} className="flex items-center p-2 text-primaryGrey-1000 rounded-lg">
                                <span className="material-symbols-rounded shrink-0 w-5 h-5 text-green-primary transition duration-75">
                                    manage_accounts
                                </span>
                                <span className="ms-3">User</span>
                            </Link>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-primaryGrey-1000 rounded-lg">
                                <span className="material-symbols-rounded shrink-0 w-5 h-5 text-green-primary transition duration-75">
                                    logout
                                </span>
                                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>

            <div className="p-4 h-screen sm:ml-64">
                {children}
            </div>
            <div className="absolute bottom-10 h-fit right-10 space-y-4" id="toast-append">
            </div>
        </>
    )
}


