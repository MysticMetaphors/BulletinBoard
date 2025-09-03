import { Link, usePage } from "@inertiajs/react";
import DefaultLayout from "../Layouts/DefaultLayout"
import formatDate from "../global";

export default function Event() {
    const { event } = usePage().props;
    return (
        <>
            <div className="w-full h-full px-8 sm:px-12 lg:px-24">
                <h1 className="text-4xl font-bold mb-4 mt-12 md:px-26">Upcoming Events</h1>
                <div className="grid grid-cols-3 gap-5 justify-center px-0 lg:px-24">
                    {event.map((events) => (
                        <div className="max-w-90 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                            <p className="mb-3 font-normal text-gray-700">{formatDate(events.start)}</p>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{events.title}</h5>
                            </a>
                            <Link href={route(`event.show`, events.id)} className="inline-flex items-center py-2 text-sm font-medium text-center text-blue-500">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>

                <h1 className="text-4xl font-bold mb-4 mt-12 md:px-26">Events</h1>
                <div className="grid grid-cols-3 gap-5 justify-center px-0 lg:px-24">
                    {event.map((events) => (
                        <div className="max-w-90 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                            <p className="mb-3 font-normal text-gray-700">{formatDate(events.start)}</p>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{events.title}</h5>
                            </a>
                            <Link href={route(`event.show`, events.id)} className="inline-flex items-center py-2 text-sm font-medium text-center text-blue-500">
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

Event.layout = (page) => <DefaultLayout>{page}</DefaultLayout>
