import Achievements from "@/components/Achievements";
import Categoty from "@/components/categoty";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OurCourses from "@/components/ourCourses";
import OurTeam from "@/components/TeamMember";
import Testimonials from "@/components/Testimonials";
import React from "react";
import Image from "next/image";
export default function page() {
  return (
    <div className="min-h-screen max-w-screen mx-auto top-0 left-0">
      <Header />
      <div className="flex flex-col lg:flex-row w-full mx-auto px-4 sm:px-6 lg:px-8 items-center justify-center lg:justify-between max-w-screen-xl">
        <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:pr-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
            Learn new skills online with ease
          </h1>
          <p className="text-base sm:text-lg lg:text-xl font-normal mb-4">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
          <div className="flex flex-wrap sm:space-x-4 pt-4 gap-y-4 sm:gap-y-0">
            <button className="py-2 px-4 bg-black text-white rounded-md">
              Start learning now
            </button>
            <button className="py-2 px-4 bg-white text-black border border-black rounded-md">
              Explore Courses
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center p-4">
          <Image
            src="/img/Image.png"
            alt="Person holding an orange folder"
            className="h-auto max-w-full"
            width={500} // Replace with the actual width of your image
            height={500} // Replace with the actual height of your image
            layout="intrinsic" // Ensures the image respects the provided dimensions
          />
        </div>
      </div>

      <Categoty />
      <Achievements />
      <OurCourses />
      <OurTeam />
      <Testimonials />
      <Footer />
    </div>
  );
}
