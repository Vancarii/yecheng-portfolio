// import React from "react";

// const Projects: React.FC = () => {
//   return (
//     <>
//       <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
//         {/* <h1 className="text-3xl font-bold font-mono">Projects</h1> */}
//         <div className=" mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
//           <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
//           <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
//           <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
//           <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
//           <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
//             <img
//               src="/app-screenshots/stario7.jpg"
//               className="dark:hidden w-[272px] h-[572px]"
//               alt="Stario"
//             />
//             <img
//               src="/app-screenshots/stario7.jpg"
//               className="hidden dark:block w-[272px] h-[572px]"
//               alt="Stario"
//             />
//           </div>
//         </div>
//         <div className=" mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
//           <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
//             <img
//               src="/app-screenshots/whistlerBBT.png"
//               className="dark:hidden h-[156px] md:h-[278px] w-full rounded-lg"
//               alt=""
//             />
//             <img
//               src="/app-screenshots/whistlerBBT.png"
//               className="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg"
//               alt=""
//             />
//           </div>
//         </div>
//         <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
//           <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Projects;

import ProjectCard from "/components/ui/project-card.tsx";

const projects = [
  {
    title: "Whistler Bubble Tea Website",
    description:
      "A revamped website for a bubble tea shop in Whistler, BC, Canada.",
    imageUrl: "/app-screenshots/whistlerBBT.png",
    technologies: ["HTML", "CSS", "GoDaddy"],
    demoUrl: "https://whistlerbubbletea.ca",
    sourceUrl: "https://github.com/yourusername/task-manager",
  },
  {
    title: "Molu Finance",
    description:
      "A mobile application that allows users to finance second hand products.",
    imageUrl: "/app-screenshots/moluapp.png",
    technologies: ["Swift", "SwiftUI", "IN PROGRESS"],
    demoUrl: "",
    sourceUrl: "https://github.com/Vancarii/Molu",
  },
  {
    title: "Metro Vancouver 9-1-1 Report System",
    description:
      "A web application that allows users to report emergency incidents to 9-1-1 operators.",
    imageUrl: "/app-screenshots/911proj.png",
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "Node.js", "Shadcn"],
    demoUrl: "",
    sourceUrl: "https://github.com/ryotakc/cmpt272-project",
  },
  {
    title: "Business Beacon",
    description:
      "Built with a team of 4, Business Beacon is a web application that allows users to find local deals and events.",
    imageUrl: "/app-screenshots/businessbeacon.png",
    technologies: ["HTML", "CSS", "JavaScript", "Google Maps API", "Firestore"],
    demoUrl: "https://businessbeaconreal.web.app",
    sourceUrl: "https://github.com/AdamBahramiSchool/BusinessBeacon",
  },
  {
    title: "Tic-Tac-Toe Agent",
    description:
      "A Python script that uses the different pre-planning algorithms to play tic-tac-toe. Done as an assignment for CMPT310 at SFU.",
    imageUrl: "/app-screenshots/tictactoe.png",
    technologies: ["Python", "Git", "GitHub"],
    demoUrl: "",
    sourceUrl: "https://github.com/Vancarii/tic-tac-toe-agent",
  },
  {
    title: "Stario Music",
    description:
      "A flutter music application that focuses on helping artists monetize music with ads.",
    imageUrl: "/app-screenshots/stario7.jpg",
    technologies: ["Dart", "Flutter", "Pub Dev", "Git", "GitHub"],
    demoUrl: "",
    sourceUrl: "https://github.com/Vancarii/MeetPup",
  },
  {
    title: "MeetPup",
    description:
      "A flutter application that allows users to find dog parks and meet other dog owners.",
    imageUrl: "/app-screenshots/meetpup7.jpg",
    technologies: ["Dart", "Flutter", "Google Maps API", "Firebase", "Git"],
    demoUrl: "",
    sourceUrl: "https://github.com/Vancarii/MeetPup",
  },
  {
    title: "Archer's Escape",
    description:
      "A 2D platformer game built with Python and Pygame. One of my first projects ever made as I began my coding journey.",
    imageUrl: "/app-screenshots/archer1.png",
    technologies: ["Python", "Pygame", "Git", "GitHub"],
    demoUrl: "",
    sourceUrl: "https://github.com/Vancarii/archers-escape",
  },
  {
    title: "Self Driver - Colour Detection",
    description:
      "A Python script that detects colours of the map and directs the vehicle direction.",
    imageUrl: "/app-screenshots/self-driver.png",
    technologies: ["Python", "Pygame", "Git", "GitHub"],
    demoUrl: "",
    sourceUrl: "https://github.com/Vancarii/colour-detecting-driver",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
      {/* <h1 className="text-3xl font-bold mb-8">This page is in development</h1> */}
      <div className=" h-36"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <div className=" h-44"></div>
    </div>
  );
}
