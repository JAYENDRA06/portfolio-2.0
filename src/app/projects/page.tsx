import BrutalButton from "@/components/custom/button/brutalButton";
import SingleProject from "@/components/custom/projects/singleProject";
import { projects } from "@/lib/utils";
import { FigmaIcon, GithubIcon } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="p-5 lg:p-10 w-full">
      <main className="max-w-7xl mx-auto">
        <div className="flex justify-between flex-wrap">
          <h1 className="text-5xl font-bold mb-4">My Personal & Freelance <br />Development Projects</h1>
          <div className="flex items-center gap-6">
            <BrutalButton className="flex gap-2 items-center">Github<GithubIcon /></BrutalButton>
            <BrutalButton className="flex gap-2 items-center">Figma<FigmaIcon /></BrutalButton>
          </div>
        </div>
        <p className="text-gray-600">Feel free to drop some scalable full stack project suggestions <Link className="hover:underline text-black" href="mailto:jayendraawasthi0609@gmail.com">here</Link></p>
        <div className="mt-20">
          {projects.map((project, index) => (
            <SingleProject key={index} project={{ ...project, index }} />
          ))}
        </div>
      </main>
    </div>
  );
}