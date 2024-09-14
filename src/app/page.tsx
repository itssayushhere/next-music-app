import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import { MovingCards } from "@/components/MovingCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased ">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <MovingCards/>
      <UpcomingWebinar/>
      <Instructor/>
    </main>
  );
}
