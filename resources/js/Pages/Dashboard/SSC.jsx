import { useRef } from "react"
import SPIButton from "../../Components/SPIComps/SPIButton"
import DashboardLayout from "../../Layouts/DashboardLayout"
import SPIDropdownMenu from "../../Components/SPIComps/SPIDropdownMenu"

export default function SSC() {
    const peopleRef = useRef()

    return (
        <>
            <div className="text-black p-4 mt-12 h-fit flex flex-row flex-wrap gap-4 justify-center">
                {Array.from({ length: 8 }, (_, i) => (
                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm mb-1">
                        <div className="flex justify-end px-4 pt-4">
                            <SPIDropdownMenu />
                        </div>
                        <div className="flex flex-col items-center pb-10">
                            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="SkillPowerInstituteLogo.png" alt="Bonnie image" />
                            <h5 className="mb-1 text-xl font-medium text-gray-900">John Doe</h5>
                            <span className="text-sm text-gray-500">President</span>
                            <div className="flex gap-1 mt-4 md:mt-6">
                                {/* <SPIButton text="Edit" /> */}
                                <SPIButton text="Appoint New SSC" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

SSC.layout = (page) => <DashboardLayout>{page}</DashboardLayout>
