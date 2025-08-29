import DefaultLayout from "../Layouts/DefaultLayout";
// import SPIButton from "../Components/SPIComps/SPIButton";

export default function Home() {
    console.log("Home loaded")
    return (
        <>
            <div className="w-full h-full px-8 sm:px-12 lg:px-24">
                {/* <div className="p-10">
                    <SPIButton text="Go to Dashboard (Temporary)" link_to={'dashboard'} />
                    <SPIButton text="Go to login (Temporary)" link_to={'login'} />
                </div> */}
                <h1 className="text-4xl font-bold mb-4 mt-12 md:px-26">Announcements</h1>
                <div className="gap-5 flex flex-wrap flex-row justify-center">
                    {Array.from({ length: 6 }, (_, i) => (
                        <div className="max-w-90 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                            <p className="mb-3 font-normal text-gray-700">August 25, 2024</p>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Your Chance to Make a Difference: SSC Elections Coming Soon!"</h5>
                            </a>
                            {/* <p className="mb-3 font-normal text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p> */}
                            <a href="#" className="inline-flex items-center py-2 text-sm font-medium text-center text-blue-500">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>

                <h1 className="text-4xl font-bold mb-4 mt-12 md:px-26">Event</h1>
                <div className="gap-5 flex flex-wrap flex-row justify-center">
                    {Array.from({ length: 6 }, (_, i) => (
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

Home.layout = (page) => <DefaultLayout>{page}</DefaultLayout>;
