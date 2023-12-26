"use client";

import { Button } from "@nextui-org/react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export const Hero = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 md:min-h-[400px] bg-[url('/hero_section-background.jpg')] bg-center bg-no-repeat bg-cover opacity-30 -z-10" />
      <div className="container py-4 flex max-md:flex-col justify-center items-center gap-10 md:gap-10">
        <div className="font-medium md:text-5xl text-2xl flex flex-col justify-center max-md:text-center md:w-1/2">
          Hello, I&apos;m Ismail and i&apos;m a{" "}
          <span>
            <span className="text-blue-500">
              <Typewriter words={["Front-End", "Full-Stack"]} loop={false} />
            </span>{" "}
            Developer
          </span>{" "}
          <span className="text-base py-6 font-normal md:w-3/4">
            Building Awesome Websites. I Turn Ideas into Digital Reality! Meet
            Your Friendly Web Developer Ready to Create an Impact Online.
          </span>
          <div className="flex gap-5 items-center max-md:justify-center">
            <Button
              radius="sm"
              color="primary"
              className="w-fit px-10 rounded-[4px]"
              variant="ghost"
            >
              Get in Touch
            </Button>
          </div>
        </div>
        <div className="relative w-72 aspect-square max-sm:w-64">
          <Image
            src="/developer_avatar.png"
            alt="dev"
            fill
            className="object-contain rounded-full"
            priority
            sizes="25vw"
          />
        </div>
      </div>
    </section>
  );
};
