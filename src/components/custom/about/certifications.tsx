"use client";

import React from "react";
import BrutalButton from "../button/brutalButton";
import { ArrowUpRightFromCircle, EyeClosedIcon } from "lucide-react";
import Link from "next/link";

export default function Certifications() {
    const [revealed, setRevealed] = React.useState(false);
    return (
        <div className="mt-20 flex justify-center">
            {revealed 
                ? <div>
                    <p className="bg-brutal-background p-5 rounded-lg lg:rounded-full mb-5">2nd position and best design team in VinHack 2023, Best design team Hackulus 2021</p>
                    <Link href="https://www.credly.com/badges/858d3881-95a0-4bd9-8da9-a1925c987bbb/public_url">
                        <p className="bg-black text-white p-5 rounded-lg lg:rounded-full flex items-center justify-center gap-3">I am an AWS Certified Solutions Architect - Associate <ArrowUpRightFromCircle /></p>
                    </Link>
                </div>
                : <BrutalButton className="flex item gap-3" onClick={() => setRevealed(true)}>Reveal Secret <EyeClosedIcon /> </BrutalButton>
            }
        </div>
    );
}