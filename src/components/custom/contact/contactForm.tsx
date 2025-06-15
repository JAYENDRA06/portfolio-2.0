"use client";

import { SendIcon } from "lucide-react";
import BrutalCircleButton from "../button/brutalCircleButton";

export default function ContactForm() {
    const inputClassName = "px-4 py-2 border-2 bg-white border-black rounded-lg";
    return (
        <form className="relative text-left mt-14 flex flex-col gap-5 p-6 rounded-lg border-2 bg-brutal-background border-black shadow-[3px_3px_0_0_#000] max-w-xl mx-auto">
            <BrutalCircleButton className="bg-white absolute -top-3 -right-3" style={{ padding: "0.5rem" }}>
                <SendIcon size={30} />
            </BrutalCircleButton>
            <div className="flex flex-col gap-2">
                <label className="font-semibold">Full Name</label>
                <input placeholder="Your name" type="text" className={inputClassName} />
            </div>
            <div className="flex flex-col gap-2">
                <label className="font-semibold">Email</label>
                <input placeholder="Your Email" type="email" className={inputClassName} />
            </div>
            <div className="flex flex-col gap-2">
                <label className="font-semibold">Your wish...</label>
                <textarea placeholder="Anything you like to dicsuss with me..." className={inputClassName} rows={5} />
            </div>
        </form>
    )
}