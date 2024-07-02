"use client";
import { motion, Variants } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";

const fadeInUpAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 1.2,
    },
  },
};

export default function AboutPage() {
  return (
    <div className="grid place-items-center h-screen">
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeInUpAnimation}
        className="flex justify-center items-center text-center flex-col gap-4"
      >
        <motion.div
          variants={fadeInUpAnimation}
          className="flex flex-col items-center gap-2"
        >
          <Avatar className="h-[120px] w-[120px]">
            <AvatarImage src="/profile.png" alt={siteConfig.author} />
            <AvatarFallback>NS</AvatarFallback>
          </Avatar>
        </motion.div>
        <motion.p
          variants={fadeInUpAnimation}
          className="text-base lg:text-lg text-gray-700 leading-relaxed sm:leading-normal text-center"
        >
          I'm a passionate developer with a love for creating engaging web
          experiences. <br />
          This page is built using NextJs, Tailwind CSS, TypeScript, and Framer
          Motion!
        </motion.p>
      </motion.div>
    </div>
  );
}
