import { router, usePage } from "@inertiajs/react";
import { useRef, useState } from "react";
import { route } from "ziggy-js";
import { appendToast } from "../global";

export default function EditableDropdown({ items = [{ text: 'No Items', link: null, param: null }], selected }) {
    const [open, setOpen] = useState(false);

    function handlePost(link, param) {
        if (link && param) {
            setOpen(!open)
            router.post(route(link, param), {
                onError: (page) => {
                    appendToast('toast-append', 'error', 'An unexpected error occurred');
                },
            })
        } else {
            router.visit(route(link))
        }
    }

    return (
        <>
            <div className="relative inline-block text-left">
                <button onClick={() => setOpen(!open)} class={`inline-flex items-center justify-center w-5 h-5 rounded-full hover:bg-gray-200 focus:outline-none ${open ? "bg-green-primary hover:bg-green-900 text-white" : ""}`} type="button">
                    <span class="material-symbols-rounded" style={{ fontSize: '18px' }}>
                        stat_minus_1
                    </span>
                </button>

                {open && (
                    <div id="dropdown" class="absolute right-0 mt-2 w-30 z-1000 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44">
                        <ul class="py-2 text-sm text-gray-700">
                            {items.map((item) => (
                                item.text == selected ? '' :
                                    <li>
                                        <a onClick={() => handlePost(item.link, item.param)} className="block cursor-pointer px-4 py-2 hover:bg-gray-100">{item.text}</a>
                                    </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}
