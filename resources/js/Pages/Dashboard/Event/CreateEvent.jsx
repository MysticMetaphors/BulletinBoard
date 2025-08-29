import { useState } from "react";
import { route } from "ziggy-js";
import { router, usePage } from "@inertiajs/react";
import DashboardLayout from "../../../Layouts/DashboardLayout";
import { appendToast } from "../../../global";

export default function CreateEvent() {
    const { errors, flash } = usePage().props;
    const [step, setStep] = useState(1)
    const [form, setForm] = useState({
        title: '',
        content: '',
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    function handleNext() {
        if (form.title.length > 50) {
            appendToast('toast-append', 'error', 'Title cannot exceed 50 characters.')
            return
        }
        if (form.title && form.content) {
            setStep(step + 1)
            return
        }
        appendToast('toast-append', 'warning', 'Please complete all fields before continuing.')
    }

    function handleSubmit(e) {
        e.preventDefault()
        router.post(route('event.store'), form, {
            onSuccess: (page) => {
                const success = page.props.flash?.success;
                if (success) {
                    setForm({
                        title: '',
                        content: '',
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
                            <h3 className="font-medium leading-tight">Create a Content</h3>
                            <p className="text-sm">Event content</p>
                        </span>
                    </li>
                    <li
                        className={`flex items-center space-x-2.5 rtl:space-x-reverse ${step >= 2 ? 'text-green-primary' : 'text-gray-500'
                            }`}
                    >
                        <span
                            className={`flex items-center justify-center w-8 h-8 border rounded-full shrink-0 ${step === 2 ? 'bg-green-primary border-green-primary text-white' : 'border-gray-500'
                                }`}
                        >
                            2
                        </span>
                        <span>
                            <h3 className="font-medium leading-tight">Confirm</h3>
                            <p className="text-sm">Event preview</p>
                        </span>
                    </li>
                </ol>

                <form className="lg:w-[50%]" onSubmit={handleSubmit}>
                    {/* ====================== Step 1 ====================== */}
                    {/* <RichTextEditor /> */}
                    {step == 1 ?
                        <div>
                            <h1 className="text-lg font-semibold mb-4">Create Event</h1>
                            <div className="mb-6">
                                <label for="default-input" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                                <input name="title" type="text" value={form.title} onChange={handleChange} placeholder="Your title" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                            </div>
                            <label for="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                            <textarea name="content" id="message" value={form.content} onChange={handleChange} rows="4" className="mb-4 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                            <button type="button" onClick={handleNext} className="text-green-primary cursor-pointer hover:text-white border border-green-primary hover:bg-green-primary font-medium rounded-lg text-sm px-5 py-[5px] text-center">
                                Next
                            </button>
                        </div>
                        : step == 2 ? <div>
                            <div>
                                <h1 className="text-5xl font-bold mb-4">{form.title}</h1>
                                <p style={{ fontSize: 'larger' }} className="mb-4">
                                    {form.content}
                                </p>
                            </div>
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

                {/* <div id="step-2">
                    <form className="lg:w-[50%]">
                        <label for="ssc" className="block mb-2 text-sm font-medium text-gray-900">Created By</label>
                        <select id="ssc" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option selected>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </form>
                </div> */}
            </div>
        </>
    )
}

CreateEvent.layout = (page) => <DashboardLayout>{page}</DashboardLayout>
