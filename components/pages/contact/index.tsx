import SidebarAndMain from "../../layouts/sidebarAndMain";
import Footer from "../../molecules/footer";
import ContactForm from "./form";
import Sidebar from "./sidebar";


export default function Contact() {
    return (
        <>
            <SidebarAndMain sidebarComp={<Sidebar />} mainComp={<ContactForm />} />
            <Footer />
        </>
    )
}
