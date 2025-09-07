import { Link, usePage } from "@inertiajs/react"
import DashboardLayout from "../../Layouts/DashboardLayout"
import SPIButton from "../../Components/SPIComps/SPIButton"
import { route } from "ziggy-js"

export default function OrgView() {
    const { org, members } = usePage().props
    const logo = 'event_1756870408.jpg'
    return (
        <div className="text-black p-4 mt-12 h-fit">
            <div className="flex items-center gap-4 mb-6">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={`./../storage/uploads/${logo}`} alt="logo" />
                <div>
                    <h1 className="text-2xl font-bold">{org.title}</h1>
                    <p className="">{org.description}</p>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-4">
                    <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{org.advisor}</h5>
                        <p className="font-normal text-gray-700">Advisor</p>
                    </div>
                    <div className="mb-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Mission</h5>
                            <p className="font-normal text-gray-700">{org.mission}</p>
                        </div>
                        <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Vision</h5>
                            <p className="font-normal text-gray-700">{org.vision}</p>
                        </div>
                    </div>
                </div>
                <div className="mb-8 border border-gray-200 rounded-lg shadow-xs md:mb-12 md:grid-cols-2 bg-white overflow-hidden">
                    <div className="flex items-center justify-between bg-green-primary">
                        <h1 className="text-2xl font-bold text-white mx-8 mb-4 mt-6">Officers</h1>
                        <Link href={route('member.create', { id: org.id })} className="mx-8">
                            <SPIButton text="New Officer" theme={'secondary'} />
                        </Link>
                    </div>
                    {/* <hr className="border border-1 border-green-primary" /> */}
                    <div className="grid">
                        {members != null ?
                            members.map((member) => (
                                <div className="p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e">
                                    <div className="flex items-center justify-left ">
                                        <img className="rounded-full w-20 h-20 shadow-md" src={`./../storage/uploads/${member.avatar}`} alt="profile picture" />
                                        <div className="space-y-0.5 font-medium text-left rtl:text-right ms-3">
                                            <div>{member.name}</div>
                                            <div className="text-sm text-gray-500 ">{member.role}</div>
                                        </div>
                                    </div>
                                </div>
                            )) :
                            <h1 className="text-lg text-left font-bold p-10 text-gray-500">No Members</h1>
                        }
                    </div>
                </div>
            </div>



        </div>
    )
}

OrgView.layout = (page) => <DashboardLayout>{page}</DashboardLayout>
