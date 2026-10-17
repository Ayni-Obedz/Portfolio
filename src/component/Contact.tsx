import { site } from "../data/site";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl scroll-mt-24 px-6 py-24">
      <Reveal>
        <div className="rounded-3xl border border-white/10 bg-linear-to-br from-[#3a2a8c] to-[#1a0f4d] p-10 text-center sm:p-14">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#12b5ff]">Contact</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Have a project in mind?</h2>
          <p className="mx-auto mt-4 max-w-md text-[#b9b4e0]">
            Reach out through any of these and I'll get back to you.
          </p>

          <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">
            {site.contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 bg-[#0b0726]/40 p-5 transition hover:border-[#12b5ff]/60 hover:bg-[#0b0726]/70"
              >
                <p className="text-xs uppercase tracking-widest text-[#12b5ff]">{c.label}</p>
                <p className="mt-1 font-medium">{c.value}</p>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
      <p className="mt-16 text-center text-xs text-[#b9b4e0]/70">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </section>
  );
}


// import Reveal from "./Reveal";

// export default function Contact() {
//   return (
//     <section id="contact" className="mx-auto max-w-4xl px-6 py-24">
//       <Reveal>
//         <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#3a2a8c] to-[#1a0f4d] p-10 text-center sm:p-16">
//           <h2 className="text-3xl font-bold sm:text-4xl">Have a project in mind?</h2>
//           <p className="mx-auto mt-4 max-w-md text-[#b9b4e0]">
//             Let's cut something great together. Send a message and I'll get back to you.
//           </p>
//           <a
//             href="mailto:you@example.com"
//             className="mt-8 inline-block rounded-full bg-[#12b5ff] px-8 py-3 text-sm font-semibold text-[#0b0726] shadow-[0_0_30px_#12b5ff66] transition hover:-translate-y-0.5"
//           >
//             Say Hello
//           </a>
//         </div>
//       </Reveal>
//       <p className="mt-16 text-center text-xs text-[#b9b4e0]/70">
//         © {new Date().getFullYear()} All rights reserved.
//       </p>
//     </section>
//   );
// }