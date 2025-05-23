"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { FileUser } from "lucide-react";

const Bottombar: React.FC = () => {
  const openResumeTab = () => {
    window.open("/resume/YechengWang-Resume.pdf", "_blank");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="flex justify-between items-end p-8">
        <Button
          variant="ghost"
          size="icon"
          onClick={openResumeTab}
          className="p-4 bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-lg"
        >
          <FileUser />
        </Button>
        <h1 className="  text-sm text-slate-300">
          &copy; 2023 Yecheng Wang. All Rights Reserved.
        </h1>
      </div>
    </div>
  );
};

export default Bottombar;
