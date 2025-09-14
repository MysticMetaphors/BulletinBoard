import { Link, usePage } from "@inertiajs/react"
import DefaultLayout from "../Layouts/DefaultLayout"
import SPIButton from "../Components/SPIComps/SPIButton"

export default function Organization() {
    const { orgs } = usePage().props

    const foundation = orgs.filter(org => org.org_type === 'foundation')
    const campus = orgs.filter(org => org.org_type === 'org')

    return (
        <>
            <div className="w-full h-full px-8 sm:px-12 lg:px-24">
                <h1 className="text-4xl font-bold mb-4 mt-12 md:px-26">Campus Organizations</h1>
                <div className="grid grid-row md:grid-cols-3 gap-5 px-0 lg:px-24">
                    {campus.map((org) => (
                        <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm mb-1">
                            <div className="flex flex-col items-center py-10">
                                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={`./storage/uploads/${org.logo}`} alt="Bonnie image" />
                                <h5 className="mb-1 text-xl font-medium text-gray-900">{org.title}</h5>
                                <span className="text-sm text-gray-500">{org.advisor}</span>
                                <div className="flex gap-1 mt-4 md:mt-6">
                                    <Link href={route('org.show', org.id)}>
                                        <SPIButton text="See Officers" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <h1 className="text-4xl font-bold mb-4 mt-12 md:px-26">Foundation Organizations</h1>
                <div className="grid grid-row md:grid-cols-3 gap-5 px-0 lg:px-24">
                    {foundation.map((org) => (
                        <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm mb-1">
                            <div className="flex flex-col items-center py-10">
                                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={`./storage/uploads/${org.logo}`} alt="Bonnie image" />
                                <h5 className="mb-1 text-xl font-medium text-gray-900">{org.title}</h5>
                                <span className="text-sm text-gray-500">{org.advisor}</span>
                                {/* <div className="flex gap-1 mt-4 md:mt-6">
                                    <Link href={route('org.show', org.id)}>
                                        <SPIButton text="See Officers" />
                                    </Link>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

Organization.layout = (page) => <DefaultLayout>{page}</DefaultLayout>
