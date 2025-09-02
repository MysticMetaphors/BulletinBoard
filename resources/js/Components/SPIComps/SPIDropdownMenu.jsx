import { useState } from "react";

export default function SPIDropdownMenu({edit, view, remove}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative inline-block text-left">
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className={`inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 focus:outline-none ${open ? "bg-green-primary hover:bg-green-900 text-white" : ""}`}
            >
                <span className="material-symbols-rounded">more_horiz</span>
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-30 z-1000 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-xl shadow-lg transition-all duration-150 ease-out">
                    <ul className="py-1 text-gray-700">
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                Edit
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                View
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                Delete
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}


