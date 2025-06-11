import Image from "next/image";
import ContactForm from "./contactForm";

export default function Contact() {
    return (
        <section id="contact" className="px-5 lg:px-10">
            <div className="max-w-7xl flex items-center justify-between gap-20">
                <Image
                    src="/heroRight.svg"
                    alt="Contact left svg"
                    width={200}
                    height={200}
                    className="hidden md:block w-[200px] h-[200px] -scale-x-100 animate-float1"
                />
                <div className="lg:text-center">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-4">Get in Touch</h2>
                    <p className="lg:text-lg mb-6">You give me the idea, I make it happen!! <br />We could also have a chat about thriller movies and anime if you want 😉</p>
                    <ContactForm />
                </div>
                <Image
                    src="/heroLeft.svg"
                    alt="Contact right Image"
                    width={200}
                    height={200}
                    className="hidden md:block w-[200px] h-[200px] -scale-x-100 animate-float2"
                />
            </div>
        </section>
    );
}