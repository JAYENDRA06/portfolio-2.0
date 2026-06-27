"use client";

import React from "react";
import BrutalButton from "../button/brutalButton";
import { AwardIcon, EyeClosedIcon } from "lucide-react";
import Link from "next/link";

const achievements = [
    {
        text: "2nd Place + Best Design — VinHack 2023 (DOC-UDI)",
        href: null,
        variant: "background" as const,
    },
    {
        text: "AWS Certified Solutions Architect - Associate",
        href: "https://www.credly.com/badges/858d3881-95a0-4bd9-8da9-a1925c987bbb/public_url",
        variant: "dark" as const,
    },
    {
        text: "C# .NET Core 8 with MS SQL — Complete Beginner to Master (2023)",
        href: null,
        variant: "background" as const,
    },
];

export default function Certifications() {
    const [revealed, setRevealed] = React.useState(false);
    return (
        <div className="mt-20 flex justify-center">
            {revealed
                ? <div className="flex flex-col gap-5 w-full max-w-3xl">
                    {achievements.map((item) => {
                        const content = (
                            <p className={`p-5 rounded-lg lg:rounded-full flex items-center justify-center gap-3 text-center ${item.variant === "dark" ? "bg-black text-white" : "bg-brutal-background"}`}>
                                <AwardIcon className="shrink-0" />
                                {item.text}
                            </p>
                        );

                        return item.href
                            ? <Link key={item.text} href={item.href} target="_blank">{content}</Link>
                            : <div key={item.text}>{content}</div>;
                    })}
                </div>
                : <BrutalButton className="flex item gap-3" onClick={() => setRevealed(true)}>Reveal Secret <EyeClosedIcon /> </BrutalButton>
            }
        </div>
    );
}
