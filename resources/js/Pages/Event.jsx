import DefaultLayout from "../Layouts/DefaultLayout"

export default function Event() {
    return (
        <>
            <div className="w-full h-full px-8 sm:px-12 lg:px-24">
                <h1 className="text-4xl font-bold mb-4 mt-12 md:px-26">Event</h1>
                <div className="gap-5 flex flex-wrap flex-row justify-center">
                    {Array.from({ length: 12 }, (_, i) => (
                        <div className="max-w-90 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                            <p className="mb-3 font-normal text-gray-700">August 25, 2024</p>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Buwan ng Wika: Isang Pagdiriwang ng Kultura at Wika</h5>
                            </a>
                            <a href="#" className="inline-flex items-center py-2 text-sm font-medium text-center text-blue-500">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

Event.layout = (page) => <DefaultLayout>{page}</DefaultLayout>
