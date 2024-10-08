"use client";

import { useState } from "react";

export default function Form() {
  const [username, setUsername] = useState("");
  const [marketingEmails, setMarketingEmails] = useState(false);
  function hanldeSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  function handleInputChange(e: React.FormEvent<HTMLInputElement>) {
    setUsername(e.currentTarget.value);
  }
  function handleSwitchChange(){
    if(marketingEmails){
        setMarketingEmails(false)
    }else{
        setMarketingEmails(true)
    }
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
          <input
            type="text"
            value={username}
            onChange={handleInputChange}
            id="username"
            className="p-3 border outline-none rounded focus-visible:ring-2 focus:ring-2"
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="username">Marketing Emails:</label>
          <button className="h-6 w-11 focus-visible:ring-2 rounded-full p-1 bg-gray-100" role="switch" aria-label="Switch Control" aria-checked={marketingEmails} onClick={handleSwitchChange}>
            <div className="w-4 h-4 rounded-full bg-black"></div>
          </button>
        </div>
      </form>
    </div>
  );
}
