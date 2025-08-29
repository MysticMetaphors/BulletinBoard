import DefaultLayout from "../Layouts/DefaultLayout"

export default function AnnoView() {
    return (
        <>
            <div className="w-full h-full pt-10 px-16 sm:px-24 lg:px-100 h-screen">
                <h1 className="text-6xl font-bold mb-10">
                    Your Chance to Make a Difference: SSC Elections Coming Soon!
                </h1>
                <p className="text-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eius iste, fugit nam quod ratione
                    quis odit non minus illo natus deleniti iusto porro, consectetur dolorem asperiores? Vero, impedit consequuntur.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eius iste, fugit nam quod ratione
                    <br/><br/>
                    quis odit non minus illo natus deleniti iusto porro, consectetur dolorem asperiores? Vero, impedit consequuntur.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eius iste, fugit nam quod ratione
                    quis odit non minus illo natus deleniti iusto porro, consectetur dolorem asperiores? Vero, impedit consequuntur.
                </p>
            </div>
        </>
    )
}

AnnoView.layout = (page) => <DefaultLayout>{page}</DefaultLayout>
