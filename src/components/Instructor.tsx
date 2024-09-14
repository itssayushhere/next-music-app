"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Vocal Coach",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Guitar Instructor",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Award winner Drumer",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "Piano Instructor",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Music composer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];
const Instructor = () => {
  return (
    <div className=" relative min-h-screen overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full space-y-20">
        <div className="flex flex-col w-full items-center justify-center">
          <h1 className="  text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Meet our Instructors
          </h1>
          <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto text-center">
            Discover the talented professionals who will guide you musical
            journey
          </p>
        </div>
        <div className="flex flex-row items-center justify-center m-4">
          <AnimatedTooltip items={people} />
        </div>
      </WavyBackground>
    </div>
  );
};

export default Instructor;
