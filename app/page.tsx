"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import { MoveRight } from "lucide-react";
import Link from "next/link";

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
      duration: 1.5,
    },
  },
};

const MotionButton = motion(Link);

export default function HomePage() {
  return (
    <div className="grid place-items-center h-screen">
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeInUpAnimation}
        className="flex justify-center text-center flex-col gap-4"
      >
        <motion.p variants={fadeInUpAnimation}>
          #1 Blog on the internet!
        </motion.p>
        <motion.h1
          variants={fadeInUpAnimation}
          className=" linear__text__gradient text-4xl font-extrabold leading-10 tracking-tight  sm:text-6xl sm:leading-none md:text-8xl"
        >
          Journey <br />
          Through My <br />
          Thoughts & Stories
        </motion.h1>
        <div className="flex justify-center">
          <MotionButton
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            variants={fadeInUpAnimation}
            href="/blog"
            className={cn(
              buttonVariants({ size: "sm" }),
              "group relative w-fit text-lg font-bold rounded-2xl bg-primary/95 hover:bg-primary/85 text-center font- flex items-center justify-center"
            )}
          >
            Dive in
            <MoveRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12 ml-1" />
          </MotionButton>
        </div>
      </motion.div>
    </div>
  );
}
