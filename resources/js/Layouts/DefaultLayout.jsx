import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";

export default function DefaultLayout({children}) {
    return (
        <>
        <Navigation/>
        {children}
        <Footer/>
        </>
    )
}
