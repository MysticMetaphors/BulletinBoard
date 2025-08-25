import DashboardLayout from "../../Layouts/DashboardLayout";

export default function Dashboard() {
    return (
        <>
            <div className="text-black p-4 pb-24 mt-12 h-screen overflow-y-auto overflow-visible">
                dashboard
            </div>
        </>
    )
}

Dashboard.layout = (page) => <DashboardLayout>{page}</DashboardLayout>;
