import React from "react";
import { useForm } from "react-hook-form";

export default function MainForm() {
    return (
        <form className="w-full max-w-lg m-auto py-5 px-10 border">
            <div>
                <input className="border-solid border-gray-300 border px-2 w-full rounded text-gray-700" value="Title" />
                <input className="border-solid border-gray-300 border px-2 w-full rounded text-gray-700" value="Author" />
                <input className="border-solid border-gray-300 border px-2 w-full rounded text-gray-700" value="Year" />
            </div>
        </form >
    )
}