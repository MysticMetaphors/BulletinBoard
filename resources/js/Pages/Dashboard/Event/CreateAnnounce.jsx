// import RichTextEditor from "../../../Components/RichTextEditor";
import { useState } from "react";
import DashboardLayout from "../../../Layouts/DashboardLayout";

export default function CreateAnnounce() {
    const [step, setStep] = useState(1)
    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')

    return (
        <>
            <div className="text-black p-4 pb-24 mt-12 h-screen overflow-y-auto overflow-visible">
                <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse mb-4">
                    <li className="flex items-center text-green-primary space-x-2.5 rtl:space-x-reverse">
                        <span className="flex text-white items-center justify-center w-8 h-8 border bg-green-primary rounded-full shrink-0">
                            1
                        </span>
                        <span>
                            <h3 className="font-medium leading-tight">Create a Content</h3>
                            <p className="text-sm">Announcement content</p>
                        </span>
                    </li>
                    {/* <li className="flex items-center text-gray-500 space-x-2.5 rtl:space-x-reverse">
                        <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0">
                            2
                        </span>
                        <span>
                            <h3 className="font-medium leading-tight">Basic Info</h3>
                            <p className="text-sm">Announcement's basic info</p>
                        </span>
                    </li> */}
                    <li className="flex items-center text-gray-500 space-x-2.5 rtl:space-x-reverse">
                        <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0">
                            2
                        </span>
                        <span>
                            <h3 className="font-medium leading-tight">Confirm</h3>
                            <p className="text-sm">Announcement preview</p>
                        </span>
                    </li>
                </ol>


                {step == 1 ? <div id="step-1">
                    <h1 className="text-lg font-semibold mb-4">Create Announcement</h1>
                    <form className="lg:w-[50%]">
                        {/* ====================== Step 1 ====================== */}
                        {/* <RichTextEditor /> */}
                        <div className="mb-6">
                            <label for="default-input" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Your title" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                        <label for="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                        <textarea id="message" value={content} onChange={(e) => setContent(e.target.value)} rows="4" className="mb-4 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                        <button type="button" onClick={() => (title && content) != ''  ? setStep(step + 1) : console.log('fill in')} className="text-green-primary cursor-pointer hover:text-white border border-green-primary hover:bg-green-primary font-medium rounded-lg text-sm px-5 py-[5px] text-center">
                            Next
                        </button>
                    </form>
                </div> : step == 2 ?
                    <div id="step-2">
                        <div className="lg:w-[50%]">
                            <div>
                                <h1 className="text-5xl font-bold mb-4">{title}</h1>
                                <p style={{ fontSize: 'larger' }} className="mb-4">
                                    {content}
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <button type="button" onClick={() => setStep(step - 1)} className="text-green-primary cursor-pointer hover:text-white border border-green-primary hover:bg-green-primary font-medium rounded-lg text-sm px-5 py-[5px] text-center">
                                    Back
                                </button>
                                <button type="button" className="text-green-primary cursor-pointer hover:text-white border border-green-primary hover:bg-green-primary font-medium rounded-lg text-sm px-5 py-[5px] text-center">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div> : ''}
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
