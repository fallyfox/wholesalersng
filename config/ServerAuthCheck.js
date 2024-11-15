"use server"
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export default async function ServerAuthCheck() {
    const session = await auth();

    // <<<< USER AUTH CHECK >>>>
    if (!session?.user) {
        redirect("/auth/signin")
    }
    // <<<< USER AUTH CHECK >>>>
}