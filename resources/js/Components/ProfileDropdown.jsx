import { Link } from "@inertiajs/react"

export default function ProfileDropdown({auth}) {
    function toggleProfile() {
        const prof = document.getElementById('profdrop')
        prof.classList.toggle('hidden')
    }

    console.log(auth)

    return (
        <>
            <div className="relative">
                <button onClick={toggleProfile} className="flex items-center text-sm pe-1 font-medium text-primaryGrey-1000 rounded-full cursor-pointer" type="button">
                    <span className="sr-only">Open user menu</span>
                    <img className="w-8 h-8 me-2 rounded-full" src={`./../storage/uploads/${auth.avatar}`} alt="user photo" />
                </button>

                <div id="profdrop" className="absolute right-0 mt-2 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44">
                    <div className="px-4 py-3 text-sm text-gray-900">
                        <div className="font-medium ">{auth.name}</div>
                        <div className="truncate">{auth.email}</div>
                    </div>
                    <ul className="py-2 text-sm text-gray-700">
                        <li>
                            <Link to={'/profile'} className="block px-4 py-2 hover:bg-gray-100">My Profile</Link>
                        </li>
                    </ul>
                    <div className="py-2">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                    </div>
                </div>
            </div>
        </>
    )
}
