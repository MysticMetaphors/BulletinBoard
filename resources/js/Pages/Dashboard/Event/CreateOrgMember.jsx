import { useState } from "react"
import DashboardLayout from "../../../Layouts/DashboardLayout"
import { appendToast } from "../../../global";
import { route } from "ziggy-js";
import { router, usePage } from "@inertiajs/react";
import DashboardHeader from "../../../Components/DashboardHeader";
import SPIButton from "../../../Components/SPIComps/SPIButton";

export default function CreateOrgMember() {
    const { errors, title, id } = usePage().props;
    const [form, setForm] = useState({
        name: '',
        organization_id: id,
        role: '',
        contact: '',
        avatar: null,
        description: '',
        experience: '',
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    function handleSubmit(e) {
        e.preventDefault()
        router.post(route('member.store'), form, {
            onSuccess: (page) => {
                const success = page.props.flash?.success;
                if (success) {
                    setForm({
                        name: '',
                        organization_id: id,
                        role: '',
                        contact: '',
                        avatar: null,
                        description: '',
                        experience: '',
                    });
                    appendToast('toast-append', 'success', 'Successfully Added');
                }
            },
            onError: (page) => {
                Object.keys(page).forEach((field) => {
                    appendToast('toast-append', 'error', errors[field]);
                });
            },
        });
    }

    return (
        <>
            <DashboardHeader Head={`${title} New Member`} children={<SPIButton text="Back to Organization" link_to={['org.show', id]} theme={'secondary'} />} />
            <div className="text-black p-4 mt-12 h-fit overflow-y-auto overflow-visible">
                <form action="" onSubmit={handleSubmit} className="lg:w-[50%]">
                    <div>
                        <h1 className="text-[30px] font-bold mb-6">{title} new member</h1>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                                <input
                                    value={form.name} onChange={handleChange}
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                />
                            </div>
                            <div>
                                <label htmlFor="avatar" className="block mb-2 text-sm font-medium text-gray-900">Avatar</label>
                                <input
                                    onChange={(e) => setForm({ ...form, avatar: e.target.files[0] })}
                                    className="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                                    name="avatar"
                                    id="avatar"
                                    type="file"
                                />
                            </div>
                        </div>

                        {/* <div className="mb-6">
                            <label htmlFor="advisor" className="block mb-2 text-sm font-medium text-gray-900">Advisor's Name</label>
                            <input
                                value={form.advisor} onChange={handleChange}
                                name="advisor"
                                type="text"
                                placeholder="Name..."
                                id="advisor"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            />
                        </div> */}

                        <div className="grid grid-cols-2 gap-4">
                            <div className="mb-6">
                                <label htmlFor="contact" className="block mb-2 text-sm font-medium text-gray-900">Contact</label>
                                <input
                                    value={form.contact} onChange={handleChange}
                                    name="contact"
                                    type="text"
                                    placeholder="Contact..."
                                    id="contact"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900">Role</label>
                                <input
                                    value={form.role} onChange={handleChange}
                                    name="role"
                                    type="text"
                                    placeholder="Role..."
                                    id="role"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                />
                            </div>
                        </div>

                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                        <textarea
                            value={form.description} onChange={handleChange}
                            name="description"
                            id="description"
                            rows="4"
                            className="mb-4 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Write your thoughts here..."
                        ></textarea>

                        <button type="submit" className="text-green-primary cursor-pointer hover:text-white border border-green-primary hover:bg-green-primary font-medium rounded-lg text-sm px-5 py-[5px] text-center">
                            Next
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

CreateOrgMember.layout = (page) => <DashboardLayout>{page}</DashboardLayout>
