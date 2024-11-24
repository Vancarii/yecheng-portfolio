import React from "react";
import {
  Linkedin,
  Github,
  Instagram,
  Phone,
  Mail,
  FileText,
} from "lucide-react";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
      <h1 className="text-3xl font-bold font-mono">Contact Me</h1>
      <div className="flex space-x-4">
        <a
          href="https://www.linkedin.com/in/yecheng-wang"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-lg"
        >
          <Linkedin className="text-2xl text-white hover:text-gray-300" />
        </a>
        <a
          href="https://github.com/Vancarii"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-lg"
        >
          <Github className="text-2xl text-white hover:text-gray-300" />
        </a>
        <a
          href="https://www.instagram.com/yechengwang"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-lg"
        >
          <Instagram className="text-2xl text-white hover:text-gray-300" />
        </a>
        <a
          href="tel:+17786367881"
          className="p-2 bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-lg"
        >
          <Phone className="text-2xl text-white hover:text-gray-300" />
        </a>
        <a
          href="mailto:yechengofficial@gmail.com"
          className="p-2 bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-lg"
        >
          <Mail className="text-2xl text-white hover:text-gray-300" />
        </a>
        <a
          href="/path/to/your-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-lg"
        >
          <FileText className="text-2xl text-white hover:text-gray-300" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
