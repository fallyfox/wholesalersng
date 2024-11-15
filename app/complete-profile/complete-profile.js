"use client"
import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField,Button,CircularProgress } from "@mui/material";

const schema = yup.object().shape({
    businessName: yup.string().required().min(3),
    businessCategory:yup.string().required().notOneOf(["none"]),
    businessSubCategory:yup.string().required().notOneOf(["none"]),
    phone:yup.string().required().max(15),
    businessEmail:yup.string().max(60),
    contactAddress: yup.string().required().min(16),
    state:yup.string().required().notOneOf(["none"]),
    lga:yup.string().required().notOneOf(["none"]),
})

export function CompleteProfile ({userID}) {
    const [progress,setProgress] = useState(false);

    const {handleSubmit,handleChange,values,errors} = useFormik({
        initialValues:{ businessName:"",businessCategory:"",businessSubCategory:"",phone:"",businessEmail:"",contactAddress:"",state:"",lga:""},
        onSubmit: () => {

        },
        validationSchema: schema
    });

    return (
        <main className="flex items-center bg-gradient from-gray-100 via-stone-200 to-gray-20 my-6 md:my-8 lg:my-16">
            <div className="w-full lg:w-[768px] bg-white rounded-md p-4">
                <p className="text-2xl text-gray-700 pb-4 mb-4 border-b border-stone-200">Complete your profile</p>

                <form>

                </form>
            </div>
        </main>
    )
}