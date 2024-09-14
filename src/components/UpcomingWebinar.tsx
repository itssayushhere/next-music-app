import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
const UpcomingWebinar = () => {
  return (
    <div className="p-12 bg-gray-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className=" text-[14px] text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED Webinars
          </h2>
          <p className="mt-2 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 -tracking-tighter">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
            <HoverEffect items={featuredWebinars} />
          {/* <div className="max-w-7xl mx-auto px-8">
          </div> */}
        </div>
        <div className=" text-center">
          <Link
            href={"/"}
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50 transform transition duration-300 hover:-translate-y-1 "
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-bold tracking-tight text-white backdrop-blur-3xl ">
              View All Webinars
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebinar;
export const featuredWebinars = [
    {
      title: 'Understanding Music Theory',
      description:
        'Dive deep into the fundamentals of music theory and enhance your musical skills.',
      link: '/understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'The Art of Songwriting',
      description:
        'Learn the craft of songwriting from experienced musicians and songwriters.',
      link: '/the-art-of-songwriting',
      isFeatured: true,
    },
    {
      title: 'Mastering Your Instrument',
      description:
        'Advanced techniques to master your musical instrument of choice.',
      link: '/mastering-your-instrument',
      isFeatured: true,
    },
    {
      title: 'Music Production Essentials',
      description:
        'Get started with music production with this comprehensive overview.',
      link: '/music-production-essentials',
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'Live Performance Techniques',
      description:
        'Enhance your live performance skills with expert tips and strategies.',
      link: '/live-performance-techniques',
      isFeatured: true,
    },
    {
      title: 'Digital Music Marketing',
      description:
        'Learn how to promote your music effectively in the digital age.',
      link: '/digital-music-marketing',
      isFeatured: true,
    },
  ];