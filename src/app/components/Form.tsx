"use client"

import { useState } from "react"


export default function Form(){

    const [username , setUsername] = useState('');
    const [marketingEmails , setMarketingEmails] = useState(false);
    function hanldeSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
    }
    function handleInputChange(e:  React.FormEvent<HTMLInputElement>){
        setUsername(e.target.value);
    }

    return (
        <div className="space-y-4 p-4 rounded border">
            <div className="space-y-2">
                <h1 className="text-xl">Form</h1>
                <p className="text-sm">please choose and enter data</p>
            </div>
            <form onSubmit={hanldeSubmit} className="space-y-4">
                <div className="space-y-2">
                    <label htmlFor="username">Username:</label>
                    <input type="text" value={username} onChange={handleInputChange} id="username" className="p-3 border outline-none rounded focus-visible:ring-2 focus:ring-2"/>
                </div>
            </form>
        </div>
    )
}