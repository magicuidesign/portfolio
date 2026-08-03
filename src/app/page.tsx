/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import FlipWordsText from "@/components/flip-words-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import InternshipSection from "@/components/section/internship-section";
import ProjectsSection from "@/components/section/projects-section";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import DesignSection from "@/components/section/design-section";
import GitHubSection from "@/components/section/github-section";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="relative flex min-h-dvh flex-col gap-12 sm:gap-14">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="flex flex-col justify-between gap-2 gap-y-6 md:flex-row">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFade delay={BLUR_FADE_DELAY}>
                <p className="max-w-[600px] text-sm text-muted-foreground sm:text-base md:text-lg lg:text-xl">
                  <FlipWordsText
                    words={DATA.animatedRoles}
                    suffix={DATA.descriptionSuffix}
                  />
                </p>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>
                {DATA.summary}
              </Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="internship">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Internship</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <InternshipSection />
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 10 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {(() => {
                      const logo = (education as any).logo;
                      const logoWrapperClassName = (education as any).logoWrapperClassName;
                      const logoClassName = (education as any).logoClassName;
                      const wrapperClassName = cn(
                        "grid size-8 flex-none place-items-center overflow-hidden rounded-full border shadow ring-2 ring-border md:size-10",
                        logoWrapperClassName,
                      );
                      const imageClassName = cn(
                        "h-full w-full object-contain",
                        logoClassName,
                      );
                      if (typeof logo === "function") {
                        const Logo = logo;
                        return (
                          <span className={wrapperClassName}>
                            <Logo className={cn("h-full w-full text-foreground", logoClassName)} />
                          </span>
                        );
                      }
                      if (typeof logo === "string") {
                        return (
                          <span className={wrapperClassName}>
                            <img src={logo} alt={education.school} className={imageClassName} />
                          </span>
                        );
                      }
                      if (logo?.src) {
                        return (
                          <span className={wrapperClassName}>
                            <img src={logo.src} alt={education.school} className={imageClassName} />
                          </span>
                        );
                      }
                      if ((education as any).logoUrl) {
                        return (
                          <span className={wrapperClassName}>
                            <img src={(education as any).logoUrl} alt={education.school} className={imageClassName} />
                          </span>
                        );
                      }
                      if ((education as any).logoText) {
                        return (
                          <span className={cn(wrapperClassName, "bg-muted text-[10px] font-semibold uppercase tracking-wide")}>
                            {(education as any).logoText}
                          </span>
                        );
                      }
                      return <div className={cn(wrapperClassName, "bg-muted")} />;
                    })()}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="pl-11 text-xs tabular-nums text-muted-foreground sm:pl-0 sm:text-right">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
                <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
                  {skill.icon && <skill.icon className="size-4 rounded overflow-hidden object-contain" />}
                  <span className="text-foreground text-sm font-medium">{skill.name}</span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <ProjectsSection />
        </BlurFade>
      </section>
      <section id="contributions">
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
          <GitHubSection />
        </BlurFade>
      </section>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 18}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
