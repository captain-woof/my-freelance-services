import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react"

export const NavbarContext = createContext<{
    navbarTransparent: boolean
    setNavbarTransparent: Dispatch<SetStateAction<boolean>> | null
}>({
    navbarTransparent: false,
    setNavbarTransparent: null
})

export default function NavbarProvider({ children }: { children: ReactNode }) {
    const [navbarTransparent, setNavbarTransparent] = useState<boolean>(false)
    return (
        <NavbarContext.Provider value={{
            navbarTransparent,
            setNavbarTransparent
        }}>
            {children}
        </NavbarContext.Provider>
    )
}