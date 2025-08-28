import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";

export default function DefaultLayout({ children }) {
    return (
        <>
            <Navigation />
            {children}
            <Footer />
            <div className="absolute bottom-10 h-fit right-10 space-y-4" id="toast-append">
            </div>
        </>
    )
}
