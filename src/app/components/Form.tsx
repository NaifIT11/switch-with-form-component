"use client"

import { useState } from "react"


export default function Form(){

    const [name , setName] = useState('');
    const [marketingEmails , setMarketingEmails] = useState(false);
    function hanldeSubmit(){

    }

    return (
        <form onSubmit={hanldeSubmit} className="space-y-4">

        </form>
    )
}