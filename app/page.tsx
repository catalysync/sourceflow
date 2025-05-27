import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Services from "@/sections/Services";


export default function Home() {
  return <>
    {/* HEADER + HERO WRAPPER */}
    <div className="section banner  mt-0">
      <div className="container">
        <Header />
        <Hero />
      </div> 
    </div>

    <Services />
    <Projects />
  </>
}