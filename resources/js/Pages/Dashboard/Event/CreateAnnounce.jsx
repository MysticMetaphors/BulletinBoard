import { useEffect, useState } from "react";
import { route } from "ziggy-js";
import { router, usePage } from "@inertiajs/react";
import DashboardLayout from "../../../Layouts/DashboardLayout";
import { appendToast } from "../../../global";
import RichTextEditor from "../../../Components/RichTextEditor";
import RichTextDisplay from "../../../Components/RichTextDisplay";
import DashboardHeader from "../../../Components/DashboardHeader";
import SPIButton from "../../../Components/SPIComps/SPIButton";

export default function CreateAnnounce() {
    const { errors } = usePage().props;
    const [content, setContent] = useState("");
    const [step, setStep] = useState(1)
    const [form, setForm] = useState({
        title: '',
        content: '',
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
        if (form.title.length > 100) {
            appendToast('toast-append', 'error', 'Title cannot exceed 50 characters.')
            return
        }
        if (form.title) {
            setStep(step + 1)
            return
        }
        appendToast('toast-append', 'warning', 'Please complete all fields before continuing.')
    }

    function handleSubmit(e) {
        e.preventDefault()
        router.post(route('announcement.store'), form, {
            onSuccess: (page) => {
                const success = page.props.flash?.success;
                if (success) {
                    setForm({
                        title: '',
                        content: '',
                    });
                    setContent("");
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
            <DashboardHeader Head="Create Announcement" children={<SPIButton text="Back to Announcements" link_to={'announcement.dashboard'} theme={'secondary'} />} />
            <div className="text-black p-4 mt-12 h-full overflow-y-auto overflow-visible">
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
                            <h3 className="font-medium leading-tight">Announcement Content</h3>
                            <p className="text-sm">Compose Announcement Content.</p>
                        </span>
                    </li>
                    <li
                        className={`flex items-center space-x-2.5 rtl:space-x-reverse ${step >= 3 ? 'text-green-primary' : 'text-gray-500'
                            }`}
                    >
                        <span
                            className={`flex items-center justify-center w-8 h-8 border rounded-full shrink-0 ${step === 3 ? 'bg-green-primary border-green-primary text-white' : 'border-gray-500'
                                }`}
                        >
                            3
                        </span>
                        <span>
                            <h3 className="font-medium leading-tight">Preview</h3>
                            <p className="text-sm">Announcement preview</p>
                        </span>
                    </li>
                </ol>

                <form className={`${step == 2 ? 'w-full' : 'lg:w-[50%]'}`} onSubmit={handleSubmit}>
                    {/* ====================== Step 1 ====================== */}

                    {step == 1 ?
                        <div>
                            <h1 className="text-lg font-semibold mb-4">Create Announcement</h1>
                            <div className="mb-6">
                                <label for="default-input" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                                <input name="title" type="text" value={form.title} onChange={handleChange} placeholder="Your title" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                            </div>

                            <button type="button" onClick={handleNext} className="text-green-primary cursor-pointer hover:text-white border border-green-primary hover:bg-green-primary font-medium rounded-lg text-sm px-5 py-[5px] text-center">
                                Next
                            </button>
                        </div>
                        : step == 2 ? <div>
                            <div id="richtext">
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

                        </div> : step == 3 &&
                        <div>
                            <div>
                                <div className="mb-4">
                                    <RichTextDisplay content={content} title={form.title} />
                                </div>
                            </div>
                            <div className="flex gap-4">
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
                        </div>
                    }
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

CreateAnnounce.layout = (page) => <DashboardLayout>{page}</DashboardLayout>
