export default function SPIBadges({theme, text}) {

    function setTheme(theme) {
        switch (theme) {
            case 'success':
                return 'bg-green-100 text-green-800';
            case 'warning':
                return 'bg-yellow-100 text-yellow-800';
            case 'danger':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-blue-100 text-blue-800';
        }
    }

    return (
        <>
            <span className={`${setTheme(theme)} text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm`}>{text}</span>
        </>
    )
}