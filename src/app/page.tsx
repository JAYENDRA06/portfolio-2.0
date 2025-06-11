import About from "@/components/custom/about";
import Contact from "@/components/custom/contact";
import Experience from "@/components/custom/experience";
import Hero from "@/components/custom/hero";
import MarqueeText from "@/components/custom/marquee";
import { ProjectsCarousel } from "@/components/custom/projectsCarousel";

export default async function Home() {
  return (
    <>
      <Hero />
      <MarqueeText text="SOFTWARE DEVELOPER, FRONTEND, BACKEND, NEXTJS, REACTJS, C++, ASP.NET, DESIGNER" />
      <About />
      <Experience />
      <ProjectsCarousel />
      <Contact />
    </>
  );
}
