import { site } from "../data/site";
import  ProfileCard  from "./ProfileCard";

export default function Hero() {
  return (
    <section id="home" className="relative mx-auto flex min-h-screen max-w-6xl items-center px-6 pt-24">
      <div className="grid w-full items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#12b5ff]">
            Hello, I'm
          </p>
          <h1 className="text-5xl font-extrabold leading-[1.05] sm:text-7xl">
            {site.firstName}
            <br />
            <span className="text-[#12b5ff]">{site.lastName}</span>
          </h1>
          <p className="mt-6 text-lg text-[#b9b4e0]">
            <span className="font-semibold text-white">{site.location}</span>{" "}
            <span className="font-semibold text-white">{site.role}</span> turning raw footage into
            videos people actually finish watching.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-[#12b5ff] px-7 py-3 text-sm font-semibold text-[#0b0726] shadow-[0_0_30px_#12b5ff66] transition hover:-translate-y-0.5 hover:shadow-[0_0_45px_#12b5ffaa]"
            >
              Get Connected
            </a>
            <a
              href="#services"
              className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold transition hover:border-[#12b5ff] hover:text-[#12b5ff]"
            >
              View Work
            </a>
          </div>
        </div>

        <div className="relative mx-auto ">
         <ProfileCard
           name={`${site.firstName} ${site.lastName}`}
           title="Video Editing"
           handle="yourusername"
           status="Available for work"
           contactText="Contact Me"
           avatarUrl={site.portrait || "public/profilecardpic.jpeg"}
           iconUrl="/assets/demo/iconpattern.png"
           holo={0.8}
           glare={0.9}
           tiltStrength={12}
           parallax={8}
           radius={16}
           enableTilt
           intro
           showUserInfo
           enableMobileTilt={true}
           theme="dark"
           onContactClick={() => {
             window.location.href = "#contact";
           }}
         />
       

        </div>
      </div>
    </section>
  );
}