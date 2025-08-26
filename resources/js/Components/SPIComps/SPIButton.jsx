import { router } from "@inertiajs/react"
import { route } from "ziggy-js"

export default function SPIButton({ text = 'Default', link_to, type = "button", theme}) {
    function goToPage() {
        if (link_to) {
            router.visit(route(link_to))
        }
    }

    function setTheme(theme) {
        switch (theme) {
            case 'secondary':
                return 'text-green-100 cursor-pointer hover:text-white border border-green-primary hover:border-green-100 font-medium rounded-lg text-sm px-5 py-[5px] text-center'
            default:
                return 'text-green-primary cursor-pointer hover:text-white border border-green-primary hover:bg-green-primary font-medium rounded-lg text-sm px-5 py-[5px] text-center'
        }
    }
    return (
        <>
            <button onClick={goToPage} type={type} className={`${setTheme(theme)}`}>
                {text}
            </button>
        </>
    )
}
