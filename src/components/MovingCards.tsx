"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function MovingCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-10 z-10">
        Hear our Harmony: Voices of Success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "The instructors here are phenomenal! I've grown so much as a musician in just a few months. The personalized lessons have helped me master the guitar much faster than I expected.",
    name: "Sarah Johnson",
    title: "Guitar Student",
  },
  {
    quote:
      "Learning piano at this academy has been an incredible experience. The curriculum is comprehensive, and the instructors are always encouraging. I’ve even started composing my own pieces!",
    name: "David Lee",
    title: "Piano Student",
  },
  {
    quote:
      "I joined the vocal course and was amazed at how much my singing improved in such a short time. The techniques they teach are both practical and effective, and I feel more confident in my performances.",
    name: "Emily Roberts",
    title: "Vocal Student",
  },
  {
    quote:
      "The music production course was everything I hoped for. The equipment is top-notch, and the hands-on experience I gained is invaluable. I'm now producing my own music with confidence!",
    name: "Mark Thompson",
    title: "Music Production Student",
  },
  {
    quote:
      "The variety of courses here is fantastic! I started with basic drumming and quickly advanced to more complex rhythms, all thanks to the excellent instructors and learning environment.",
    name: "Chris Evans",
    title: "Drumming Student",
  },
  {
    quote:
      "As a jazz enthusiast, I wanted to improve my improvisation skills, and this academy delivered. The lessons are tailored to your style, and I now feel more confident during live performances.",
    name: "Linda Martinez",
    title: "Jazz Improvisation Student",
  },
  {
    quote:
      "I’ve always had a passion for songwriting but struggled to bring my ideas to life. The songwriting course helped me refine my skills and gave me the tools to create original music I’m proud of.",
    name: "Alexandra Ford",
    title: "Songwriting Student",
  },
  {
    quote:
      "Studying classical music here has deepened my understanding of music theory and performance techniques. I can now analyze and perform complex pieces with confidence.",
    name: "James Carter",
    title: "Classical Music Student",
  },
  {
    quote:
      "The electronic music production course opened up a new world for me. I’ve learned how to create and mix tracks using professional software, and I’m now working on my first EP.",
    name: "Olivia Scott",
    title: "Electronic Music Production Student",
  },
  {
    quote:
      "I highly recommend this academy to anyone serious about their music education. The instructors are extremely knowledgeable, and the course offerings cover every aspect of music you can imagine.",
    name: "Michael Green",
    title: "Multi-instrumentalist Student",
  },
];
