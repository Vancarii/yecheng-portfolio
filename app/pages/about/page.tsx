"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface InterestCard {
  title: string;
  imageUrl: string;
}

const About: React.FC = () => {
  const [spacerHeight, setSpacerHeight] = useState("50vh");

  useEffect(() => {
    const handleResize = () => {
      const newHeight = Math.min(
        window.innerHeight / 3,
        (50 * window.innerHeight) / 100,
      );
      setSpacerHeight(`${newHeight}px`);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Define interest cards
  const interestCards: InterestCard[] = [
    {
      title: "Mountain Biking",
      imageUrl: "/images/moonbooter-hor.jpeg",
    },
    {
      title: "girlfriend",
      imageUrl: "/images/babes.JPG",
    },
    {
      title: "bobo",
      imageUrl: "/images/bobo.jpg",
    },
    {
      title: "meme",
      imageUrl: "/images/meme-2.jpg",
    },
    {
      title: "tennis",
      imageUrl: "/images/tennis.JPG",
    },
    {
      title: "snowboard",
      imageUrl: "/images/snowboard.jpg",
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen p-4">
      <div className="mt-35vh w-full flex flex-col items-center">
        <h1 className="text-1xl font-mono text-center max-w-4xl mx-auto">
          A third year <strong>Computing Science Major</strong> and{" "}
          <strong>Cognitive Science Minor</strong> at the{" "}
          <strong>Simon Fraser University,</strong> bridging the gap between
          technology and human interaction. I specialize in building effective
          mobile and web platforms as well as combining Neuroscience with
          Machine Learning, leveraging my understanding of both the technical
          and cognitive aspects of user experience. My interdisciplinary
          background allows me to design solutions that are not only functional
          but deeply intuitive, piecing together how humans and computers
          connect.
        </h1>
        <div className="mt-8">
          <svg
            className="animate-bounce w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>
      {/* Spacer div to adjust height dynamically */}
      <div style={{ height: spacerHeight }}></div>
      {/* body below the intro text and arrow */}
      <div className="min-h-screen w-full flex flex-col items-center">
        <h1 className="text-1xl font-mono text-center max-w-4xl mx-auto">
          Born in Singapore and raised in <strong>Port Moody, BC,</strong> I
          developed a deep love for the outdoors, inspired by the lush
          landscapes around me. As a child, I had the privilege of traveling
          extensively, playing tennis competitively across Singapore, China, New
          Zealand, Indonesia, Malaysia, Ontario, and the United States. These
          experiences shaped my resilience, discipline, and adaptability.
          Eventually, I returned to BC and settled down for university, where I
          discovered my passion for Computing Science and technology.
        </h1>
        <h1 className="text-1xl font-mono text-center max-w-4xl mx-auto mt-4">
          When I&apos;m not coding or designing, you&apos;ll find me exploring
          the great outdoors. I&apos;m passionate about mountain biking, tennis,
          camping, off-roading, bouldering, and snowboarding. These hobbies fuel
          my creativity and give me the balance to tackle challenges with a
          fresh perspective. Whether it&apos;s navigating trails or
          problem-solving in code, I thrive on pushing limits and embracing
          adventure.
        </h1>

        {/* Interest Cards Section */}
        <div className="mt-48 w-full max-w-6xl">
          {/* <h2 className="text-2xl font-bold text-center mb-8">
            Interests & Activities
          </h2> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {interestCards.map((card, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={card.imageUrl}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                {/* <div className="p-4"> */}
                {/* <h3 className="text-lg font-semibold mb-2">{card.title}</h3> */}
                {/* <p className="text-sm">{card.description}</p> */}
                {/* </div> */}
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-48 w-full max-w-6xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "C",
              "C++",
              "Python",
              "HTML/CSS",
              "JavaScript",
              "TypeScript",
              "Swift",
              "Dart",
              ".NET MAUI",
              "Git",
              "GitHub",
              "VS Code",
              "Xcode",
              "Jupyter Notebook",
              "React",
              "Node.js",
              "Tailwind CSS",
              "Firebase",
              "Flutter",
              "SwiftUI",
              "SQLite",
              "Docker",
              "Postman",
              "Figma",
            ].map((skill, index) => (
              <div
                key={index}
                className="p-3 text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/15 transition-all duration-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-48 w-full max-w-6xl">
          {/* <h2 className="text-2xl font-bold text-center mb-8">Education</h2> */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <h3 className="text-xl font-semibold">
                  Simon Fraser University
                </h3>
                <p className="text-lg">
                  BSc Computing Science, Minor in Cognitive Science
                </p>
              </div>
              <p className="text-lg">2022 - Present</p>
            </div>
            <div className="mt-4">
              <p>Dean&apos;s Honour Roll (Fall 2024, Spring 2025)</p>
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="mt-20"></div>
      </div>
    </div>
  );
};

export default About;
