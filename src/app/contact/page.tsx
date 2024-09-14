"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { BackgroundBeams } from "@/components/ui/background-beams";

interface ContactFormInputs {
  email: string;
  message: string;
}

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormInputs>();

  // Type-safe form submission handler
  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    console.log(data);
    reset()
  };

  return (
    <div className="min-h-screen w-full rounded-md relative flex flex-col items-center justify-center antialiased bg-gray-900">
      <BackgroundBeams />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 rounded-xl w-full sm:px-10 px-3 z-10 "
      >
        <h2 className="bg-clip-text bg-gradient-to-br to-black from-white text-4xl font-bold font-mono mb-5 text-transparent">
          Contact Us:
        </h2>
        <p className="text-gray-400 text-center mb-3">
          If you have any question regarding any course, enter here and we will try to connect with you.
        </p>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          className="mt-2 w-full h-12 bg-black/90 border border-white/25 rounded-xl px-3 py-3 text-lg focus:outline-none"
          placeholder="Enter Email..."
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}

        <textarea
          {...register("message", { required: "Message is required" })}
          className="mt-2 w-full bg-black/90 border border-white/25 rounded-xl px-3 py-3 text-lg focus:outline-none"
          rows={4}
          placeholder="Your Message here..."
        />
        {errors.message && (
          <span className="text-red-500 text-sm">{errors.message.message}</span>
        )}

        <div className="flex items-center justify-center mt-4">
          <button
            className="bg-black p-2 px-5 rounded-xl focus:ring-2 focus:ring-purple-900 hover:-translate-y-1 hover:ring-1 hover:ring-purple-900"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      
    </div>
  );
}
