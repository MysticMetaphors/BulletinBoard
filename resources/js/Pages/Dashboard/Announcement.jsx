import SPIBadges from "../../Components/SPIComps/SPIBadge";
import DashboardLayout from "../../Layouts/DashboardLayout";

export default function Announcement() {
    return (
        <>
            <div className="text-black p-4 mt-12 h-fit">
                <div className="flex flex-row justify-between">
                    <div className="relative mb-6">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            {/* <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                        </svg> */}
                            <span class="material-symbols-rounded text-gray-500">
                                search
                            </span>
                        </div>
                        <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="Search..." />
                    </div>
                    <div class="flex items-center space-x-2">
                        <label for="entries" class="text-sm font-medium text-gray-700">Entries per page:</label>
                        <select id="entries" name="entries"
                            class="block w-24 py-1 rounded-md border-gray-300 bg-white text-gray-700 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm">
                            <option value="10" selected>10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                        </select>
                    </div>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                     <table className="w-full text-sm text-left rtl:text-right text-gray-500">
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
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 10 }, (_, i) => (
                                <tr className="bg-white border-b border-gray-200">
                                    <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
                                        Buwan ng Wika
                                    </th>
                                    <td className="px-6 py-2">
                                        John Doe
                                    </td>
                                    <td className="px-6 py-2">
                                        <SPIBadges theme="warning" text="Draft" />
                                    </td>
                                    <td className="px-6 py-2">
                                        August 25, 2024
                                    </td>
                                    <td className="px-6 py-2 flex gap-2">
                                        <button type="button" className="p-1 cursor-pointer flex items-center rounded-lg bg-orange-200 text-orange">
                                            <span className="material-symbols-rounded" style={{ color: 'darkorange' }}>
                                                stylus
                                            </span>
                                        </button>
                                        <button type="button" className="p-1 cursor-pointer flex items-center rounded-lg bg-blue-200 text-orange">
                                            <span className="material-symbols-rounded" style={{ color: 'blue' }}>
                                                clarify
                                            </span>
                                        </button>
                                        <button type="button" className="p-1 cursor-pointer flex items-center rounded-lg bg-red-200 text-orange">
                                            <span className="material-symbols-rounded" style={{ color: 'red' }}>
                                                delete
                                            </span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
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
            </div>
        </>
    )
}

Announcement.layout = (page) => <DashboardLayout>{page}</DashboardLayout>;
