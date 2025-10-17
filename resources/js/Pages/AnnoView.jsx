import { usePage } from "@inertiajs/react"
import DefaultLayout from "../Layouts/DefaultLayout"
import RichTextViewer from "../Components/RichTextDisplay";

export default function AnnoView() {
    const { anno } = usePage().props;

    return (
        <>
            <div className="w-full h-full pt-10 px-10 sm:px-10 lg:px-100">
                <div className="text-2xl text-justify">
                    <RichTextViewer contents={anno.content} title={anno.title}/>
                </div>
            </div>
        </>
    )
}

AnnoView.layout = (page) => <DefaultLayout>{page}</DefaultLayout>
