import ProjectCard from "@/components/project-card";

const projects = [
  {
    title: "Whistler Bubble Tea",
    description:
      "A revamped website for a bubble tea shop in Whistler, BC, Canada.",
    imageUrl: "/app-screenshots/whistlerBBT.png",
    technologies: ["HTML", "CSS", "GoDaddy"],
    demoUrl: "https://whistlerbubbletea.ca",
    sourceUrl: "",
  },
  {
    title: "GitGPT: OpenAI Code Assistant",
    description:
      "A React Native mobile application deployed on Vercel for a mobile simulator.",
    imageUrl: "/app-screenshots/gitgpt.png",
    technologies: ["NodeJS", "Expo", "OpenAI API"],
    demoUrl: "https://gitgpt-amber.vercel.app",
    sourceUrl: "https://github.com/Vancarii/gitgpt",
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
    title: "OpenAI Web Scraper and Lead Generation",
    description:
      "Streamlit-based web application designed to help users generate leads by finding business websites and extracting verified email addresses. ",
    imageUrl: "/app-screenshots/scraper.jpeg",
    technologies: ["Streamlit", "Python", "Pandas", "Open AI"],
    demoUrl: "",
    sourceUrl: "https://github.com/Vancarii/gpt-web-scraper",
  },
  {
    title: "Tic-Tac-Toe AI Agents",
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
    imageUrl: "/app-screenshots/stario7.JPG",
    technologies: ["Dart", "Flutter", "Pub Dev", "Git", "GitHub"],
    demoUrl: "",
    sourceUrl: "https://github.com/Vancarii/stario",
  },
  {
    title: "MeetPup",
    description:
      "A flutter application that allows users to find dog parks and meet other dog owners.",
    imageUrl: "/app-screenshots/meetpup7.JPG",
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
