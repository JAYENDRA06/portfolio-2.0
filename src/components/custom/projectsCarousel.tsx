import { getProjects } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import BrutalButton from "./brutalButton";
import BrutalCard from "./brutalCard";
import Image from "next/image";

export function ProjectsCarousel() {
    return (
        <section id="projects" className="bg-brutal-background w-full px-5 lg:px-10">
            <div className="max-w-7xl mx-auto py-10 flex items-center justify-between gap-10 group" >
                <Image
                    src="/gear.svg"
                    alt="Gear image"
                    width={200}
                    height={200}
                    className="transition-transform duration-300 group-hover:rotate-10  hidden lg:block"
                />
                <div className="flex flex-col lg:items-center">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-4">Project Showcase</h2>
                    <p className="lg:text-lg mb-4">Explore some of my recent projects below</p>
                    <Carousel
                        opts={{
                            loop: true
                        }}
                        className="w-full max-w-md my-8"
                    >
                        <CarouselContent>
                            {getProjects().map((data, index) => (
                                <CarouselItem key={index}>
                                    <BrutalCard {...data} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden lg:flex" />
                        <CarouselNext className="hidden lg:flex" />
                    </Carousel>
                    <BrutalButton className="bg-white">Project details</BrutalButton>
                </div>
                <Image
                    src="/gear.svg"
                    alt="Gear image"
                    width={200}
                    height={200}
                    className="transition-transform duration-300 group-hover:rotate-10 hidden lg:block"
                />
            </div >

        </section >
    );
}