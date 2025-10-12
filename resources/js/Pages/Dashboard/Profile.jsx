import { usePage } from "@inertiajs/react"
import DashboardLayout from "../../Layouts/DashboardLayout"
import SPIButton from "../../Components/SPIComps/SPIButton"
import { useState } from "react"
import DashboardHeader from "../../Components/DashboardHeader"

export default function Profile() {
    const { user } = usePage().props
    const [states, setState] = useState({
        editing: false,
        password: false,
    })

    return (
        <>
            <DashboardHeader Head="Profile" />
            <div className="text-black p-4 mt-12 h-fit">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="flex flex-col gap-4">
                        <div className="relative block p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                            <div className="flex items-center gap-4">
                                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={`./../storage/uploads/${user.avatar}`} alt="logo" />
                                <div>
                                    <h1 className="text-2xl font-bold">{user.name}</h1>
                                    <p className="">{user.role} | {user.email}</p>
                                </div>
                            </div>
                        </div>
                        {states.editing ?
                            <div className="relative block p-6 pt-10 bg-white border border-gray-200 rounded-lg shadow-sm">
                                {/* <h1 className="text-[30px] font-bold mb-6"></h1> */}
                                <div className="grid grid-row md:grid-cols-2 gap-5">
                                    <span onClick={() => setState(prev => ({ ...prev, editing: !prev.editing }))} className="p-1 rounded-full hover:bg-gray-200 material-symbols-rounded absolute top-3 right-3 text-black cursor-pointer">
                                        close
                                    </span>
                                    <div className="mb-6">
                                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                        <input name="email" type="email" placeholder="Email..." id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                    </div>
                                    <div className="mb-6">
                                        <label for="default-input" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                                        <input name="name" type="text" placeholder="Name..." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                    </div>
                                </div>
                            </div> : ''}
                        {states.password ?
                            <div className="relative block p-6 pt-10 bg-white border border-gray-200 rounded-lg shadow-sm">
                                {/* <h1 className="text-[30px] font-bold mb-6"></h1> */}
                                <span onClick={() => setState(prev => ({ ...prev, password: !prev.password }))} className="p-1 rounded-full hover:bg-gray-200 material-symbols-rounded absolute top-3 right-3 text-black cursor-pointer">
                                    close
                                </span>
                                <div className="mb-6">
                                    <label for="default-input" className="block mb-2 text-sm font-medium text-gray-900">Current Password</label>
                                    <input name="name" type="text" placeholder="Name..." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                </div>
                                <div className="grid grid-row md:grid-cols-2 gap-5">
                                    <div className="mb-6">
                                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                        <input name="email" type="email" placeholder="Email..." id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                    </div>
                                    <div className="mb-6">
                                        <label for="default-input" className="block mb-2 text-sm font-medium text-gray-900">Confirm Password</label>
                                        <input name="name" type="text" placeholder="Name..." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                    </div>
                                </div>
                            </div> : ''}
                        <div className="relative grid grid-row md:grid-cols-2 gap-5">
                            {/* <h1 className="text-[30px] font-bold mb-6"></h1> */}
                            {!states.editing ? <SPIButton text="Edit Profile" onClick={() => setState(prev => ({ ...prev, editing: !prev.editing }))}></SPIButton> : ''}
                            {!states.password ? <SPIButton text="Change Password" onClick={() => setState(prev => ({ ...prev, password: !prev.password }))}></SPIButton> : ''}
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                            {/* Login history */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Profile.layout = (page) => <DashboardLayout>{page}</DashboardLayout>
