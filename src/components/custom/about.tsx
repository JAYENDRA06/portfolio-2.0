import Image from "next/image";


export default function About() {
    return (
        <section id="about" className="px-5 lg:px-10">
            <div className="max-w-7xl text-left">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
                    <div>
                        <h1 className="text-3xl lg:text-5xl font-bold mb-15">With Great Power<br /> Comes Great Responsibility</h1>
                        <p className="lg:text-lg font-semibold text-gray-600">{"Sadly, I don't have any super powers but there's one thing I'm pretty responsible of, thats is making production ready full stack applications following best coding practices"}</p>
                    </div>
                    <Image alt="about img" src="/heroImg.png" height={350} width={350} />
                </div>
            </div>
        </section>
    );
}