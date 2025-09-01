import { Link, usePage } from "@inertiajs/react"
import DefaultLayout from "../Layouts/DefaultLayout"
import formatDate from "../global";
import { route } from "ziggy-js";

export default function Announcement() {
    const { anno } = usePage().props;

    return (
        <>
            <div className="w-full h-full px-8 sm:px-12 lg:px-24">
                <h1 className="text-4xl font-bold mb-4 mt-12 md:px-26">Announcements</h1>
                <div className="grid grid-cols-3 gap-5 justify-center px-0 lg:px-24">
                    {anno.map((annos) => (
                        <div className="max-w-90 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                            <p className="mb-3 font-normal text-gray-700">{formatDate(annos.created_at)}</p>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{annos.title}</h5>
                            </a>
                            {/* <p className="mb-3 font-normal text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p> */}
                            <Link href={route(`announcement.show`, annos.id)} className="inline-flex items-center py-2 text-sm font-medium text-center text-blue-500">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

Announcement.layout = (page) => <DefaultLayout>{page}</DefaultLayout>
