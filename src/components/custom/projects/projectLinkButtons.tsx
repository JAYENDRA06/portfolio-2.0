import { ProjectLink, ProjectLinkType } from "@/lib/types";
import { Apple, Figma, Globe, Play, type LucideIcon } from "lucide-react";
import Link from "next/link";
import BrutalCircleButton from "../button/brutalCircleButton";

const linkConfig: Record<ProjectLinkType, { label: string; icon: LucideIcon }> = {
    appstore: { label: "App Store", icon: Apple },
    playstore: { label: "Play Store", icon: Play },
    figma: { label: "Figma", icon: Figma },
    website: { label: "Website", icon: Globe },
};

export function ProjectLinkButtons({ links }: { links?: ProjectLink[] }) {
    if (!links?.length) return null;

    return (
        <>
            {links.map((link) => {
                const { label, icon: Icon } = linkConfig[link.type];
                return (
                    <Link key={`${link.type}-${link.url}`} href={link.url} target="_blank" title={label}>
                        <BrutalCircleButton className="bg-white" aria-label={label}>
                            <Icon className="h-5 w-5" />
                        </BrutalCircleButton>
                    </Link>
                );
            })}
        </>
    );
}
