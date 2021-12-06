import { useEffect } from "react";
import { useNavbar } from "../../../hooks/navbar";
import SidebarAndMain from "../../layouts/sidebarAndMain";
import MainSeo from "../../meta/seo/main";
import Footer from "../../molecules/footer";
import ContactForm from "./form";
import Sidebar from "./sidebar";

export default function Contact() {
    // Set navbar background to primary
    const { setNavbarTransparent } = useNavbar()
    useEffect(() => {
        setNavbarTransparent(false)
    }, [setNavbarTransparent])
    
    return (
        <>
            <MainSeo />
            <SidebarAndMain sidebarComp={<Sidebar />} mainComp={<ContactForm />} />
            <Footer />
        </>
    )
}
