"use client"
import React from "react";
import Link from "next/link";
import { CiCirclePlus } from "react-icons/ci";
import { PiStackSimple } from "react-icons/pi";

export function My () {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 md:my-8 lg:my-16">
            <article className="md:bg-gray-200 p-3 rounded-md">
                <div className="grid grid-cols-2 gap-2">
                    <Link href="my/create" className="min-h-16 flex flex-row md:flex-col justify-center items-center gap-3 bg-white rounded-md border border-gray-200 p-2">
                        <CiCirclePlus className="text-2xl"/>
                        <span className="text-gray-700">Create</span>
                    </Link>
                    <Link href="/my/stock" className="min-h-16 flex flex-row md:flex-col justify-center items-center gap-3 bg-white rounded-md border border-gray-200 p-2">
                        <PiStackSimple className="text-2xl"/>
                        <span className="text-gray-700">Stock</span>
                    </Link>
                </div>
            </article>

            <aside className="col-span-2">

            </aside>
        </section>
    )
}