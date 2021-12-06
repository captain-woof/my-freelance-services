import SidebarAndMain from "../../layouts/sidebarAndMain";
import MainSeo from "../../meta/seo/main";
import Footer from "../../molecules/footer";
import AboutBio from "./bio";
import MyPicSidebar from "./sidebar";

export default function About() {
    return (
        <>
            <MainSeo />
            <SidebarAndMain sidebarComp={<MyPicSidebar />} mainComp={<AboutBio />} />
            <Footer />
        </>
    )
}
