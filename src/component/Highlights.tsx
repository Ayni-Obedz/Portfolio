import { site } from "../data/site";
import Reveal from "./Reveal";

export default function Highlights() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-6 md:grid-cols-3">
        {site.highlights.map((item, i) => (
          <Reveal key={item.title} delay={i * 120}>
            <div className="group h-full rounded-2xl border border-white/10 bg-[#3a2a8c]/60 p-8 backdrop-blur transition hover:-translate-y-2 hover:border-[#12b5ff]/60 hover:shadow-[0_10px_40px_#12b5ff33]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#12b5ff]/15 text-xl font-bold text-[#12b5ff]">
                0{i + 1}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-[#b9b4e0]">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}