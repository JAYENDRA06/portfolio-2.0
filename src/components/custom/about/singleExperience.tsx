import { Experience } from "@/lib/types";
import BrutalCircleButton from "../button/brutalCircleButton";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function SingleExperience({ experience }: { experience: Experience }) {
    return (
        <div className="mt-10">
            <h2 className="text-2xl font-bold">{experience.company}</h2>
            <p className="text-sm text-gray-500">{experience.location}</p>
            {experience.details.map((detail, index) => (
                <div key={index} className="mt-5 flex items-stretch gap-5">
                    <div className="hidden lg:flex flex-col items-center">
                        <BrutalCircleButton><Check /></BrutalCircleButton>
                        <div className="w-px flex-1 bg-black my-1"></div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">{detail.position}</h3>
                        <p className="text-sm text-gray-600">
                            {detail.startDate} - {detail.endDate}
                        </p>
                        <p className="mt-5 text-justify" dangerouslySetInnerHTML={{ __html: detail.description }}></p>
                    </div>
                </div>
            ))}
            <div className="mt-5 flex flex-wrap gap-2 lg:gap-3 items-center">
                <strong>Tech Stack:</strong>
                {experience.techStack.map((tech, index) => (
                    <Badge key={index}>{tech}</Badge>
                ))}
            </div>
        </div>
    )
}