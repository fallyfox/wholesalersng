"use server"
import { auth } from "@/auth";
import ServerAuthCheck from "@/config/ServerAuthCheck";
import { My } from "./my";

export default async function Page() {
    const session = await auth();

    return (
        <>
        <ServerAuthCheck/>
        <My/>
        </>
    )
}