"use client";

import { SKILLS } from "@/constants";
import Image from "next/image";

const SKILL_IMAGE_SIZE = 54;

export const Skills = () => {
  return (
    <>
      <section className="container">
        <h1 className="py-10 text-5xl font-semibold text-center">Skills</h1>
        <div className="flex flex-col md:grid grid-cols-3 gap-5 place-items-center">
          {SKILLS.map((skill, index) => (
            <div
              key={index}
              className="rounded-md shadow-md dark:shadow-white/20 p-4 bg-zinc-950 text-white dark:bg-zinc-50 dark:text-black h-[200px]"
            >
              <div className="flex gap-5 items-center">
                <Image
                  src={skill.img}
                  alt={skill.name}
                  height={SKILL_IMAGE_SIZE}
                  width={SKILL_IMAGE_SIZE}
                  className="object-contain"
                />
                <div className="font-semibold">{skill.name}</div>
              </div>
              <div className="py-4 font-light">{skill.description}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
