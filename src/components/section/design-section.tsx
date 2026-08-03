import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
const BLUR_FADE_DELAY = 0.04;
const DesignSection = () => {
  return (
    <>
      <section id="design">
        <div className="flex min-h-0 flex-col gap-y-8">
          <div className="flex flex-col items-center justify-center gap-y-4">
            <div className="flex w-full items-center">
              <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
              <div className="z-10 rounded-xl border bg-primary px-4 py-1">
                <span className="text-sm font-medium text-background">
                  My Design
                </span>
              </div>
              <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
            </div>
            <div className="flex flex-col items-center justify-center gap-y-3">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">
                Check out my latest Designs
              </h2>
              <p className="text-center text-balance text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                I&apos;ve build Blocks Components Design and Landing Pages.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-200px grid-cols-1 gap-4 auto-rows-fr sm:grid-cols-2">
            {DATA.design.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                className="h-full"
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  active={project.active}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DesignSection;
