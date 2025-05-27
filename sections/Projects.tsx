import TocaLifeBox from "@/assets/images/ava-01.png";
import ProgrammingSvg from "@/assets/images/courses_illustr-screen.svg";
import ProgrammingSvg2 from "@/assets/images/courses_illustr-screen2.svg";

import { ArrowUpRightIcon, CheckCircle2Icon } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    company: "Sago Mini",
    year: "2020",
    title: "Toca Life Box Store",
    results: [
      "Performance Optimization by 20%",
      "Enhanced User Experience",
      "Launched Toca Boca Shopify Store"
    ],
    link: "https://tocalifebox.com",
    image: ProgrammingSvg
  },
  {
    company: "Transfix",
    year: "2021",
    title: "Data Ingestion Pipelines",
    results: [
      "Bidding by 20%",
      "Enhanced Data Integrity",
      "Launched AutoBidders"
    ],
    link: "https://transfix.io",
    image: ProgrammingSvg
  },
  {
    company: "Scout Alarm",
    year: "2022",
    title: "IOT Dashboard",
    results: [
      "Security Monitoring",
      "Web Dashboard",
      "Mobile App"
    ],
    link: "https://transfix.io",
    image: ProgrammingSvg
  }
]

const Projects = () => {
  return (
    <div className="mb-48">
      <div className="container">
        <div className="flex justify-center mt-10 md:mt-14 lg:mt-24">
          <p className="uppercase text-xs md:text-sm lg:text-xl font-semibold tracking-widest bg-gradient-to-r from-muted-salmon to-petrol-blue text-transparent bg-clip-text">Real-world Results</p>
        </div>
        <h2 className="font-serif text-2xl md:text-4xl lg:text-6xl text-center mt-4 md:mt-6 text-pure-dark-gray/80">Featured Projects</h2>
        <p className="text-center text-xs md:text-sm lg:text-lg mx-auto max-w-md font-light tracking-wide text-pure-dark-gray/60 mt-4 md:mt-6">See how we transformed concepts into engaging and converting digital experiences</p>

        <div className="flex flex-col items-center mt-10 md:mt-14 lg:mt-20">
          <div className="flex flex-col w-full">
            {
              projects.map((project) => (
                <div key={project.title} className="bg-petrol-blue/60 rounded-3xl relative z-0
                overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0
                after:outline-2 after:outline after:-outline-offset-2
                after:rounded-3xl after:outline-muted-salmon/60
                after:cursor after:pointer-events-none
                px-6 lg:px-24 lg:pl-24 lg:pr-0 pt-8 md:pt-10 lg:pt-24 mb-10 lg:mb-20
                ">
                  <div className="lg:grid lg:grid-cols-3 lg:gap-32">
                    <div className="lg:pb-24 lg:col-span-2">
                      <div className="bg-gradient-to-r from-muted-salmon gap-2 
                      to-white/50 text-transparent bg-clip-text inline-flex font-bold
                      uppercase tracking-widest text-xs md:text-3xl
                      ">
                        <span>{project.company}</span>
                        <span>&bull;</span>
                        <span>{project.year}</span>
                      </div>
                  
                      <h3 className="font-serif font-light text-pure-dark-gray/80 text-xl md:text-4xl mt-2 md:mt-8">{project.title}</h3>
                      <hr className="border-t-2 border-light-sepia/20 mt-4 lg:w-5/6" />
                      <ul className="flex flex-col gap-4 md:gap-6 mt-6 md:mt-6">
                        {
                          project.results.map((result) => (
                            <li key={result} className="flex gap-4 md:gap-4 items-center text-pure-dark-gray/50 text-sm md:text-2xl font-light">
                              <CheckCircle2Icon className="size-4 md:size-8" />
                              <span>{result}</span>
                            </li>
                          ))
                        }
                      </ul>
                      <Link href={project.link} className="flex justify-center md:justify-start">
                        <button className="bg-light-sepia font-semibold h-10 w-full md:w-auto max-w-[600px] rounded-xl mt-6 md:mt-10 p-4 md:p-6 text-sm md:text-2xl
                        inline-flex items-center justify-center gap-1 md:gap-3">
                          <span>View Live Site</span>
                          <ArrowUpRightIcon className="text-petrol-blue w-5 h-5 md:w-10 md:h-10" />
                        </button>
                      </Link>
                    </div>
                    
                    <div className="lg:col-span-1">
                      <div className="inline-flex gap-0 items-center justify-center w-full lg:h-full lg:pb-0">
                        <Image src={project.image} alt={project.title} className="
                        w-full h-full" />
                        <Image src={ProgrammingSvg2} alt={project.title} className="
                        w-full h-full transform scale-x-[-1]" />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
