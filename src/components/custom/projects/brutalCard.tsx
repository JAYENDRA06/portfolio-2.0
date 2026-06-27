import { ProjectLink } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import ArrowBrutalButton from "../button/arrowBrutalButton";
import BrutalCircleButton from "../button/brutalCircleButton";
import { GithubIcon } from "lucide-react";
import { ProjectLinkButtons } from "./projectLinkButtons";

export default function BrutalCard({
    className = "",
    imgSrc,
    title,
    description,
    link,
    github,
    otherLinks,
}: {
    className?: string;
    imgSrc: string;
    title: string;
    description: string;
    link: string;
    github?: string;
    otherLinks?: ProjectLink[];
}) {
    return (
        <div
            className={`bg-white rounded-lg p-6 shadow-lg border-2 border-black ${className}`}
        >
            <Image
                width={500}
                height={300}
                src={imgSrc}
                alt={title}
                className="w-full h-48 object-cover rounded-t-lg mb-4 border-2 border-black shadow-[3px_3px_0_0_#C8F030]"
            />
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-gray-700 mb-4">{description}</p>
            <div className="flex justify-between items-center">
                <Link href="/projects">Learn more</Link>
                <div className="flex items-center gap-5">
                    <Link href={link} target="_blank">
                        <ArrowBrutalButton />
                    </Link>
                    <ProjectLinkButtons links={otherLinks} />
                    {github && (
                        <Link href={github} target="_blank">
                            <BrutalCircleButton className="bg-white">
                                <GithubIcon />
                            </BrutalCircleButton>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
