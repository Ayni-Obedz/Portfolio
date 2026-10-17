import { site } from "../data/site";
import Reveal from "./Reveal";

export default function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        {site.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 100}>
            <div className="rounded-2xl border border-white/10 bg-[#3a2a8c]/70 p-8 text-center">
              <p className="text-4xl font-extrabold text-[#12b5ff]">{s.value}</p>
              <p className="mt-2 text-sm text-[#b9b4e0]">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}