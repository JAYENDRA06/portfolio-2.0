import { Project } from "@/lib/types";
import Image from "next/image";
import ArrowBrutalButton from "../button/arrowBrutalButton";
import BrutalCircleButton from "../button/brutalCircleButton";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function SingleProject({ project }: { project: Project }) {
    return (
        <div className={`flex items-center gap-20 w-full ${project.index! % 2 === 0 ? "flex-row" : "flex-row-reverse"} mb-20`}>
            <div className="w-1/2">
                <Image
                    src={project.imgSrc}
                    alt={project.title}
                    width={1800}
                    height={1000}
                    className="w-full object-cover rounded-lg mb-4 border-2 border-black shadow-[3px_3px_0_0_#000]"
                />
            </div>
            <div className="w-1/2">
                <h2 className="text-3xl font-bold mb-5">{project.title}</h2>
                <p className="text-gray-700 mb-4">{project.content}</p>
                <div className="flex flex-wrap gap-2 my-10">
                    {project.tags.map((tag, index) => (
                        <Badge key={index}>
                            {tag}
                        </Badge>
                    ))}
                </div>
                <div className="flex items-center gap-5">
                    <Link href={project.link}>
                        <ArrowBrutalButton />
                    </Link>
                    <BrutalCircleButton className="bg-white">
                        <GithubIcon />
                    </BrutalCircleButton>
                </div>
            </div>
        </div>
    );
}