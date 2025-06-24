"use client";

import { SendIcon } from "lucide-react";
import BrutalCircleButton from "../button/brutalCircleButton";
import { sendMail } from "@/actions";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";

export default function ContactForm() {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);

        const formData = new FormData(e.currentTarget);
        const sender = (formData.get("name") as string)?.trim();
        const subject = (formData.get("email") as string)?.trim();
        const text = (formData.get("wish") as string)?.trim();

        // Basic validation
        if (!sender) {
            setError("Please enter your name.");
            return;
        }
        if (!subject || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(subject)) {
            setError("Please enter a valid email address.");
            return;
        }
        if (!text) {
            setError("Please enter your message.");
            return;
        }

        setLoading(true);
        try {
            const response = await sendMail({ sender, subject, text });
            if (response.success) {
                toast("Your message has been sent successfully!");
                formRef.current?.reset();
            } else {
                setError("Failed to send your message. Please try again later.");
            }
        } catch (err: any) {
            setError(err.message || "Failed to send your message. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    const inputClassName = "px-4 py-2 border-2 bg-white border-black rounded-lg";
    return (
        <form
            ref={formRef}
            className="relative text-left mt-14 flex flex-col gap-5 p-6 rounded-lg border-2 bg-brutal-background border-black shadow-[3px_3px_0_0_#000] max-w-xl mx-auto"
            onSubmit={handleSubmit}
        >
            <BrutalCircleButton
                className="bg-white absolute -top-3 -right-3"
                style={{ padding: "0.5rem" }}
                type="submit"
                disabled={loading}
            >
                {loading ? <Spinner show /> : <SendIcon size={30} />}
            </BrutalCircleButton>
            <div className="flex flex-col gap-2">
                <label className="font-semibold" htmlFor="name">Full Name</label>
                <input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    type="text"
                    className={inputClassName}
                    disabled={loading}
                />
            </div>
            <div className="flex flex-col gap-2">
                <label className="font-semibold" htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    type="email"
                    className={inputClassName}
                    disabled={loading}
                />
            </div>
            <div className="flex flex-col gap-2">
                <label className="font-semibold" htmlFor="wish">Your wish...</label>
                <textarea
                    id="wish"
                    name="wish"
                    placeholder="Anything you like to discuss with me..."
                    className={inputClassName}
                    rows={5}
                    disabled={loading}
                />
            </div>
            {error && (
                <div className="text-red-600 font-semibold text-sm mb-2">{error}</div>
            )}
        </form>
    );
}