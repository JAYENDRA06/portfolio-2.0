import Image from "next/image";
import BrutalButton from "./brutalButton";

export default function Hero() {
    return (
        <div className="px-5 lg:px-10">
            <div className="flex items-center justify-between gap-30 max-w-7xl">
                <Image
                    src="/heroLeft.svg"
                    alt="Hero Left Image"
                    width={200}
                    height={200}
                    className="hidden lg:block w-[200px] h-[200px] animate-float1"
                />
                <main className="flex flex-col gap-[35px] lg:text-center max-w-2xl mb-2 lg:mb-5 my-14">
                    <p className="text-lg lg:text-xl font-semibold">{"Hello, I'm Jayendra Awasthi 👋🏻"}</p>
                    <h1 className="text-4xl lg:text-6xl font-bold">Software Developer and Designer</h1>
                    <p className="text-gray-700 lg:text-lg">
                        {"Your friendly neighborhood software engineer, passionate about building innovative solutions and creating delightful user experiences."}
                    </p>
                    <div className="flex lg:justify-center gap-4 mt-6">
                        <BrutalButton>View Resume</BrutalButton>
                        <BrutalButton className="bg-white">Get In Touch</BrutalButton>
                    </div>
                </main>
                <Image
                    src="/heroRight.svg"
                    alt="Hero Right Image"
                    width={200}
                    height={200}
                    className="hidden lg:block w-[200px] h-[200px] animate-float2"
                />
            </div>
        </div>
    );
}