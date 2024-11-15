"use client"
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export function LayoutClient ({children}) {
    const path = usePathname();

    return (
        <>
        <Navbar/>
        {children}
        {!path.split("/").includes("my") ? <Footer/> : null} {/* disable footer on /my sub-routes*/}
        </>
    )
}