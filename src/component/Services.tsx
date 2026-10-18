import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { site, type Mode, type Venture, type WorkItem } from "../data/site";
import FlexCarousel from "./FlexCarousel";
import Reveal from "./Reveal";

type Props = { mode: Mode; onModeChange: (mode: Mode) => void };

const tabs: { id: Mode; label: string }[] = [
  { id: "edit", label: "The Edit" },
  { id: "beyond", label: "Beyond the Edit" },
];

type ServiceCardProps = {
  index: number;
  title: string;
  text: string;
  active?: boolean;
  onClick?: () => void;
};

function ServiceCard({ index, title, text, active, onClick }: ServiceCardProps) {
  const base =
    "min-w-0 rounded-2xl border bg-[#3a2a8c]/60 p-7 text-left backdrop-blur transition [overflow-wrap:anywhere] hover:-translate-y-2";

  const content = (
    <>
      <div className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#12b5ff]/15 font-bold text-[#12b5ff]">
        0{index + 1}
      </div>
      <h3 className="mb-2 font-semibold">{title}</h3>
      <p className="text-sm leading-relaxed text-[#b9b4e0]">{text}</p>
      {onClick && <p className="mt-4 text-xs font-semibold text-[#12b5ff]">View work & contact →</p>}
    </>
  );

  if (!onClick) {
    return <div className={`${base} border-white/10 hover:border-[#12b5ff]/60`}>{content}</div>;
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`${base} ${
        active
          ? "border-[#12b5ff] shadow-[0_0_30px_#12b5ff33]"
          : "border-white/10 hover:border-[#12b5ff]/60"
      }`}
    >
      {content}
    </button>
  );
}

type ContactSheetProps = { open: boolean; onClose: () => void; venture: Venture };

function ContactSheet({ open, onClose, venture }: ContactSheetProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  return createPortal(
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={`${venture.title} contact info`}
        aria-hidden={!open}
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col border-l border-white/10 bg-[#140c3d] p-8 shadow-2xl transition-[transform,visibility] duration-300 ${
          open ? "visible translate-x-0" : "invisible translate-x-full"
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#12b5ff]">Contact</p>
            <h3 className="mt-2 text-2xl font-bold [overflow-wrap:anywhere]">{venture.title}</h3>
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-[#b9b4e0] transition hover:border-[#12b5ff] hover:text-[#12b5ff]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-[#b9b4e0] [overflow-wrap:anywhere]">{venture.text}</p>

        <div className="mt-8 space-y-3 overflow-y-auto">
          {venture.contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="block rounded-xl border border-white/10 bg-[#0b0726]/40 p-4 transition hover:border-[#12b5ff]/60"
            >
              <p className="text-xs uppercase tracking-widest text-[#12b5ff]">{c.label}</p>
              <p className="mt-1 font-medium [overflow-wrap:anywhere]">{c.value}</p>
            </a>
          ))}
        </div>

        <a
          href="#featured"
          onClick={onClose}
          className="mt-auto rounded-full bg-[#12b5ff] px-6 py-3 text-center text-sm font-semibold text-[#0b0726] transition hover:-translate-y-0.5"
        >
          View featured work
        </a>
      </aside>
    </>,
    document.body,
  );
}

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
  const ventures = site.ventures;
  const [selectedId, setSelectedId] = useState(ventures[0].id);
  const [sheetOpen, setSheetOpen] = useState(false);
  const closeSheet = useCallback(() => setSheetOpen(false), []);

  const venture = ventures.find((v) => v.id === selectedId) ?? ventures[0];
  const services: { title: string; text: string }[] = mode === "edit" ? site.services.edit : ventures;
  const work: WorkItem[] = mode === "edit" ? site.work.edit : venture.work;
  const workKey = mode === "edit" ? "edit" : venture.id;

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
        <div className="grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-6">
          {services.map((s, i) => (
            <ServiceCard
              key={s.title}
              index={i}
              title={s.title}
              text={s.text}
              active={mode === "beyond" && ventures[i].id === selectedId}
              onClick={
                mode === "beyond"
                  ? () => {
                      setSelectedId(ventures[i].id);
                      setSheetOpen(true);
                    }
                  : undefined
              }
            />
          ))}
        </div>

        <div id="featured" className="mt-20 scroll-mt-24">
          <h3 className="mb-8 text-2xl font-bold">
            Featured <span className="text-[#12b5ff]">Work</span>
            {mode === "beyond" && (
              <span className="ml-3 text-base font-normal text-[#b9b4e0]">· {venture.title}</span>
            )}
          </h3>

          {videos.length > 0 && (
            <div className="mb-10">
              <VideoShowcase key={workKey} videos={videos} />
            </div>
          )}

          {images.length > 0 &&
            (carouselItems.length > 0 ? (
              <div key={workKey} className="relative h-[560px] w-full">
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

      <ContactSheet open={sheetOpen && mode === "beyond"} onClose={closeSheet} venture={venture} />
    </section>
  );
}