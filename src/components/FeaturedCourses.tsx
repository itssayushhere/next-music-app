"use client";
import React from "react";
import courseData from "../data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}
const FeaturedCourses = () => {
  const FeaturedCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 ">
      <div className="">
        <div className="text-center">
          <h2 className=" text-[14px] text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2  text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 tracking-widest">
            Learn with the Best
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {FeaturedCourses.map((course: Course) => (
              <div className="flex justify-center" key={course.id}>
                <BackgroundGradient className="flex flex-col rounded-[22px] max-w-sm overflow-hidden bg-white dark:bg-zinc-900 h-full">
                  <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                    <Image
                      src={course.image} // Direct path from public directory, e.g., "/courses/guitar.jpg"
                      alt={course.title}
                      width={500}
                      height={300}
                      layout="responsive" // Ensures responsiveness
                    />
                    <h1 className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                      {course.title}
                    </h1>
                    <h1 className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow mb-4">
                      {course.description}
                    </h1>
                    <Link href={`/coursed/${course.slug}`} className="">
                      <h1 className=" border rounded-2xl border-white/10 px-3 py-1 transform transition duration-300 bg-clip-text bg-gradient-to-tl from-black via-white to-purple-900 text-transparent hover:-translate-y-1 hover:text-purple-900 font-bold font-mono">
                        Learn More
                      </h1>
                    </Link>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 text-center flex items-center justify-center ">
          <Link href={"/courses"} className="p-[3px] relative ">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-3xl" />
            <div className="px-8 py-2  bg-black/90 rounded-[18px]  relative group transition duration-200  hover:bg-transparent font-bold font-serif">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-tl from-black via-white ">
                All courses
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
