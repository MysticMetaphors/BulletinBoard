import { useEffect, useState } from "react";
import { route } from "ziggy-js";
import { router, usePage } from "@inertiajs/react";
import DashboardLayout from "../../../Layouts/DashboardLayout";
// import DefaultLayout from "../../../Layouts/DefaultLayout";
import { appendToast } from "../../../global";
import RichTextEditor from "../../../Components/RichTextEditor";
import RichTextViewer from "../../../Components/RichTextDisplay";
import DashboardHeader from "../../../Components/DashboardHeader";
import SPIButton from "../../../Components/SPIComps/SPIButton";

export default function CreateEvent() {
    const { errors } = usePage().props;
    const [content, setContent] = useState("");
    const [step, setStep] = useState(1)
    const [form, setForm] = useState({
        title: '',
        content: '',
        start: '',
        time: null,
        location: '',
    });

    useEffect(() => {
        setContent(content)
    }, [])

    useEffect(() => {
        setForm({ ...form, content: content });
    }, [content]);

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    function handleNext() {
        if (form.title.length > 50) {
            appendToast('toast-append', 'error', 'Title cannot exceed 50 characters.')
            return
        }
        if (form.title && form.start && form.time && form.location) {
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
                        start: '',
                        time: '',
                        location: '',
                    });
                    setContent("")
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
        <DashboardHeader title="Create Event" children={<SPIButton text="Back to Events" link_to={'event.dashboard'} theme={'secondary'} />}/>
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
                            <p className="text-sm">Provide the core details about your event.</p>
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
                            <h3 className="font-medium leading-tight">Event Content</h3>
                            <p className="text-sm">Compose Event Content.</p>
                        </span>
                    </li>
                    <li
                        className={`flex items-center space-x-2.5 rtl:space-x-reverse ${step >= 3 ? 'text-green-primary' : 'text-gray-500'
                            }`}
                    >
                        <span
                            className={`flex items-center justify-center w-8 h-8 border rounded-full shrink-0 ${step >= 3 ? 'bg-green-primary border-green-primary text-white' : 'border-gray-500'
                                }`}
                        >
                            3
                        </span>
                        <span>
                            <h3 className="font-medium leading-tight">Preview</h3>
                            <p className="text-sm">Event preview</p>
                        </span>
                    </li>
                </ol>

                <form className={`${step == 2 ? 'w-full' : 'lg:w-[50%] '}`} onSubmit={handleSubmit}>
                    {/* ====================== Step 1 ====================== */}
                    {/* <RichTextEditor /> */}
                    {step == 1 ?
                        <div>
                            <h1 className="text-lg font-semibold mb-4">Create Event</h1>
                            <div className="mb-6">
                                <label for="default-input" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                                <input name="title" type="text" value={form.title} onChange={handleChange} placeholder="Your title" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <label for="default-input" className="block mb-2 text-sm font-medium text-gray-900">Start Date</label>
                                    <input name="start" type="date" value={form.start} onChange={handleChange} placeholder="Start" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                </div>

                                <div>
                                    <label for="time" className="block mb-2 text-sm font-medium text-gray-900">Select time:</label>
                                    <div className="flex">
                                        <input type="time" name="time" id="time" value={form.time} onChange={handleChange} className="rounded-none rounded-s-lg bg-gray-50 border text-gray-900 leading-none focus:ring-blue-500 focus:border-blue-500 block flex-1 w-full text-sm border-gray-300 p-2.5" />
                                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-s-0 border-s-0 border-gray-300 rounded-e-md">
                                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6">
                                <label for="default-input" className="block mb-2 text-sm font-medium text-gray-900">Location</label>
                                <input name="location" type="text" value={form.location} onChange={handleChange} placeholder="Event Location" id="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                            </div>
                            <button type="button" onClick={handleNext} className="text-green-primary cursor-pointer hover:text-white border border-green-primary hover:bg-green-primary font-medium rounded-lg text-sm px-5 py-[5px] text-center">
                                Next
                            </button>
                        </div>
                        : step == 2 ?
                            <div>
                                <div>
                                    <label for="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                                    <RichTextEditor
                                        name="content"
                                        value={content}
                                        onChange={(newContent) => { setContent(newContent); }}
                                    />
                                </div>
                                <div className="flex gap-4">
                                    <button type="button" onClick={() => setStep(step - 1)} className="text-green-primary cursor-pointer hover:text-white border border-green-primary hover:bg-green-primary font-medium rounded-lg text-sm px-5 py-[5px] text-center">
                                        Back
                                    </button>
                                    <button type="button" onClick={handleNext} className="text-green-primary cursor-pointer hover:text-white border border-green-primary hover:bg-green-primary font-medium rounded-lg text-sm px-5 py-[5px] text-center">
                                        Next
                                    </button>
                                </div>
                            </div>
                            : step == 3 ?
                                <div>
                                    <div>
                                        <RichTextViewer content={content} title={form.title} />
                                    </div>
                                    <div className="flex gap-4 mt-10">
                                        <button type="button" onClick={() => setStep(step - 1)} className="text-green-primary cursor-pointer hover:text-white border border-green-primary hover:bg-green-primary font-medium rounded-lg text-sm px-5 py-[5px] text-center">
                                            Back
                                        </button>
                                        <button type="submit"
                                            disabled={true}
                                            ref={(el) => {
                                                if (el) {
                                                    setTimeout(() => {
                                                        el.disabled = false;
                                                        el.classList.remove("opacity-50", "cursor-not-allowed");
                                                    }, 2000);
                                                }
                                            }}
                                            className="opacity-50 cursor-not-allowed text-green-primary cursor-pointer hover:text-white border border-green-primary hover:bg-green-primary font-medium rounded-lg text-sm px-5 py-[5px] text-center">
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
// CreateEvent.layout = (page) => <DefaultLayout>{page}</DefaultLayout>
