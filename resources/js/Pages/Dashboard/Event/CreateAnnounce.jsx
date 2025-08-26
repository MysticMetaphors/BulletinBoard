import RichTextEditor from "../../../Components/RichTextEditor";
import SPIButton from "../../../Components/SPIComps/SPIButton";
import DashboardLayout from "../../../Layouts/DashboardLayout";

export default function CreateAnnounce() {
    return (
        <>
            <div className="text-black p-4 pb-24 mt-12 h-screen overflow-y-auto overflow-visible">

                <ol class="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse mb-4">
                    <li class="flex items-center text-green-primary space-x-2.5 rtl:space-x-reverse">
                        <span class="flex text-white items-center justify-center w-8 h-8 border bg-green-primary rounded-full shrink-0">
                            1
                        </span>
                        <span>
                            <h3 class="font-medium leading-tight">Create a Content</h3>
                            <p class="text-sm">Step details here</p>
                        </span>
                    </li>
                    <li class="flex items-center text-gray-500 space-x-2.5 rtl:space-x-reverse">
                        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0">
                            2
                        </span>
                        <span>
                            <h3 class="font-medium leading-tight">Basic Info</h3>
                            <p class="text-sm">Step details here</p>
                        </span>
                    </li>
                    <li class="flex items-center text-gray-500 space-x-2.5 rtl:space-x-reverse">
                        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0">
                            3
                        </span>
                        <span>
                            <h3 class="font-medium leading-tight">Confirm</h3>
                            <p class="text-sm">Announcement preview</p>
                        </span>
                    </li>
                </ol>


                <h1 className="text-lg font-semibold mb-4">Create Announcement</h1>
                <form>
                    {/* ====================== Step 1 ====================== */}
                    <RichTextEditor />
                    <SPIButton text="Next" />
                </form>
            </div>
        </>
    )
}

CreateAnnounce.layout = (page) => <DashboardLayout>{page}</DashboardLayout>
