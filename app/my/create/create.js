"use client"
import React from "react";
import Link from "next/link";
import { useFormik } from "formik";
import * as yup from "yup";

export function Create () {
    return (
        <main className="flex items-center bg-gradient from-gray-100 via-stone-200 to-gray-20 my-6 md:my-8 lg:my-16">
            <div className="w-full lg:w-[768px] bg-white rounded-md p-4">
                <p className="text-2xl text-gray-700 pb-4 mb-4 border-b border-stone-200">Create a wholesale product</p>

                <form>

                </form>
            </div>
        </main>
    )
}