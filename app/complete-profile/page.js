"use server"
import { auth } from "@/auth";
import ServerAuthCheck from "@/config/ServerAuthCheck";
import { CompleteProfile } from "./complete-profile";

export default async function Page() {
    const session = await auth();

    return (
        <>
        <ServerAuthCheck/>
        <CompleteProfile userID={session?.user?.id}/>
        </>
    )
}