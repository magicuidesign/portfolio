import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeftIcon,
  BellIcon,
  FlameIcon,
  Grid2X2Icon,
  ShieldCheckIcon,
  WifiOffIcon,
} from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const TAGLINE = "8 brain games. One calm habit.";

const title = "Brain Sort — A calm brain-training puzzle game";
const description =
  "Brain Sort is a private-by-design mobile game with 8 single-player puzzle games and daily streaks to build a calm habit. Built with React Native & Expo. Coming soon to the App Store & Google Play.";

export const metadata: Metadata = {
  title: "Brain Sort",
  description,
  openGraph: {
    title,
    description,
    type: "article",
    url: `${DATA.url}/projects/brainsort`,
    images: [
      {
        url: "/brainsort/screenshots/01-home.png",
        width: 1320,
        height: 2868,
        alt: "Brain Sort home screen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/brainsort/screenshots/01-home.png"],
  },
  alternates: {
    canonical: `${DATA.url}/projects/brainsort`,
  },
};

const FEATURES = [
  {
    icon: Grid2X2Icon,
    title: "8 games in one",
    description:
      "Sorting, matching, memory and reflex puzzles — a fresh challenge whenever you open the app.",
  },
  {
    icon: FlameIcon,
    title: "Daily streaks",
    description:
      "Come back each day to grow your streak. A gentle nudge to keep your mind sharp.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Private by design",
    description:
      "No accounts required, no trackers. The app runs on your device — there are no servers collecting your data.",
  },
  {
    icon: WifiOffIcon,
    title: "Plays offline",
    description:
      "Every game works without a connection. Perfect for a flight, a commute, or a quiet moment.",
  },
];

const GAMES = [
  {
    name: "Water Sort",
    blurb: "Pour to match colors",
    image: "/brainsort/screenshots/02-water-sort.png",
  },
  {
    name: "Ball Sort",
    blurb: "Stack balls by color",
    image: "/brainsort/screenshots/05-ball-sort.png",
  },
  {
    name: "Tower Sort",
    blurb: "Stack disks largest to smallest",
    image: "/brainsort/screenshots/06-tower-sort.png",
  },
  {
    name: "Connect Dots",
    blurb: "Link matching colors without crossing",
    image: "/brainsort/screenshots/03-connect-dots.png",
  },
  {
    name: "Sort Factory",
    blurb: "Triple-match items against the clock",
    image: "/brainsort/screenshots/07-sort-factory.png",
  },
  {
    name: "Mind Snap",
    blurb: "A pattern flashes — tap what you saw",
    image: "/brainsort/screenshots/04-mind-snap.png",
  },
];

const MORE_GAMES = [
  { name: "Dot Pop", blurb: "Pop the greens, avoid the rest" },
  { name: "Arrow Sort", blurb: "Tap arrows to fire them — order matters" },
];

const TECH = [
  "React Native",
  "Expo",
  "Expo Router",
  "TypeScript",
  "Reanimated",
  "Sign in with Apple",
  "iOS",
  "Android",
];

export default function BrainSortPage() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-12">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeftIcon className="size-4" />
          Back to home
        </Link>
      </BlurFade>

      {/* Hero */}
      <section>
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <Image
              src="/brainsort/icon.png"
              alt="Brain Sort app icon"
              width={96}
              height={96}
              className="size-20 rounded-[22%] border shadow-sm sm:size-24"
            />
          </BlurFade>
          <div className="flex flex-col gap-2">
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Brain Sort
                </h1>
                <Badge variant="secondary">Coming soon</Badge>
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <p className="text-lg text-muted-foreground">{TAGLINE}</p>
            </BlurFade>
          </div>
        </div>

        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <p className="mt-6 text-pretty text-sm text-muted-foreground sm:text-base">
            A mobile brain-training game I designed and built from scratch.
            Brain Sort bundles eight bite-sized puzzle games into one calm,
            ad-light experience and ties them together with a daily streak — so
            a few minutes a day becomes a habit. It&apos;s private by design and
            works entirely on your device.
          </p>
        </BlurFade>

        {/* Store CTAs (coming soon) */}
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button
              variant="outline"
              disabled
              className="cursor-default gap-2 opacity-80"
            >
               App Store
              <Badge className="px-1.5 py-0 text-[10px]">Soon</Badge>
            </Button>
            <Button
              variant="outline"
              disabled
              className="cursor-default gap-2 opacity-80"
            >
              ▶ Google Play
              <Badge className="px-1.5 py-0 text-[10px]">Soon</Badge>
            </Button>
          </div>
        </BlurFade>
      </section>

      {/* Features */}
      <section>
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className="text-xl font-bold">Why I built it</h2>
        </BlurFade>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {FEATURES.map((feature, id) => (
            <BlurFade key={feature.title} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
              <div className="flex h-full flex-col gap-2 rounded-lg border p-4">
                <feature.icon className="size-5 text-foreground" />
                <h3 className="font-medium">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Screenshot gallery */}
      <section>
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-xl font-bold">Eight games, one app</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 10}>
          <p className="mt-1 text-sm text-muted-foreground">
            Each mode is a self-contained puzzle with hand-tuned levels and
            satisfying haptics and sound.
          </p>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="-mx-6 mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-3">
            {GAMES.map((game) => (
              <figure key={game.name} className="w-44 shrink-0 snap-center">
                <Image
                  src={game.image}
                  alt={`${game.name} screenshot`}
                  width={1320}
                  height={2868}
                  className="w-44 rounded-xl border"
                />
                <figcaption className="mt-2">
                  <p className="text-sm font-medium">{game.name}</p>
                  <p className="text-xs text-muted-foreground">{game.blurb}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Plus:</span>
            {MORE_GAMES.map((game) => (
              <span key={game.name}>
                <span className="text-foreground">{game.name}</span> — {game.blurb}
              </span>
            ))}
          </div>
        </BlurFade>
      </section>

      {/* Streak */}
      <section>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <BlurFade delay={BLUR_FADE_DELAY * 13} className="sm:w-1/2">
            <Image
              src="/brainsort/screenshots/08-streak.png"
              alt="Brain Sort streak screen"
              width={1320}
              height={2868}
              className="mx-auto w-48 rounded-xl border"
            />
          </BlurFade>
          <div className="flex flex-col gap-3 sm:w-1/2">
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <h2 className="flex items-center gap-2 text-xl font-bold">
                <FlameIcon className="size-5" />
                Build a calm habit
              </h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 15}>
              <p className="text-sm text-muted-foreground">
                Brain Sort tracks a daily streak and can send an optional gentle
                reminder before it&apos;s at risk. The goal isn&apos;t to keep
                you hooked for hours — it&apos;s a few focused minutes a day.
              </p>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <BellIcon className="size-4" />
                Opt-in reminders, fully on-device.
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section>
        <BlurFade delay={BLUR_FADE_DELAY * 17}>
          <h2 className="text-xl font-bold">Built with</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 18}>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {TECH.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </BlurFade>
      </section>

      {/* Legal */}
      <section>
        <BlurFade delay={BLUR_FADE_DELAY * 19}>
          <div className="flex flex-col gap-2 rounded-lg border p-4">
            <h2 className="text-sm font-medium">Legal</h2>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
              <a
                href="/brainsort/privacy-policy.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Privacy Policy
              </a>
              <a
                href="/brainsort/terms-of-service.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
