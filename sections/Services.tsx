
import programmingSvg from "@/assets/images/courses_illustr-screen.svg";
import programmingSvg2 from "@/assets/images/courses_illustr-screen2.svg";
import SeoSvg from "@/assets/images/courses_illustr-graph.svg";
import SeoSvg2 from "@/assets/images/courses_illustr-graph2.svg";
import DesignSvg from "@/assets/images/courses_illustr-clock.svg";


import Image from "next/image";
import Link from "next/link";
const Services = () => {
  return (
    <div className="bg-[url('/bg_courses.svg')] bg-no-repeat bg-cover bg-center rounded-[50px] py-24">
      <div className="container">
        <div className="
            flex flex-col xl:flex-row
            gap-7 text-center xl:text-left
            items-center justify-between mx-auto
            text-white
            max-w-[800px] lg:max-w-full
          ">
          <h3 className="font-bold text-2xl md:text-5xl">
            Professional courses on creating websites
          </h3>

          <p className="text-sm md:text-xl opacity-70 max-w-[520px]">
            Our courses are complete professional courses of high quality that
            include a set of video lessons, practical and training materials.
          </p>
        </div>

        <div className="grid gap-10 lg:gap-8 xl:grid-cols-3 mt-10 lg:mt-14">
          <div className="
            relative flex flex-col
            gap-4 justify-between max-w-[500px]
            sm:min-h-[400px] xl:min-h-[400px]
            xl:max-w-full bg-light-sepia
            min-h-80 px-8 mx-auto overflow-hidden z-[2]
            rounded-[40px]
            group
          ">
            <div className="mt-10 relative z-[1]">
              <h4 className="mb-4 text-2xl tracking-normal uppercase">design</h4>

              <h3 className="mb-0">
                How to make a quality site in WordPress in 40 hours without
                experience
              </h3>
            </div>

            <Link href="#" className="
                pr-8 text-petrol-blue text-xl
                tracking-[0.01em] uppercase font-light
                bg-[url('/ico_arrow-blue.svg')]
                bg-no-repeat bg-[right_50%] self-start transition-all duration-200
                mb-12 z-[3]
              ">
              Read more
            </Link>

            <div className="absolute hidden sm:block right-0 bottom-0 z-[1]">
              <div className="relative">
                <div className="hr-hand"></div>
                <Image
                  src={DesignSvg}
                  alt=""
                />
              </div>
            </div>

            <div className="
              hidden absolute -left-24 top-auto right-auto -bottom-24 h-0 w-0
              bg-white rounded-[1000px] will-change-[width_height] transition-all
              duration-300 ease-in-out z-0 lg:block
              group-hover:h-[700px] group-hover:w-[700px]
            "></div>
          </div>

          <div className="
            relative flex flex-col
            gap-4 justify-between max-w-[500px]
            min-h-80 sm:min-h-[400px] xl:min-h-[400px]
            xl:max-w-full bg-light-sepia
            px-8 mx-auto overflow-hidden z-[2]
            rounded-[40px]
            group
          ">
            <div className="mt-10 relative z-[1]">
              <h4 className="mb-4 text-2xl tracking-normal uppercase">programming</h4>

              <h3 className="mb-0">
                WordPress: How to start in a developer without any basic
                knowledge
              </h3>
            </div>

            <Link href="#" 
              className="
                pr-8 text-petrol-blue text-xl
                tracking-[0.01em] uppercase font-light
                bg-[url('/ico_arrow-blue.svg')]
                bg-no-repeat bg-[right_50%] self-start transition-all duration-200
                mb-12 z-[3]
              ">
              Read more
            </Link>

            <div className="absolute hidden sm:block right-0 bottom-0 z-[1]">
              <div className="relative">
                <Image
                  src={programmingSvg}
                  alt=""
                />

                <Image
                  src={programmingSvg2}
                  className="absolute bottom-0 right-0 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                  alt=""
                />
              </div>
            </div>

            <div className="
              hidden absolute -left-24 top-auto right-auto -bottom-24 h-0 w-0
              bg-white rounded-[1000px] will-change-[width_height] transition-all
              duration-300 ease-in-out z-0 lg:block
              group-hover:h-[700px] group-hover:w-[700px]
            ">

            </div>
          </div>

          <div className="
            relative flex flex-col
            gap-4 justify-between max-w-[500px]
            min-h-80 sm:min-h-[400px] xl:min-h-[400px]
            xl:max-w-full bg-light-sepia
            px-8 mx-auto overflow-hidden z-[2]
            rounded-[40px]
            group
          ">
            <div className="mt-10 relative z-[1]">
              <h4 className="mb-4 text-2xl tracking-normal uppercase">seo</h4>

              <h3 className="mb-0">
                Creating dynamic sites with CMS WordPress + SEO for WordPress
                websites
              </h3>
            </div>

            <Link href="#" className="
                pr-8 text-petrol-blue text-xl
                tracking-[0.01em] uppercase font-light
                bg-[url('/ico_arrow-blue.svg')]
                bg-no-repeat bg-[right_50%] self-start transition-all duration-200
                mb-12 z-[3]
              ">
              Read more
            </Link>

            <div className="absolute hidden sm:block right-0 bottom-0 z-[1]">
              <div className="relative">
                <Image
                  src={SeoSvg2}
                  className="absolute bottom-0 right-0 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                  alt=""
                />

                <Image
                  src={SeoSvg}
                  alt=""
                />
              </div>
            </div>

            <div className="
              hidden absolute -left-24 top-auto right-auto -bottom-24 h-0 w-0
              bg-white rounded-[1000px] will-change-[width_height] transition-all
              duration-300 ease-in-out z-0 lg:block
              group-hover:h-[700px] group-hover:w-[700px]
            "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
