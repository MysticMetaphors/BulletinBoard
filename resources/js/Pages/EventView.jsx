import { usePage } from "@inertiajs/react"
import DefaultLayout from "../Layouts/DefaultLayout"
import RichTextViewer from "../Components/RichTextDisplay";

export default function EventView() {
    const { event } = usePage().props;

    return (
        <>
            <div className="w-full h-full pt-10 px-16 sm:px-24 lg:px-100">
                <div className="text-2xl text-justify">
                    <RichTextViewer content={event.content} title={event.title}/>
                </div>
            </div>
        </>
    )
}

EventView.layout = (page) => <DefaultLayout>{page}</DefaultLayout>
