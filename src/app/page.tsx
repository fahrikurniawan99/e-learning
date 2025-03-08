import React from "react";
import Hero from "@/components/Home/Hero";
import Companies from "@/components/Home/Companies";
import NamesList from "@/components/Home/Courses";
import Mentor from "@/components/Home/Mentor";
import Testimonial from "@/components/Home/Testimonial";
import Newsletter from "@/components/Home/Newsletter";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Si Educational",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Companies />
      <NamesList />
      <Mentor />
      <Testimonial />
      <Newsletter />
    </main>
  );
}
