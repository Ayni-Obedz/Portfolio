import { useState } from "react";
import { site, type Mode, type WorkItem } from "../data/site";
import FlexCarousel from "./FlexCarousel";
import Reveal from "./Reveal";

type Props = { mode: Mode; onModeChange: (mode: Mode) => void };

const tabs: { id: Mode; label: string }[] = [
  { id: "edit", label: "The Edit" },
  { id: "beyond", label: "Beyond the Edit" },
];

function VideoShowcase({ videos }: { videos: WorkItem[] }) {
  const [open, setOpen] = useState(false); // change to true to start expanded
  const [active, setActive] = useState(0);
  const current = videos[active];

  return (
    <div className="rounded-2xl border border-white/10 bg-[#2a1d6e]/40">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-6 py-4 text-left"
      >
        <span className="text-lg font-semibold">
          Videos <span className="ml-2 text-sm font-normal text-[#b9b4e0]">({videos.length})</span>
        </span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-5 w-5 text-[#12b5ff] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="animate-fade-in space-y-5 px-6 pb-6">
          {/* Main player, directly above the video boxes */}
          <div>
            <div className="aspect-video overflow-hidden rounded-xl bg-black">
              {current.src ? (
                <video
                  key={current.src}
                  src={current.src}
                  controls
                  preload="metadata"
                  className="h-full w-full object-contain"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-linear-to-br from-[#3a2a8c] to-[#1a0f4d] text-sm text-[#b9b4e0]">
                  Video placeholder
                </div>
              )}
            </div>
            <p className="mt-3 text-sm font-semibold">{current.title}</p>
          </div>

          {/* Video boxes */}
          <div className="grid gap-4 sm:grid-cols-2">
            {videos.map((v, i) => (
              <button
                key={v.title}
                type="button"
                onClick={() => setActive(i)}
                className={`overflow-hidden rounded-xl border text-left transition hover:-translate-y-1 ${
                  i === active ? "border-[#12b5ff]" : "border-white/10 hover:border-[#12b5ff]/50"
                }`}
              >
                <div className="aspect-video bg-linear-to-br from-[#3a2a8c] to-[#1a0f4d]">
                  {v.src ? (
                    <video
                      src={`${v.src}#t=0.1`}
                      muted
                      preload="metadata"
                      className="pointer-events-none h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-[#b9b4e0]">
                      Video placeholder
                    </div>
                  )}
                </div>
                <p className="p-3 text-sm font-semibold">{v.title}</p>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Services({ mode, onModeChange }: Props) {
  const services = site.services[mode];
  const work = site.work[mode];
   const videos = work.filter((w) => w.type === "video");
  const images = work.filter((w) => w.type === "image");
  const carouselItems = images
    .filter((i) => i.src)
    .map((i) => ({ src: i.src, alt: i.title, title: i.title, subtitle: i.subtitle }));

  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <Reveal className="mb-12 flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#12b5ff]">Services</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            {mode === "edit" ? "What I Do" : "Beyond the Edit"}
          </h2>
        </div>

        <div role="tablist" className="inline-flex rounded-full border border-white/10 bg-[#2a1d6e]/70 p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={mode === tab.id}
              onClick={() => onModeChange(tab.id)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                mode === tab.id
                  ? "bg-[#12b5ff] text-[#0b0726] shadow-[0_0_20px_#12b5ff66]"
                  : "text-[#b9b4e0] hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </Reveal>

      <div key={mode} className="animate-fade-in">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="rounded-2xl border border-white/10 bg-[#3a2a8c]/60 p-7 backdrop-blur transition hover:-translate-y-2 hover:border-[#12b5ff]/60"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#12b5ff]/15 font-bold text-[#12b5ff]">
                0{i + 1}
              </div>
              <h3 className="mb-2 font-semibold">{s.title}</h3>
              <p className="text-sm leading-relaxed text-[#b9b4e0]">{s.text}</p>
            </div>
          ))}
        </div>

                <div id="featured" className="mt-20 scroll-mt-24">
          <h3 className="mb-8 text-2xl font-bold">
            Featured <span className="text-[#12b5ff]">Work</span>
          </h3>

          {videos.length > 0 && (
            <div className="mb-10">
              <VideoShowcase videos={videos} />
            </div>
          )}

          {images.length > 0 &&
            (carouselItems.length > 0 ? (
              <div className="relative h-560px w-full">
                <FlexCarousel
                  items={carouselItems}
                  preset="liquid"
                  intro="deal"
                  cardHeight={0.5}
                  gap={12}
                  squeeze={0.2}
                  focusOnClick
                  captions
                  fit="portrait"
                  radius={0}
                  lensWidth={0.74}
                  lensHeight={1.18}
                  tilt={62}
                  roundness={0.5}
                  bend={0.34}
                  reach={0.38}
                  curl="twist"
                  dispersion={0.45}
                  liquid={0}
                  followCursor={false}
                  autoplay={true}
                  interval={3}
                  captureWheel
                />
              </div>
            ) : (
              <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-white/15 text-sm text-[#b9b4e0]">
                Add image paths in site.ts to show the carousel
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}