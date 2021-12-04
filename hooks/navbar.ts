import { Dispatch, SetStateAction, useContext } from "react"
import { NavbarContext } from "../components/providers/navbar"

export const useNavbar = () => {
    const { navbarTransparent, setNavbarTransparent } = useContext(NavbarContext)

    return ({
        navbarTransparent,
        setNavbarTransparent
    } as {
        navbarTransparent: boolean
        setNavbarTransparent: Dispatch<SetStateAction<boolean>>
    })
}