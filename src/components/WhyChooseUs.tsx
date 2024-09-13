"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
      title: "Expert Instructors",
      description:
        "Learn from industry professionals with years of experience in music performance and teaching. Our instructors are passionate about sharing their knowledge and guiding students on their musical journey.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Expert Instructors
        </div>
      ),
    },
    {
      title: "Personalized Learning",
      description:
        "Our music programs are tailored to meet your individual needs. Whether you're a beginner or an advanced musician, we provide personalized feedback and guidance to help you achieve your musical goals.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Personalized Learning
        </div>
      ),
    },
    {
      title: "State-of-the-Art Facilities",
      description:
        "Our music school is equipped with state-of-the-art instruments and facilities. Practice and perform in a professional environment that fosters creativity and growth for musicians of all levels.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          State-of-the-Art Facilities
        </div>
      ),
    },
    {
      title: "Diverse Course Offerings",
      description:
        "From classical music to modern genres, we offer a wide range of courses to suit every musical interest. Learn instruments, music theory, songwriting, production, and more.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Diverse Course Offerings
        </div>
      ),
    },
  ];
  

const WhyChooseUs = () => {
  return (
    <div className=" p-10">
    <StickyScroll content={content} />
  </div>
  )
}

export default WhyChooseUs