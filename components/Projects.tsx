"use client";

import { PROJECTS } from "@/constants";
import { Button, Link } from "@nextui-org/react";

export const Projects = () => {
  return (
    <>
      <section className="container">
        <h1 className="pb-10 text-5xl font-semibold text-center">Projects</h1>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10 place-items-center">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="rounded-md shadow-lg dark:shadow-white/10 px-6 py-10 text-white dark:text-black flex flex-col justify-between"
            >
              <div className="font-semibold text-black dark:text-white">
                {project.name}
              </div>
              <div className="py-4 font-extralight text-sm text-black dark:text-white">
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
                className="px-6 tracking-wide w-fit"
              >
                Visit
              </Button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
