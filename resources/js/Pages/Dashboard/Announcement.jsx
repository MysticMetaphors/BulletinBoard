import { usePage } from "@inertiajs/react";
import SPIBadges from "../../Components/SPIComps/SPIBadge";
import DashboardLayout from "../../Layouts/DashboardLayout";
import SPIDropdownMenu from "../../Components/SPIComps/SPIDropdownMenu";
import { formatDate } from "../../global";
import EditableDropdown from "../../Components/EditableDropdown";
import DashboardHeader from "../../Components/DashboardHeader";
import SPIButton from "../../Components/SPIComps/SPIButton";

export default function Announcement() {
    const { anno, user } = usePage().props;

    function setTheme(status) {
        switch (status) {
            case 'Released':
                return 'success';
            case 'Draft':
                return 'warning';
            case 'Cancelled':
                return 'danger';
            case 'Deprecated':
                return 'danger';
            default:
                return 'info';
        }
    }

    return (
        <>
            <DashboardHeader Head="Announcements" children={<SPIButton text="New Announcement" link_to={'announcement.create'} theme={'secondary'} />}/>
                <div className="text-black p-4 mt-12 h-fit">
                    <div className="flex flex-row justify-between">
                        {/* <div className="relative mb-6">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <span className="material-symbols-rounded text-gray-500">
                                search
                            </span>
                        </div>
                        <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="Search..." />
                    </div> */}
                        {/* <div className="flex items-center space-x-2">
                        <label for="entries" className="text-sm font-medium text-gray-700">Entries per page:</label>
                        <select id="entries" name="entries"
                            className="block w-24 py-1 rounded-md border-gray-300 bg-white text-gray-700 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm">
                            <option value="10" selected>10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                        </select>
                    </div> */}
                    </div>
                    <div className="relative shadow-md">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                            <thead className="text-xs text-white uppercase bg-green-primary">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Title
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Author
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Date Created
                                    </th>
                                    <th scope="col" className="px-6 py-3">

                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {anno.map((annos) => (
                                    <tr className="bg-white border-b border-gray-200">
                                        <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
                                            {annos.title}
                                        </th>
                                        <td className="px-6 py-2">
                                            {annos.author}
                                        </td>
                                        <td className="px-6 py-2">
                                            <div className="grid grid-flow-col gap-0 place-items-center w-fit">
                                                <SPIBadges theme={setTheme(annos.status)} text={annos.status} />
                                                <EditableDropdown selected={annos.status} items={[
                                                    { text: 'Released', link: 'announcement.update_stat', param: [annos.id, 'Released'] },
                                                    { text: 'Draft', link: 'announcement.update_stat', param: [annos.id, 'Draft'] },
                                                ]} />
                                            </div>
                                        </td>
                                        <td className="px-6 py-2">
                                            {formatDate(annos.created_at)}
                                        </td>
                                        <td className="px-6 py-2 flex">
                                            <SPIDropdownMenu view={['announcement.show', annos.id]} edit={['announcement.edit', annos.id]} remove={['announcement.update_stat', [annos.id, 'Deprecated']]} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {anno.length > 10 ?
                        <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
                            <span className="text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-gray-900">1-10</span> of <span className="font-semibold text-gray-900">1000</span></span>
                            <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                                <li>
                                    <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">Previous</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">1</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</a>
                                </li>
                                <li>
                                    <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">3</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">4</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">5</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">Next</a>
                                </li>
                            </ul>
                        </nav>
                        : ''
                    }
                </div>
            </>
            )
}

Announcement.layout = (page) => <DashboardLayout>{page}</DashboardLayout>;
