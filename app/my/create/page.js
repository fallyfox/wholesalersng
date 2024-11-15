"use server"
import Link from "next/link";
import { auth } from "@/auth";
import ServerAuthCheck from "@/config/ServerAuthCheck";
import { Create } from "./create";

export default async function Page() {
    const session = await auth();

    return (
        <>
        <ServerAuthCheck/>
        { session?.user?.completedProfile
        ?
        <Create/>
        :
        <div className="my-6 md:my-8 lg:my-16 px-2 md:px-8 lg:px-16">
            <h1 className="text-3xl text-gray-800">Just one more step ...</h1>
            <p className="text-md my-3">Complete your profile and have access to all features on Wholesalersng</p>
            <Link href="/complete-profile" className="bg-green-600 text-white uppercase p-3 rounded-md">Complete Profile</Link>
        </div>
        }
        </>
    )
}