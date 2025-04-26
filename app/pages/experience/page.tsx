"use client";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    title: "Mobile Application Developer Intern",
    company: "Biointeractive Technologies Inc. (Tenzr Health)",
    duration: "May 2025 - Present",
    description: "",
    logo: "/company-logos/tenzr.png",
  },
  {
    title: "AI Coding Instructor",
    company: "Summit Middle School (School District 43 Coquitlam)",
    duration: "Jan 2025 - April 2025",
    description:
      "Taught students the fundamentals of coding and AI through hands-on projects. Developed curriculum and lesson plans to engage students in learning.",
    logo: "/company-logos/sd43.jpg",
  },
  {
    title: "Sales Associate",
    company: "Trek Bicycle Burnaby",
    duration: "March 2022 - October 2022",
    description:
      "Assisted customers in selecting bicycles and accessories. Provided excellent customer service and maintained store appearance.",
    logo: "/company-logos/trek.png",
  },
  {
    title: "Dog Walker and Driver",
    company: "Dogs Crossing: Dog Training and Pet Services",
    duration: "August 2021 - March 2022",
    description:
      "Provided dog walking and pet care services. Ensured the safety and well-being of pets during walks and transportation.",
    logo: "/company-logos/dogscrossing.jpeg",
  },
];

export default function ExperiencesPage() {
  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen p-4 md:p-8">
      <div className="mt-24 w-full flex flex-col items-center">
        <motion.h1
          className="text-3xl md:text-4xl font-bold font-mono text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Experiences
        </motion.h1>
      </div>

      <div className="relative w-full max-w-4xl">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-white/20 md:transform md:-translate-x-1/2"></div>

        {/* Timeline Items */}
        <div className="flex flex-col space-y-16 ml-6 md:ml-0">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col ${
                index % 2 === 0 ? "md:items-end" : "md:items-start"
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Connector Dot */}
              <div className="absolute left-[-24px] md:left-1/2 top-7 md:transform md:-translate-x-1/2 w-5 h-5 bg-white/80 rounded-full border-2 border-white/20 shadow-glow z-10"></div>

              {/* Date on the opposite side of the card */}
              <div
                className={`hidden md:flex absolute top-5 items-center gap-2 text-sm font-medium text-white/90 bg-white/10 backdrop-blur-sm py-1 px-3 rounded-full border border-white/20 z-20 ${
                  index % 2 === 0
                    ? "right-[calc(50%+20px)]"
                    : "left-[calc(50%+20px)]"
                }`}
              >
                {experience.duration}
              </div>

              {/* Content */}
              <div
                className={`relative w-full md:w-[calc(50%-40px)] p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/15 transition-all duration-300 group z-10`}
              >
                {/* Company Logo */}
                <div className="flex justify-center mb-4">
                  <div className="relative h-32 w-full overflow-hidden flex items-center justify-center">
                    <Image
                      src={experience.logo || "/placeholder.svg"}
                      alt={`${experience.company} logo`}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>

                <h2 className="text-xl font-semibold flex items-center gap-2">
                  {experience.title}
                </h2>
                <h3 className="text-med text-white mt-1 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-slate-200" />
                  {experience.company}
                </h3>

                {/* Mobile-only date display */}
                <p className="text-sm text-white mt-1 flex items-center gap-2 md:hidden">
                  {experience.duration}
                </p>

                <p className="mt-4 text-sm leading-relaxed">
                  {experience.description}
                </p>
                {/* <div className="mt-4 flex justify-end">
                  <button className="text-sm text-slate-300 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View details <ArrowRight className="w-3 h-3" />
                  </button>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Spacer */}
      <div className="h-24"></div>
    </div>
  );
}
