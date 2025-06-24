import { experiences } from "@/lib/utils";
import SingleExperience from "./singleExperience";

export default function Experience() {
    return (
        <div className="mt-20">
            <h1 className="text-4xl font-bold">Experience</h1>
            <div className="flex flex-wrap gap-2 lg:gap-3">
                {experiences.map(exp => <SingleExperience key={exp.company} experience={exp} />)}
            </div>
        </div>
    )
}