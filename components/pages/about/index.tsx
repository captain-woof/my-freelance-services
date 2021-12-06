import { useEffect } from "react";
import { useNavbar } from "../../../hooks/navbar";
import SidebarAndMain from "../../layouts/sidebarAndMain";
import MainSeo from "../../meta/seo/main";
import Footer from "../../molecules/footer";
import AboutBio from "./bio";
import MyPicSidebar from "./sidebar";

export default function About() {
    // Set navbar background to primary
    const { setNavbarTransparent } = useNavbar()
    useEffect(() => {
        setNavbarTransparent(false)
    }, [setNavbarTransparent])

    return (
        <>
            <MainSeo />
            <SidebarAndMain sidebarComp={<MyPicSidebar />} mainComp={<AboutBio />} />
            <Footer />
        </>
    )
}
