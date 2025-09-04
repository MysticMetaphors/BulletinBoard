import SPIButton from "../../Components/SPIComps/SPIButton"
import DashboardLayout from "../../Layouts/DashboardLayout"
import SPIDropdownMenu from "../../Components/SPIComps/SPIDropdownMenu"
import { Link, usePage } from "@inertiajs/react";
import { route } from "ziggy-js";

export default function Organization() {
    const { orgs } = usePage().props
    console.log("org: ",orgs);

    return (
        <>
            <div className="text-black p-4 mt-12 h-fit grid grid-cols-3 gap-5 justify-center">
                {orgs.map((org) => (
                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm mb-1">
                        <div className="flex justify-end px-4 pt-4">
                            <SPIDropdownMenu />
                        </div>
                        <div className="flex flex-col items-center pb-10">
                            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={`storage/uploads/${org.logo}`} alt="Bonnie image" />
                            <h5 className="mb-1 text-xl font-medium text-gray-900">{org.title}</h5>
                            <span className="text-sm text-gray-500">{org.advisor}</span>
                            <div className="flex gap-1 mt-4 md:mt-6">
                                <Link href={route('org.show', org.id)}>
                                    <SPIButton text="Manage Officers" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

Organization.layout = (page) => <DashboardLayout>{page}</DashboardLayout>
