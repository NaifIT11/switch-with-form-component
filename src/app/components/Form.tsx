"use client"

import { useState } from "react"


export default function Form(){

    const [name , setName] = useState('');
    const [marketingEmails , setMarketingEmails] = useState(false);
    function hanldeSubmit(){

    }

    return (
        <div className="space-y-4 p-4 rounded border">
            <div className="space-y-2">
                <h1 className="text-xl">Form</h1>
                <p className="text-sm">please choose and enter data</p>
            </div>
            <form onSubmit={hanldeSubmit} className="space-y-4">
                
            </form>
        </div>
    )
}