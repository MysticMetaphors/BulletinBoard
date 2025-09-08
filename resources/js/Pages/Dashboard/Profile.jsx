import { usePage } from "@inertiajs/react"
import DashboardLayout from "../../Layouts/DashboardLayout"

export default function Profile() {
    const { user } = usePage().props
    console.log(user)
    return (
        <>
            <div className="text-black p-4 mt-12 h-fit">
                <div className="flex items-center gap-4 mb-6">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={`./../storage/uploads/${user.avatar}`} alt="logo" />
                    <div>
                        <h1 className="text-2xl font-bold">{user.name}</h1>
                        <p className="">{user.role} | {user.email}</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-4">
                    <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                        <p className="font-normal text-gray-700">Advisor</p>
                    </div>
                </div>
                <div className="mb-8 border border-gray-200 rounded-lg shadow-xs md:mb-12 md:grid-cols-2 bg-white overflow-hidden">

                </div>
            </div>
            </div>
        </>
    )
}

Profile.layout = (page) => <DashboardLayout>{page}</DashboardLayout>
