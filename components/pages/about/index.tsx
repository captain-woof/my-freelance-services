import SidebarAndMain from "../../layouts/sidebarAndMain";
import Footer from "../../molecules/footer";
import AboutBio from "./bio";
import MyPicSidebar from "./sidebar";

export default function About() {
    return (
        <>
            <SidebarAndMain sidebarComp={<MyPicSidebar />} mainComp={<AboutBio />} />
            <Footer />
        </>
    )
}
