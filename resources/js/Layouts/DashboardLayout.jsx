import { Link, router, usePage } from "@inertiajs/react";
import { useState } from "react";
import SPIButton from "../Components/SPIComps/SPIButton";
// import ProfileDropdown from "../Components/ProfileDropdown";
import { route } from "ziggy-js";

// import logo from '../assets/SkillPowerInstituteLogo.png'

export default function DashboardLayout({ children }) {
    const { auth } = usePage().props

    function toggleModal() {
        const modal = document.getElementById('logout-modal')
        modal.classList.toggle('hidden')
        modal.classList.toggle('flex')
    }

    function toggleDropdown() {
        const dropdown = document.getElementById('dropdown-works');
        dropdown.classList.toggle('hidden');
    }

    function handleLogout() {
        router.post(route('auth.logout'));
    }

    return (
        <>
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
                        {auth.user.role == 'admin' ?
                            <div className="space-y-2">
                                <li className="relative group">
                                    <button type="button" onClick={toggleDropdown} className="flex items-center p-2 text-primaryGrey-1000 rounded-lg" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                        <span class="material-symbols-rounded shrink-0 w-5 h-5 text-green-primary transition duration-75">
                                            group_work
                                        </span>
                                        <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Organization</span>
                                        <svg className="w-3 h-3 ml-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>
                                    <ul id="dropdown-works" className="hidden py-2 space-y-2">
                                        <li>
                                            <Link href={route('org.dashboard')} onClick={() => setActivePage("org")} className="flex items-center w-full p-2 text-green-primary transition duration-75 rounded-lg pl-11 group">Campus</Link>
                                        </li>
                                        <li>
                                            <Link href={route('foundation.index')} onClick={() => setActivePage("org")} className="flex items-center w-full p-2 text-green-primary transition duration-75 rounded-lg pl-11 group">Foundation</Link>
                                        </li>
                                    </ul>
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
                            </div>
                            : ''}
                        <li>
                            <a href="#" className="flex items-center p-2 text-primaryGrey-1000 rounded-lg" onClick={toggleModal}>
                                <span className="material-symbols-rounded shrink-0 w-5 h-5 text-green-primary transition duration-75">
                                    logout
                                </span>
                                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>

            <div id="logout-modal" className="fixed top-0 inset-0 z-100 items-center justify-center bg-black/60 hidden">
                <div className="relative w-full max-w-2xl bg-green-primary rounded-sm shadow-xl border border-gray-400">
                    <div className="flex justify-between items-center p-5 border-b border-gray-400">
                        <div></div>
                        <button onClick={toggleModal} className="text-gray-300 hover:text-white">
                            <span className="material-symbols-rounded">close</span>
                        </button>
                    </div>
                    <div className="p-8">
                        <h1 className="text-lg font-bold text-white mb-2">Are you sure you want to log out?</h1>
                        <p className="text-gray-300 mb-6">
                            You will need to log in again to access your dashboard.
                        </p>

                        <div className="flex justify-end gap-3">
                            <SPIButton type="button" text="Cancel" theme="secondary" onClick={toggleModal}/>
                            <button
                                onClick={handleLogout}
                                className="cursor-pointer bg-red-500 hover:bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>



            <div className="p-4 h-screen sm:ml-64">
                {children}
            </div>
            <div className="fixed bottom-10 h-fit right-10 space-y-4" id="toast-append">
            </div>
        </>
    )
}


