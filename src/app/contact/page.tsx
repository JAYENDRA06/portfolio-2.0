import Contact from "@/components/custom/contact/contact";
import Socials from "@/components/custom/socials";

export default function ContactPage() {
    return (
        <section id="contact" className="mt-5">
            <Contact />
            <div className="mt-10 flex justify-center">
                <Socials />
            </div>
        </section>
    );
}