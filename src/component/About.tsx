import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <Reveal className="mb-14 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#12b5ff]">About Me</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          A Passionate Editor
          <br />
          Who Loves to Tell Stories
        </h2>
      </Reveal>

      <div className="grid items-center gap-12 md:grid-cols-2">
        <Reveal>
          <div className="relative flex aspect-4/3 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-[#3a2a8c] to-[#1a0f4d]">
            <span className="text-sm text-[#b9b4e0] "><img className="absolute inset-0 w-full h-full object-cover" src="public/about pic/images (1).jpg" alt="Covering Image" /></span>
            <div className=" absolute bottom-5 left-5 flex items-center justify-center gap-3 rounded-xl bg-[#0b0726]/80 px-4 py-3 backdrop-blur">
              <div className="flex items-center justify-center gap-3">
              <span className="text-4xl font-extrabold text-[#12b5ff]">3+</span>
              <span className="text-xs leading-tight text-[#b9b4e0]">
                Years of
                <br />
                Editing
              </span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <h3 className="mb-4 text-2xl font-semibold">My Bio</h3>
          <p className="mb-4 leading-relaxed text-[#b9b4e0]">
            I'm a video editor with over three years of experience, including freelance work and
            editing for a thriving YouTube channel. I'm comfortable across editing software, with a
            background in graphic design that shapes how I handle titles, motion and visual polish.
          </p>
          <p className="mb-8 leading-relaxed text-[#b9b4e0]">
            Whether it's long-form content or short, punchy edits, I focus on pacing and clarity so
            the story always lands.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-full bg-[#12b5ff] px-7 py-3 text-sm font-semibold text-[#0b0726] transition hover:-translate-y-0.5"
          >
            Hire Me
          </a>
        </Reveal>
      </div>
    </section>
  );
}