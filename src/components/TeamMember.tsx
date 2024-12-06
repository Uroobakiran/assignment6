import Link from "next/link";
import React from "react";
import { FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa";
import Image from "next/image";
const teamMembers = [
  {
    name: "James Nduku",
    title: "Marketing Coordinator",
    linkedin: "#",
    twitter: "#",
    website: "#",
    image: "/img/team1.png",
  },
  {
    name: "Joseph Munyambu",
    title: "Nursing Assistant",
    linkedin: "#",
    twitter: "#",
    website: "#",
    image: "/img/team2.png",
  },
  {
    name: "Joseph Ngumbau",
    title: "Medical Assistant",
    linkedin: "#",
    twitter: "#",
    website: "#",
    image: "/img/team3.png",
  },
  {
    name: "Erick Kipkemboi",
    title: "Web Designer",
    linkedin: "#",
    twitter: "#",
    website: "#",
    image: "/img/team4.png",
  },
  {
    name: "Stephen Kerubo",
    title: "President of Sales",
    linkedin: "#",
    twitter: "#",
    website: "#",
    image: "/img/team5.png",
  },
  {
    name: "John Leboo",
    title: "Dog Trainer",
    linkedin: "#",
    twitter: "#",
    website: "#",
    image: "/img/team6.png",
  },
];
const OurTeam = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-[48px] text-[#000000] font-bold tracking-wide leading-[57.6px] ">
          Our team
        </h2>
        <p className="mt-2 text-[18px] leading-[27px] font-normal tracking-tight text-[#000000] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="p-6 bg-gray-100 rounded-lg shadow-md"
            >
              <div className="relative">
                {" "}
                <Image
                  src={member.image}
                  alt="team member"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto"
                />
              </div>
              <h3 className="text-[20px] font-semibold text-[#000000] leading-[30px]">
                {member.name}
              </h3>
              <p className="mt-2 text-lg text-[#000000] leading-[27px] font-normal">
                {member.title}
              </p>
              <div className="mt-4 flex justify-center space-x-4">
                <Link
                  href={member.linkedin}
                  className="text-blue-700 hover:text-blue-900"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  href={member.twitter}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaTwitter />
                </Link>
                <Link
                  href={member.website}
                  className="text-gray-700 hover:text-gray-900"
                >
                  <FaGlobe />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
