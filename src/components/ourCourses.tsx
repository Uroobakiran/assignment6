import React from "react";
import Image from "next/image";
const OurCourses = () => {
  const courses = [
    {
      title: "UX/UI Design 201",
      category: "Design",
      price: "$400",
      image: "/img/Image1.png",
      icons: "/img/Star.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      title: "Introduction to Python",
      category: "Programming",
      price: "$300",
      image: "/img/Image2.png",
      icons: "/img/Star.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      title: "Data Analysis for Beginners",
      category: "Business",
      price: "$350",
      image: "/img/Image3.png",
      icons: "/img/Star.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      title: "Art Specialization",
      category: "Art",
      price: "$200",
      image: "/img/Image4.png",
      icons: "/img/Star.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      title: "Rule of Law",
      category: "Law",
      price: "$150",
      image: "/img/Image5.png",
      icons: "/img/Star.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      title: "Introduction to Webflow",
      category: "Tech",
      price: "$250",
      image: "/img/Image6.png",
      icons: "/img/Star.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
  ];
  return (
    <section className="py-12 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  top-[3326px] left-[100px] pt-[112px] pr-[64px] pb-[112px] pl-[64px] gap-[60px]">
        <div className=" text-center ">
          <h2 className="text-[48px] leading-[67.2px] font-bold tracking-tight text-[#000000] ">
            Courses
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-[27px] text-black w-[768px] h-[27px] lg:mx-auto">
            Your Ultimate Guide to Learning
          </p>
        </div>
        <div className="flex mx-auto px-4 sm:px-6 lg:px-8 w-[336px] h-[40px] justify-between text-center pt-8 pr-[16px] pb-8 pl-[16px] py-5">
          <ul className="flex space-x-4 justify-between text-center">
            <li>Popular</li>
            <li>Recommended</li>
            <li>Best Price</li>
          </ul>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
          {courses.map((courses) => (
            <div
              key={courses.title}
              className="relative p-6 bg-[#f7f7f7] border-gray-200 rounded-lg shadow-sm"
            >
              <div className="mb-4">
                <Image
                  src={courses.image}
                  alt="course image"
                  width={416}
                  height={300}
                  className="w-full h-auto object-cover rounded"
                />
              </div>
              <p className="flex justify-between text-sm leading-[21px] font-semibold text-[#000000]">
                {courses.category}
                <Image
                  src={courses.icons}
                  alt="icon"
                  width={24}
                  height={24}
                  className="inline-block"
                />
              </p>
              <h4 className="text-[24px] leading-[33.6px] font-bold text-[#000000]">
                {courses.title}
              </h4>
              <p className="font-normal text-[16px] leading-[24px]">
                {courses.description}
              </p>
              <div className="flex mt-4">
                <button className="py-2 px-4 pt-[8px] pr-[20px] pb-[8px] pl-[20px] gap-[8px] border-black border-[1px] text-black font-semibold rounded-[5px]">
                  Enroll
                </button>
                <p className="py-2 px-4 bg-gray-100 text-gray-900 font-semibold rounded-md ml-2">
                  $400
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="py-2 px-4 bg-[#fffff] border-[1px] border-black text-[#000000] font-semibold rounded-md">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurCourses;
