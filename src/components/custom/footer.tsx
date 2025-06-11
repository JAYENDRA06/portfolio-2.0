import Image from "next/image";

export default function Footer() {
    return (
        <footer
            className="p-5 bg-brutal-background flex justify-center items-center gap-2"
        >
            <p className="font-semibold max-w-7xl">made with my spidey dev senses</p>
            <Image
                src="/spiderWeb.svg"
                alt="Spidey image"
                width={40}
                height={40}
            />
        </footer>
    );
}