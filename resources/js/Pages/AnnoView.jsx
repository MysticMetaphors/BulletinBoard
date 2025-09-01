import { usePage } from "@inertiajs/react"
import DefaultLayout from "../Layouts/DefaultLayout"

export default function AnnoView() {
    const { anno } = usePage().props;

    return (
        <>
            <div className="w-full h-full pt-10 px-16 sm:px-24 lg:px-100">
                <h1 className="text-6xl font-bold mb-10">
                    {anno.title}
                </h1>
                <p className="text-2xl text-justify">
                    {anno.content}
                </p>
            </div>
        </>
    )
}

AnnoView.layout = (page) => <DefaultLayout>{page}</DefaultLayout>
