import { useState } from "react"
import DashboardLayout from "../../../Layouts/DashboardLayout"
import { appendToast } from "../../../global";
import { route } from "ziggy-js";
import { router, usePage } from "@inertiajs/react";

export default function CreateOrg() {
    const { errors } = usePage().props;
    const [step, setStep] = useState(1)
    const [form, setForm] = useState({
        title: '',
        description: '',
        mission: '',
        vision: '',
        logo: null,
        advisor: '',
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    function handleNext() {
        if (form.title.length > 100) {
            appendToast('toast-append', 'error', 'Title cannot exceed 50 characters.')
            return
        }
        if (form.title && form.description && form.logo && form.advisor) {
            setStep(step + 1)
            return
        }
        appendToast('toast-append', 'warning', 'Please complete all fields before continuing.')
    }

    function handleSubmit(e) {
        e.preventDefault()
        router.post(route('org.store'), form, {
            onSuccess: (page) => {
                const success = page.props.flash?.success;
                if (success) {
                    setForm({
                        title: '',
                        description: '',
                        mission: '',
                        vision: '',
                        logo: null,
                        advisor: '',
                    });
                    setStep(1);
                    appendToast('toast-append', 'success', 'Successfully Added');
                }
            },
            onError: (page) => {
                Object.keys(page).forEach((field) => {
                    appendToast('toast-append', 'error', errors[field][0]);
                });
            },
        });
    }

    return (
        <>
            <div className="text-black p-4 mt-12 h-fit overflow-y-auto overflow-visible">
                <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse mb-4">
                    <li
                        className={`flex items-center space-x-2.5 rtl:space-x-reverse ${step >= 1 ? 'text-green-primary' : 'text-gray-500'
                            }`}
                    >
                        <span
                            className={`flex text-white items-center justify-center w-8 h-8 border rounded-full shrink-0 ${step >= 1 ? 'bg-green-primary border-green-primary' : 'border-gray-500'
                                }`}
                        >
                            1
                        </span>
                        <span>
                            <h3 className="font-medium leading-tight">Basic Information</h3>
                            <p className="text-sm">Provide the core details about your organization.</p>
                        </span>
                    </li>
                    <li
                        className={`flex items-center space-x-2.5 rtl:space-x-reverse ${step >= 2 ? 'text-green-primary' : 'text-gray-500'
                            }`}
                    >
                        <span
                            className={`flex items-center justify-center w-8 h-8 border rounded-full shrink-0 ${step >= 2 ? 'bg-green-primary border-green-primary text-white' : 'border-gray-500'
                                }`}
                        >
                            2
                        </span>
                        <span>
                            <h3 className="font-medium leading-tight">Mission & Vision</h3>
                            <p className="text-sm">Define your organization's purpose and future direction.</p>
                        </span>
                    </li>
                </ol>
                <form action="" onSubmit={handleSubmit} className="lg:w-[50%]">

                    {step == 1 ? <div>
                        <div className="mb-6">
                            <label htmlFor="advisor" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                            <input
                                value={form.title} onChange={handleChange}
                                name="title"
                                type="text"
                                placeholder="Your title"
                                id="advisor"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            />
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

                        <div className="mb-6">
                            <label htmlFor="advisor" className="block mb-2 text-sm font-medium text-gray-900">Advisor's Name</label>
                            <input
                                value={form.advisor} onChange={handleChange}
                                name="advisor"
                                type="text"
                                placeholder="Name..."
                                id="advisor"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="logo" className="block mb-2 text-sm font-medium text-gray-900">Logo</label>
                            <input
                                onChange={(e) => setForm({ ...form, logo: e.target.files[0] })}
                                className="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                                name="logo"
                                id="logo"
                                type="file"
                            />
                        </div>
                        <button type="button" onClick={handleNext} className="text-green-primary cursor-pointer hover:text-white border border-green-primary hover:bg-green-primary font-medium rounded-lg text-sm px-5 py-[5px] text-center">
                            Next
                        </button>
                    </div>
                        : step == 2 ? <div>
                            <label htmlFor="mission" className="block mb-2 text-sm font-medium text-gray-900">Mission</label>
                            <textarea
                                value={form.mission} onChange={handleChange}
                                name="mission"
                                id="mission"
                                rows="4"
                                className="mb-4 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Write your thoughts here..."
                            ></textarea>

                            <label htmlFor="vision" className="block mb-2 text-sm font-medium text-gray-900">Vision</label>
                            <textarea
                                value={form.vision} onChange={handleChange}
                                name="vision"
                                id="vision"
                                rows="4"
                                className="mb-4 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Write your thoughts here..."
                            ></textarea>
                            <div className="flex gap-4">
                                <button type="button" onClick={() => setStep(step - 1)} className="text-green-primary cursor-pointer hover:text-white border border-green-primary hover:bg-green-primary font-medium rounded-lg text-sm px-5 py-[5px] text-center">
                                    Back
                                </button>
                                <button type="submit" className="text-green-primary cursor-pointer hover:text-white border border-green-primary hover:bg-green-primary font-medium rounded-lg text-sm px-5 py-[5px] text-center">
                                    Submit
                                </button>
                            </div>
                        </div> : ''}
                </form>
            </div>
        </>
    )
}

CreateOrg.layout = (page) => <DashboardLayout>{page}</DashboardLayout>
