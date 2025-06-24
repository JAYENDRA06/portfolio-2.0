import Link from "next/link";
import { Badge } from "../ui/badge";
import ArrowBrutalButton from "./button/arrowBrutalButton";
import { skils } from "@/lib/utils";

export default function Experience() {
    return (
        <section id="experience" className="px-5 lg:px-10">
            <div className="max-w-7xl text-left">
                <h1 className="text-2xl font-bold mb-5">Skills</h1>
                <div className="flex flex-wrap gap-2 lg:gap-3">
                    {skils.map((skill, index) => (
                        <Badge key={skill + index} className="lg:text-lg font-semibold">{skill}</Badge>
                    ))}
                </div>
                <div className="flex items-center gap-15 mt-15">
                    <Link href="/about">
                        <div className="flex items-center gap-2 cursor-pointer">
                            <p className="text-lg font-semibold underline underline-offset-3">Experience</p>
                            <ArrowBrutalButton />
                        </div>
                    </Link>
                    <Link href="/projects">
                        <div className="flex items-center gap-2 cursor-pointer">
                            <p className="text-lg font-semibold underline underline-offset-3">Projects</p>
                            <ArrowBrutalButton />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}