"use client";

import React, { useState, useEffect } from "react";

const About: React.FC = () => {
  const [spacerHeight, setSpacerHeight] = useState("50vh");

  useEffect(() => {
    const handleResize = () => {
      const newHeight = Math.min(
        window.innerHeight / 3,
        (50 * window.innerHeight) / 100
      );
      setSpacerHeight(`${newHeight}px`);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial height

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          Born and raised in <strong>Port Moody, BC,</strong> I developed a deep
          love for the outdoors, inspired by the lush landscapes around me. As a
          child, I had the privilege of traveling extensively, playing tennis
          competitively across Singapore, China, New Zealand, Indonesia,
          Malaysia, Ontario, and the United States. These experiences shaped my
          resilience, discipline, and adaptability. Eventually, I returned to BC
          and settled down for university, where I discovered my passion for
          Computing Science and technology.
        </h1>
        <h1 className="text-1xl font-mono text-center max-w-4xl mx-auto mt-4">
          When I’m not coding or designing, you’ll find me exploring the great
          outdoors. I’m passionate about mountain biking, tennis, camping,
          off-roading, bouldering, and snowboarding. These hobbies fuel my
          creativity and give me the balance to tackle challenges with a fresh
          perspective. Whether it’s navigating trails or problem-solving in
          code, I thrive on pushing limits and embracing adventure.
        </h1>
        {/* footer */}
        <div className="mt-35vh"></div>
      </div>
    </div>
  );
};

export default About;
