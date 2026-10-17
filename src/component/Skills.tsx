import { site } from "../data/site";
import { useInView } from "../hooks/useInView";
import Reveal from "./Reveal";

export default function Skills() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal className="mb-14 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#12b5ff]">Skills</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          I Work Hard to Improve
          <br />
          My Skills Regularly
        </h2>
      </Reveal>

      <div ref={ref} className="grid gap-x-12 gap-y-8 md:grid-cols-2">
        {site.skills.map((skill, i) => (
          <div key={skill.name}>
            <div className="mb-2 flex justify-between text-sm font-medium">
              <span>{skill.name}</span>
              <span className="text-[#b9b4e0]">{skill.level}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-[#12b5ff] shadow-[0_0_12px_#12b5ff] transition-all duration-1000 ease-out"
                style={{
                  width: inView ? `${skill.level}%` : "0%",
                  transitionDelay: `${i * 100}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}