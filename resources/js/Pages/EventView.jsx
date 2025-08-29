import DefaultLayout from "../Layouts/DefaultLayout"

export default function EventView() {
    return (
        <>
            <div className="w-full h-full px-8 sm:px-12 lg:px-24">

            </div>
        </>
    )
}

EventView.layout = (page) => <DefaultLayout>{page}</DefaultLayout>
