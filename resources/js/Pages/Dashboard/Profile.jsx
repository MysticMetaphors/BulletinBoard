import { router, usePage } from "@inertiajs/react"
import DashboardLayout from "../../Layouts/DashboardLayout"
import SPIButton from "../../Components/SPIComps/SPIButton"
import { useState } from "react"
import DashboardHeader from "../../Components/DashboardHeader"
import { route } from "ziggy-js"
import { appendToast } from "../../global"

export default function Profile() {
    const { user } = usePage().props
    const [states, setState] = useState({
        editing: false,
        password: false,
    })

    const [profile, setProfile] = useState({
        name: '',
        email: '',
        password: '',
    })

    const [newpass, setPass] = useState({
        current_password: '',
        password: '',
        confirm_password: '',
    })

    // function handleProfileSubmit(e) {
    //     e.preventDefault();
    //     router.post(route('user.update_profile'), profile, {
    //         onSuccess: (page) => {
    //             const success = page.props.flash?.success;
    //             if (success) {
    //                 setProfile({
    //                     name: '',
    //                     email: '',
    //                 });
    //                 setState(prev => ({ ...prev, editing: !prev.editing }))
    //                 appendToast('toast-append', 'success', 'Successfully Added');
    //             }
    //         },
    //         onError: (page) => {
    //             Object.keys(page).forEach((field) => {
    //                 appendToast('toast-append', 'error', errors[field][0]);
    //             });
    //         },
    //     });
    // }

    function handlePasswordSubmit(e) {
        e.preventDefault();
        router.post(route('user.update_password'), newpass, {
            onSuccess: (page) => {
                const success = page.props.flash?.success;
                if (success) {
                    setPass({
                        current_password: '',
                        password: '',
                        confirm_password: '',
                    });
                    setState(prev => ({ ...prev, password: !prev.password }))
                    appendToast('toast-append', 'success', 'Successfully Added');
                }
            },
            onError: (page) => {
                Object.keys(page).forEach((field) => {
                    appendToast('toast-append', 'error', errors[field][0]);
                });
            },
        })
    }

    return (
        <>
            <DashboardHeader title="Profile" />
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
                            <div className="w-full bg-white rounded-lg shadow-xl border border-gray-400">
                                <div className="flex justify-between items-center p-5 border-b border-gray-400">
                                    <h1 className="text-[23px] font-bold">Edit Profile</h1>
                                    <span onClick={() => setState(prev => ({ ...prev, editing: !prev.editing }))} className="p-1 rounded-full hover:bg-gray-200 material-symbols-rounded text-black cursor-pointer">
                                        close
                                    </span>
                                </div>
                                <div className="p-8">
                                    <div className="grid grid-row md:grid-cols-2 gap-5">
                                        <div className="mb-4">
                                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                                            <input value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} name="name" type="text" id="name" placeholder="Name..." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                        </div>
                                        <div className="mb-4">
                                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                            <input value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} name="email" type="email" placeholder="Email..." id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label for="password_prof" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                        <input value={profile.password} onChange={(e) => setProfile({ ...profile, password: e.target.value })} name="password_prof" type="password" placeholder="Password..." id="password_prof" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                    </div>
                                    <div className="flex justify-end gap-3">
                                        <SPIButton type="button" text="Cancel" onClick={() => setState(prev => ({ ...prev, editing: !prev.editing }))} />
                                        <SPIButton type="button" text="Save" />
                                    </div>
                                </div>
                            </div> : ''}
                        {states.password ?
                            <div className="w-full bg-white rounded-lg shadow-xl border border-gray-400">
                                <div className="flex justify-between items-center p-5 border-b border-gray-400">
                                    <h1 className="text-[23px] font-bold">Change Password</h1>
                                    <span onClick={() => setState(prev => ({ ...prev, password: !prev.password }))} className="p-1 rounded-full hover:bg-gray-200 material-symbols-rounded text-black cursor-pointer">
                                        close
                                    </span>
                                </div>
                                <div className="p-8">
                                    <div className="mb-4">
                                        <label for="current_password" className="block mb-2 text-sm font-medium text-gray-900">Current Password</label>
                                        <input onChange={(e) => setPass({ ...newpass, current_password: e.target.value })} name="current_password" id="current_password" type="password" placeholder="Current password..." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                    </div>
                                    <div className="grid grid-row md:grid-cols-2 gap-5">
                                        <div className="mb-4">
                                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                            <input onChange={(e) => setPass({ ...newpass, password: e.target.value })} name="password" id="password" type="password" placeholder="Password..." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                        </div>
                                        <div className="mb-4">
                                            <label for="confirm_password" className="block mb-2 text-sm font-medium text-gray-900">Confirm Password</label>
                                            <input onChange={(e) => setPass({ ...newpass, confirm_password: e.target.value })} name="confirm_password" id="confirm_password" type="password" placeholder="Confirm password..." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                        </div>
                                    </div>
                                    <div className="flex justify-end gap-3">
                                        <SPIButton type="button" text="Cancel" onClick={() => setState(prev => ({ ...prev, password: !prev.password }))} />
                                        <SPIButton type="submit" text="Save" />
                                    </div>
                                </div>
                            </div> : ''}
                        <div className="relative grid grid-row md:grid-cols-2 gap-5">
                            {/* <h1 className="text-[30px] font-bold mb-4"></h1> */}
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
