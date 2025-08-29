export default function Toast({ theme, text }) {
    let themeSet = setTheme(theme)

    function setTheme(theme) {
        const themes = {
            success: {
                bg: 'bg-teal-500',
                icon: 'check'
            },
            warning: {
                bg: 'bg-orange-500',
                icon: 'exclamation'
            },
            error: {
                bg: 'bg-red-500',
                icon: 'close'
            },
            info: {
                bg: 'bg-blue-500',
                icon: 'check_indeterminate_small'
            }
        };

        if (!theme) return setTheme('info')
        return themes[theme]
    }


    console.log(themeSet)
    return (
        <>
            <div className="animate-show-up space-y-3">
                <div className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg" role="alert" tabindex="-1" aria-labelledby="hs-toast-stack-toggle-update-label">
                    <div className="flex p-4">
                        <div className="shrink-0">
                            <span
                                className={`${themeSet.bg} content-center text-center rounded-full text-white w-5 h-5 material-symbols-rounded`}
                                style={{ fontSize: '16px', lineHeight: '1', fontWeight: 'bold' }}
                            >
                                {themeSet.icon}
                            </span>
                        </div>
                        <div className="ms-3">
                            <p id="hs-toast-stack-toggle-update-label" className="text-sm text-gray-700">
                                {text}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
