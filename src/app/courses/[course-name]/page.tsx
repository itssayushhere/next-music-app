"use client";
import courseData from "@/data/music_courses.json";
import Image from "next/image";
import ReactLoading from "react-loading";
import { useState } from "react";

interface Params {
  "course-name": string;
}

export default function CoursePage({ params }: { params: Params }) {
  const { "course-name": courseName } = params;
  const current_data = courseData.courses.find(
    (item) => item.slug == courseName
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber:undefined
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  if (!current_data) {
    return (
      <div className="min-h-screen flex items-center justify-center w-full">
        <ReactLoading type="cylon" color="white" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center w-full sm:max-w-[1350px] mx-auto">
      <h1 className="sm:text-5xl text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 sm:mt-30 mt-24 mb-8">
        {current_data.title}
      </h1>

      {/* Image and Content Section */}
      <div className="flex flex-col sm:flex-row w-full gap-8 p-4">
        {/* Image Section */}
        <div className="flex-shrink-0 p-4 shadow-lg shadow-purple-800 rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out">
          <Image
            src={current_data?.instructorimg}
            height={500}
            width={500}
            className="sm:h-96 h-80 w-full object-cover rounded-xl"
            alt={current_data?.title}
            property="priority"
          />
        </div>

        {/* Markdown-style Content Section */}
        <div className="flex flex-col flex-grow p-4 space-y-8">
          <div>
            <h2 className="font-bold font-mono text-2xl text-purple-300">
              Course Description
            </h2>
            <p className="text-white">{current_data?.description}</p>
          </div>

          <div>
            <h2 className="font-bold font-mono text-2xl text-purple-300">
              Instructor Information
            </h2>
            <p className="text-lg text-white mb-2">
              <span className="font-bold">Instructor:</span> {current_data?.instructor}
            </p>
            <p className="text-white">{current_data?.instructorBio}</p>
          </div>
        </div>
      </div>

      {/* Sign Up Form at the Bottom */}
      <div className="w-full sm:max-w-[700px] mt-12 p-6 bg-neutral-900 rounded-lg shadow-lg">
        <h2 className="font-bold font-mono text-2xl text-purple-300 mb-4 text-center">
          Sign Up for the Course
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name..."
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded-lg text-black"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email..."
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-lg text-black"
            required
          />
          <input
            type='number'
            name="number"
            placeholder="Your Phone Number..."
            value={formData.phonenumber}
            onChange={handleChange}
            className="p-3 rounded-lg text-black"
            required
          />
          <button
            type="submit"
            className="p-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-colors duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
