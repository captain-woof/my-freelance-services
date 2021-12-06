import SidebarAndMain from "../../layouts/sidebarAndMain";
import MainSeo from "../../meta/seo/main";
import Footer from "../../molecules/footer";
import ContactForm from "./form";
import Sidebar from "./sidebar";


export default function Contact() {
    return (
        <>
            <MainSeo />
            <SidebarAndMain sidebarComp={<Sidebar />} mainComp={<ContactForm />} />
            <Footer />
        </>
    )
}
