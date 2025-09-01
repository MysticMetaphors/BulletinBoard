import { usePage } from "@inertiajs/react"
import DefaultLayout from "../Layouts/DefaultLayout"

export default function EventView() {
    const { event } = usePage().props;

    return (
        <>
            <div className="w-full h-full pt-10 px-16 sm:px-24 lg:px-100">
                <h1 className="text-6xl font-bold mb-10">
                    {event.title}
                </h1>
                <p className="text-2xl text-justify">
                    {event.content}
                </p>
            </div>
        </>
    )
}

EventView.layout = (page) => <DefaultLayout>{page}</DefaultLayout>
