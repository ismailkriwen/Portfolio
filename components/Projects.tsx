"use client";

import { PROJECTS } from "@/constants";
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";

export const Projects = () => {
  return (
    <>
      <section className="container">
        <h1 className="pb-10 text-5xl font-semibold text-center">Projects</h1>
        <div className="flex flex-col md:grid grid-cols-3 gap-5 place-items-center">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="rounded-md shadow-md dark:shadow-white/20 bg-zinc-950 text-white dark:bg-zinc-50 dark:text-black"
            >
              <div className="relative bg-blue-200 w-full h-44">
                <Image
                  src={project.img}
                  alt={project.name}
                  className="absolute w-auto h-auto"
                  fill
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-semibold">{project.name}</div>
                <div className="py-4 font-extralight text-sm">
                  {project.description}
                </div>
                <Button
                  as={Link}
                  href={project.link}
                  target="_blank"
                  showAnchorIcon
                  variant="ghost"
                  radius="sm"
                  color="primary"
                  className="px-6 tracking-wide"
                >
                  Visit
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
