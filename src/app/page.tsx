import About from "@/components/custom/about";
import Contact from "@/components/custom/contact/contact";
import Experience from "@/components/custom/experienceHero";
import Hero from "@/components/custom/hero";
import MarqueeText from "@/components/custom/marquee";
import { ProjectsCarousel } from "@/components/custom/projects/projectsCarousel";

export default async function Home() {
  return (
    <>
      <Hero />
      <MarqueeText text="SOFTWARE DEVELOPER, FRONTEND, BACKEND, GO LANG, NEXTJS, REACTJS, C++, ASP.NET, DESIGNER" />
      <About />
      <Experience />
      <ProjectsCarousel />
      <Contact />
    </>
  );
}
