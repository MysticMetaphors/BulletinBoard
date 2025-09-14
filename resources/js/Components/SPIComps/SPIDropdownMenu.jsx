import { Link, router } from "@inertiajs/react";
import { useState } from "react";
import { route } from "ziggy-js";

export default function SPIDropdownMenu({ is_edit = true, edit = 'home', view = 'home', remove = 'home' }) {
    const [open, setOpen] = useState(false);

    function handleRemove(remove) {
        if (typeof remove === 'object') {
            router.post(route(remove[0], remove[1]), {
                onError: (page) => {
                    appendToast('toast-append', 'error', 'An unexpected error occurred');
                },
            });
            return
        }
        router.visit(route(remove))
    }

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
                        {is_edit ?
                            <li>
                                <Link href={route(typeof edit === 'object' ? edit[0] : edit, typeof edit === 'object' ? edit[1] : undefined)} className="block px-4 py-2 hover:bg-gray-100">
                                    Edit
                                </Link>
                            </li> : ''
                        }
                        <li>
                            <Link href={route(typeof view === 'object' ? view[0] : view, typeof view === 'object' ? view[1] : undefined)} className="block px-4 py-2 hover:bg-gray-100">
                                View
                            </Link>
                        </li>
                        <li>
                            <div onClick={() => handleRemove(remove)} className="block px-4 py-2 hover:bg-gray-100">
                                Delete
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}


