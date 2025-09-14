import { usePage } from "@inertiajs/react"
import DefaultLayout from "../Layouts/DefaultLayout"

export default function OrgView() {
    const { org, members } = usePage().props
    return (
        <>
            <div className="w-full h-full px-8 py-10 sm:px-12 lg:px-24">
                <div className="flex items-center gap-4 mb-6">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={`./../storage/uploads/${org.logo}`} alt="logo" />
                    <div>
                        <h1 className="text-2xl font-bold">{org.title}</h1>
                        <p className="">{org.description}</p>
                    </div>
                </div>
                <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm mb-4">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{org.advisor}</h5>
                    <p className="font-normal text-gray-700">Advisor</p>
                </div>
                {org.vision && org.mission ? <div className="mb-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Mission</h5>
                        <p className="font-normal text-gray-700">{org.mission}</p>
                    </div>
                    <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Vision</h5>
                        <p className="font-normal text-gray-700">{org.vision}</p>
                    </div>
                </div> : '' }
                {/* <h1 className="text-2xl font-bold text-green-primary mx-8 mb-4 mt-6">Officers</h1> */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {members && members.length > 0 ? (
                        members.map((member) => (
                            <div
                                key={member.id}
                                className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
                            >
                                {/* Profile */}
                                <div className="flex items-center gap-4">
                                    <img
                                        className="rounded-full w-20 h-20 shadow"
                                        src={`./../storage/uploads/${member.avatar}`}
                                        alt={`${member.name} profile`}
                                    />
                                    <div>
                                        <h3 className="text-lg font-semibold">{member.name}</h3>
                                        <p className="text-sm text-blue-600 font-medium">{member.role}</p>
                                    </div>
                                </div>

                                {/* Description / Quote */}
                                {member.description && (
                                    <p className="mt-4 text-gray-600 italic">“{member.description}”</p>
                                )}
                            </div>
                        ))
                    ) : (
                        // <h1 className="col-span-full text-lg font-bold text-center text-gray-400">
                        //     No Members
                        // </h1>
                        ''
                    )}
                </div>

            </div>
        </>
    )
}

OrgView.layout = (page) => <DefaultLayout>{page}</DefaultLayout>
