import React from "react";
import { useForm } from "react-hook-form";
import { saveBook } from "../../api/bookApi";

export default function MainForm() {
    const { register, handleSubmit } = useForm();
    const onFormSubmit = (data) => saveBook(data);
    const onErrors = (errors) => console.error(errors);

    return (
        <form onSubmit={handleSubmit(onFormSubmit, onErrors)} className="w-full max-w-lg m-auto py-5 px-10 border">
            <div>
                <input type="text" placeholder="Title" name="Title" className="border-solid border-gray-300 border px-2 w-full rounded text-gray-700" {...register('Title')} />
                <input type="text" placeholder="Author" name="Author" className="border-solid border-gray-300 border px-2 w-full rounded text-gray-700" {...register('Author')} />
                <input type="text" placeholder="Year" name="Year" className="border-solid border-gray-300 border px-2 w-full rounded text-gray-700" {...register('Year')} />
                <button>Submit</button>
            </div>
        </form >
    )
}