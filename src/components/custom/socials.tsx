import { socialLinks } from "@/lib/utils";
import Link from "next/link";
import BrutalCircleButton from "./button/brutalCircleButton";

export default function Socials() {
    return (
        <section id="socials">
            <div className="flex gap-3 lg:gap-8">
                {socialLinks.map((social, index) => (
                    <Link href={social.url} key={index} target="_blank">
                        <BrutalCircleButton style={{ padding: '10px' }}><social.icon /></BrutalCircleButton>
                    </Link>
                ))}
            </div>
        </section>
    );
}