import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";


import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TingoAI — Building Africa’s AI Future for the World",
  description: "TingoAI is a full-stack artificial intelligence company delivering media AI, generative platforms, AI infrastructure, and autonomous systems at global scale.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
}
