import { Badge } from "../ui/badge";
import ArrowBrutalButton from "./arrowBrutalButton";

export default function Experience() {
    const skils = [
        "Full Stack Development",
        "UI/UX Design",
        "Version Control (Git)",
        "Problem Solving",
        "Next.js",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "SQL",
        "ASP.NET",
        "C++",
    ];

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
                    <div className="flex items-center gap-2 cursor-pointer">
                        <p className="text-lg font-semibold underline underline-offset-3">Experience</p>
                        <ArrowBrutalButton />
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <p className="text-lg font-semibold underline underline-offset-3">Projects</p>
                        <ArrowBrutalButton />
                    </div>
                </div>
            </div>
        </section>
    )
}