import Certifications from "@/components/custom/about/certifications";
import Experience from "@/components/custom/about/experience";
import BrutalButton from "@/components/custom/button/brutalButton";
import { Badge } from "@/components/ui/badge";
import { resumeLink, skils } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default async function About() {
    return (
        <div className="px-5 lg:px-10">
            <main className="max-w-7xl mx-auto my-14">
                <div className="flex flex-col lg:flex-row items-center gap-10 mb-15">
                    <div>
                        <div className="flex flex-wrap items-center gap-10">
                            <h1 className="text-3xl lg:text-4xl font-bold">About Me</h1>
                            <Link href={resumeLink} target="_blank">
                                <BrutalButton>View Resume</BrutalButton>
                            </Link>
                        </div>
                        <p className="text-gray-700 text-lg lg:text-xl text-justify mt-10">
                            {`Hello, I'm Jayendra Awasthi, a passionate software developer with a love for creating innovative solutions and delightful user experiences. 
                            With a background in full-stack development, I enjoy building scalable applications that solve real-world problems. My expertise spans across various technologies, allowing me to adapt and learn quickly.
                            When I'm not coding, you can find me exploring new design trends, solving DSA questions, or sharing knowledge with the community.`}
                        </p>
                    </div>
                    <Image alt="about img" src="/heroImg.png" height={350} width={350} />
                </div>
                <div>
                    <h1 className="text-4xl font-bold mb-5">Skills</h1>
                    <div className="flex flex-wrap gap-2 lg:gap-3">
                        {skils.map((skill, index) => (
                            <Badge key={skill + index} className="lg:text-lg font-semibold">{skill}</Badge>
                        ))}
                    </div>
                </div>
                <Experience />
                <Certifications />
            </main>
        </div>
    );
}