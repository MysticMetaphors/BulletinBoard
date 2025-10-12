import { useState } from "react";
import DashboardLayout from "../../../Layouts/DashboardLayout"
import { router, usePage } from "@inertiajs/react";
import { route } from "ziggy-js";
import SPIButton from "../../../Components/SPIComps/SPIButton";
import { appendToast } from "../../../global";
import DashboardHeader from "../../../Components/DashboardHeader";

export default function CreateUser() {
    const { errors } = usePage().props
    const [confirm, setConfirm] = useState('')
    const [form, setForm] = useState({
        name: '',
        email: '',
        role: '',
        password: '',
        avatar: null
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    function handleSubmit(e) {
        e.preventDefault();
        if (form.password == confirm) {
            router.post(route('user.store'), form, {
                onSuccess: (page) => {
                    const success = page.props.flash?.success;
                    if (success) {
                        setForm({
                            name: '',
                            email: '',
                            role: '',
                            password: '',
                            avatar: null
                        });
                        setConfirm('')
                        appendToast('toast-append', 'success', 'Successfully Added');
                    }
                },
                onError: (page) => {
                    Object.keys(page).forEach((field) => {
                        appendToast('toast-append', 'error', errors[field][0]);
                    });
                },
            })
        } else {
            appendToast('toast-append', 'error', 'Password and Confirm Password must match');
        }
    }

    return (
        <>
        <DashboardHeader Head="Create User" children={<SPIButton text="Back to Users" link_to={'user.index'} theme={'secondary'} />} />
            <div className="text-black p-4 mt-12 h-fit overflow-y-auto overflow-visible">
                <form action="" className="lg:w-[50%]" onSubmit={handleSubmit}>
                    <h1 className="text-[30px] font-bold mb-6">New user</h1>
                    <div className="mb-6">
                        <label for="default-input" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                        <input value={form.name} onChange={handleChange} name="name" type="text" placeholder="Name..." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </div>
                    <div className="grid grid-row md:grid-cols-2 gap-5">
                        <div className="mb-6">
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Role</label>
                            <input value={form.email} onChange={handleChange} name="email" type="email" placeholder="Email..." id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="role"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Role
                            </label>
                            <select
                                onChange={handleChange}
                                value={form.role}
                                id="role"
                                name="role"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            >
                                <option value="" selected hidden>Select role...</option>
                                <option value="admin">Admin</option>
                                <option value="member">Member</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="avatar" className="block mb-2 text-sm font-medium text-gray-900">Avatar</label>
                        <input
                            onChange={(e) => setForm({ ...form, avatar: e.target.files[0] })}
                            className="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                            name="avatar"
                            id="avatar"
                            type="file"
                        />
                    </div>

                    <div className="grid grid-row md:grid-cols-2 gap-5">
                        <div className="mb-6">
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <input value={form.password} onChange={handleChange} name="password" type="password" placeholder="Password..." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                        <div className="mb-6">
                            <label for="confirm" className="block mb-2 text-sm font-medium text-gray-900">Confirm Password</label>
                            <input onChange={(e) => setConfirm(e.target.value)} name="confirm" type="password" placeholder="Confirm Password..." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                    </div>

                    <SPIButton type="submit" text="Submit" />
                </form>
            </div>
        </>
    )
}

CreateUser.layout = (page) => <DashboardLayout>{page}</DashboardLayout>
